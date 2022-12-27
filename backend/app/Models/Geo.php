<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Scout\Searchable;

/**
 * @method static Builder provinces
 * @method static Builder countries
 */
class Geo extends Model
{
    use HasFactory,
        Searchable;

    protected $table = 'geo';

    public const COUNTRY = 'PCLI';
    public const PROVINCE = 'ADM1';
    public const DISTRICT = 'ADM2';

    private const excludeWords = [
        'Amphoe',
        'Changwat',
        'Tambon',
        'Thawi',
        'Province',
    ];

    /**
     * Name accessor.
     * Removes redundant naming conventions from Geonames database.
     *
     * @return Attribute
     */
    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => trim(Str::replace(self::excludeWords, '', $value))
        );
    }

    /**
     * Get the name of the index associated with the model.
     *
     * @return string
     */
    public function searchableAs(): string
    {
        return 'geo';
    }

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray(): array
    {
        return [
            'id' => $this->getKey(),
            'parent_id' => $this->parent_id,
            'name' => $this->name,
            'country' => $this->country,
            'level' => $this->level,
            'lat' => $this->lat,
            'long' => $this->long,
        ];
    }

    /**
     * Condition if the model should be imported to MeiliSearch.
     *
     * @return bool
     */
    public function shouldBeSearchable(): bool
    {
        if (!in_array($this->level, [self::COUNTRY, self::PROVINCE, self::DISTRICT])) {
            return false;
        }
        return true;
    }

    /**
     * Modify the query used to retrieve models when making all the models searchable.
     *
     * @param Builder $query
     * @return Builder
     */
    protected function makeAllSearchableUsing($query): Builder
    {
        return $query->whereIn('level', [self::COUNTRY, self::PROVINCE, self::DISTRICT])
            ->when($this->level === self::DISTRICT, fn ($query) => $query->whereNotNull('parent_id'));
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeCountries(Builder $query): Builder
    {
        return $query->where('level', '=', Geo::COUNTRY);
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param Builder $query
     * @param $parentId
     * @return Builder
     */
    public function scopeProvinces(Builder $query, $parentId = null): Builder
    {
        return $query->where('level', '=', Geo::PROVINCE)
            ->when($parentId, fn ($q) => $q->where('parent_id', $parentId));
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param Builder $query
     * @param $parentId
     * @return Builder
     */
    public function scopeDistricts(Builder $query, $parentId = null): Builder
    {
        return $query->where('level', '=', Geo::DISTRICT)
            ->when($parentId, fn ($q) => $q->where('parent_id', $parentId));
    }
}
