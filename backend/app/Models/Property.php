<?php

namespace App\Models;

use Database\Factories\PropertyFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Carbon;
use Laravel\Scout\Searchable;

/**
 * App\Models\Property
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $description
 * @property int|null $for_sale
 * @property int|null $for_rent
 * @property int|null $sales_price
 * @property int|null $rental_price
 * @property int|null $bedrooms
 * @property int|null $bathrooms
 * @property int $is_self_listed
 * @property string|null $area_type
 * @property int|null $area_size
 * @property int|null $plot_size
 * @property string $latitude
 * @property string $longitude
 * @property int|null $currency_id
 * @property int|null $property_type_id
 * @property int|null $project_id
 * @property int|null $country_id
 * @property int|null $province_id
 * @property int|null $district_id
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $sales_title
 * @property string|null $rental_title
 * @property-read Collection|User[] $agents
 * @property-read int|null $agents_count
 * @property-read Collection|User[] $contacts
 * @property-read int|null $contacts_count
 * @property-read Geo|null $country
 * @property-read User|null $createdBy
 * @property-read Geo|null $district
 * @property-read Project|null $project
 * @property-read PropertyType|null $propertyType
 * @property-read Geo|null $province
 * @method static PropertyFactory factory(...$parameters)
 * @method static Builder|Property newModelQuery()
 * @method static Builder|Property newQuery()
 * @method static Builder|Property query()
 * @method static Builder|Property whereAreaSize($value)
 * @method static Builder|Property whereAreaType($value)
 * @method static Builder|Property whereBathrooms($value)
 * @method static Builder|Property whereBedrooms($value)
 * @method static Builder|Property whereCountryId($value)
 * @method static Builder|Property whereCreatedAt($value)
 * @method static Builder|Property whereCreatedBy($value)
 * @method static Builder|Property whereCurrencyId($value)
 * @method static Builder|Property whereDescription($value)
 * @method static Builder|Property whereDistrictId($value)
 * @method static Builder|Property whereForRent($value)
 * @method static Builder|Property whereForSale($value)
 * @method static Builder|Property whereId($value)
 * @method static Builder|Property whereIsSelfListed($value)
 * @method static Builder|Property whereLatitude($value)
 * @method static Builder|Property whereLongitude($value)
 * @method static Builder|Property wherePlotSize($value)
 * @method static Builder|Property whereProjectId($value)
 * @method static Builder|Property wherePropertyTypeId($value)
 * @method static Builder|Property whereProvinceId($value)
 * @method static Builder|Property whereRentalPrice($value)
 * @method static Builder|Property whereSalesPrice($value)
 * @method static Builder|Property whereTitle($value)
 * @method static Builder|Property whereUpdatedAt($value)
 * @method static Builder|Property whereUpdatedBy($value)
 * @mixin Builder
 */
class Property extends Model
{
    use HasFactory, Searchable;

    const AREA_SQM = 'sqm';
    const AREA_SQFT = 'sqft';
    const AREA_SQR = 'sqr';

    public static array $areaTypes = [
        self::AREA_SQM,
        self::AREA_SQFT,
        self::AREA_SQR
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'sales_title',
        'rental_title'
    ];

    /**
     * Eager loading relationships to modal (Use with caution)
     *
     * @var array
     */
    protected $with = [];

    /**
     * Get the name of the index associated with the model.
     *
     * @return string
     */
    public function searchableAs(): string
    {
        return 'property';
    }

    /**
     * Get the indexable data array for the model.
     *
     */
    public function toSearchableArray(): array
    {
        return [
            'for_rent' => $this->for_rent,
            'for_sale' => $this->for_sale,
            'sales_price' => $this->sales_price,
            'rental_price' => $this->rental_price,
            'bedrooms' => $this->bedrooms,
            'bathrooms' => $this->bathrooms,
            'area_size' => $this->area_size,
            'plot_size' => $this->plot_size,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'property_type_id' => $this->property_type_id,
            'project_id' => $this->project_id,
            'country_id' => $this->country_id,
            'province_id' => $this->province_id,
            'district_id' => $this->district_id,
            'updated_at' => $this->updated_at,
        ];
    }

    /**
     * Get the project this property is in.
     *
     * @return BelongsTo
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * Get the property type for this property.
     *
     * @return BelongsTo
     */
    public function propertyType(): BelongsTo
    {
        return $this->belongsTo(PropertyType::class);
    }

    /**
     * Get the user who created this property.
     *
     * @return BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the agent(s) listed for this property.
     *
     * @return BelongsToMany
     */
    public function agents(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->wherePivot('group', 'agent');
    }

    /**
     * Get the contact(s) listed for this property.
     *
     * @return BelongsToMany
     */
    public function contacts(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->wherePivot('group', 'contact');
    }

    /**
     * Get the country associated with this property.
     *
     * @return BelongsTo
     */
    public function country(): BelongsTo
    {
        return $this->belongsTo(Geo::class);
    }

    /**
     * Get the province associated with this property.
     *
     * @return BelongsTo
     */
    public function province(): BelongsTo
    {
        return $this->belongsTo(Geo::class);
    }


    /**
     * Get the district associated with this property.
     *
     * @return BelongsTo
     */
    public function district(): BelongsTo
    {
        return $this->belongsTo(Geo::class);
    }

    /**
     * Get an automatically generated title based
     * on bedrooms, property type and location.
     *
     * @return Attribute
     */
    protected function salesTitle(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this?->bedrooms . ' bedrooms ' . $this->bathrooms . ' bathrooms ' . $this->propertyType?->name . ' for sale in ' . $this->district?->name
        );
    }

    /**
     * Get an automatically generated title based
     * on bedrooms, property type and location.
     *
     * @return Attribute
     */
    protected function rentalTitle(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->bedrooms . ' bedrooms ' . $this->bathrooms . ' bathrooms ' . $this->propertyType?->name . ' for rent in ' . $this->district?->name
        );
    }

    /**
     * Get an automatically generated description
     * based on ChatAI.
     *
     * @return Attribute
     */
    protected function autoGeneratedDescription(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => 'Description'
        );
    }
}
