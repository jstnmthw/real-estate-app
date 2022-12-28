<?php

namespace App\Http\Resources;

use App\Models\Property;
use App\Models\PropertyType;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Property
 */
class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'for_sale' => $this->for_sale,
            'for_rent' => $this->for_rent,
            'sales_price' => $this->sales_price,
            'rental_price' => $this->rental_price,
            'bedrooms' => $this->bedrooms,
            'bathrooms' => $this->bathrooms,
            'is_self_listed' => $this->is_self_listed,
            'area_type' => $this->area_type,
            'area_size' => $this->area_size,
            'plot_size' => $this->plot_size,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'currency_id' => $this->currency_id,
            'property_type_id' => $this->property_type_id,
            'project' => $this->project->title,
            'country' => $this->country->name,
            'province' => $this->province->name,
            'district' => $this->district->name,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'sales_title' => $this->sales_title,
            'rental_title' => $this->rental_title,
            'property_type' => $this->propertyType->name,
        ];
    }
}
