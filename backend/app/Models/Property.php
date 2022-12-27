<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Scout\Searchable;

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

    protected $fillable = [
        'agent_id',
        'contact_id',
        'created_by',
    ];

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
     * @return array
     */
    public function toSearchableArray(): array
    {
        return [
            'title' => $this->title ?? $this->autoGeneratedTitle(),
            'description' => $this->description,
            'for_rent' => $this->for_rent,
            'for_sale' => $this->for_sale,
            'sales_price' => $this->sales_price,
            'rental_price' => $this->rental_price,
            'bedrooms' => $this->bedrooms,
            'bathrooms' => $this->bathrooms,
            'area_type' => $this->area_type,
            'area_size' => $this->area_size,
            'plot_size' => $this->plot_size,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'property_type_id' => $this->property_type_id,
            'project_id' => $this->project_id,
            'country_id' => $this->country_id,
            'region_id' => $this->region_id,
            'city_id' => $this->city_id,
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
     * Get an automatically generated title based
     * on bedrooms, property type and location.
     *
     * @return Attribute
     */
    protected function autoGeneratedTitle(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->bedrooms . 'bedrooms' . $this->propertyType->name . 'in ' . $this->province
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
