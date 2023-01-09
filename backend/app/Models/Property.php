<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Scout\Searchable;

/**
 * @property integer id
 * @property string title
 * @property string description
 * @property boolean for_sale
 * @property boolean for_rent
 * @property integer sales_price
 * @property integer rental_price
 * @property integer bedrooms
 * @property integer bathrooms
 * @property boolean is_self_listed
 * @property string image
 * @property string area_type
 * @property integer area_size
 * @property integer plot_size
 * @property float latitude
 * @property float longitude
 * @property integer currency_id
 * @property integer property_type_id
 * @property Project project
 * @property integer project_id
 * @property integer country_id
 * @property integer province_id
 * @property integer district_id
 * @property Geo country
 * @property Geo province
 * @property Geo district
 * @property Carbon created_by
 * @property Carbon updated_by
 * @property Carbon created_at
 * @property Carbon updated_at
 * @property string sales_title
 * @property string rental_title
 * @property PropertyType propertyType
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
    protected $appends = ['sales_title', 'rental_title'];

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

    public function country(): BelongsTo
    {
        return $this->belongsTo(Geo::class);
    }

    public function province(): BelongsTo
    {
        return $this->belongsTo(Geo::class);
    }

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
