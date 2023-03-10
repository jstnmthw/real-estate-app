<?php

namespace App\Models;

use Database\Factories\GeoFactory;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Scout\Searchable;

/**
 * App\Models\Geo
 *
 * @property int $id
 * @property int|null $parent_id
 * @property int|null $left
 * @property int|null $right
 * @property int $depth
 * @property string $name
 * @property string $alternames
 * @property string $country
 * @property string $a1code
 * @property string $level
 * @property int $population
 * @property string $lat
 * @property string $long
 * @property string $timezone
 * @method static GeoFactory factory(...$parameters)
 * @method static Builder|Geo countries()
 * @method static Builder|Geo districts($parentId = null)
 * @method static Builder|Geo newModelQuery()
 * @method static Builder|Geo newQuery()
 * @method static Builder|Geo provinces($parentId = null)
 * @method static Builder|Geo query()
 * @method static Builder|Geo whereA1code($value)
 * @method static Builder|Geo whereAlternames($value)
 * @method static Builder|Geo whereCountry($value)
 * @method static Builder|Geo whereDepth($value)
 * @method static Builder|Geo whereId($value)
 * @method static Builder|Geo whereLat($value)
 * @method static Builder|Geo whereLeft($value)
 * @method static Builder|Geo whereLevel($value)
 * @method static Builder|Geo whereLong($value)
 * @method static Builder|Geo whereName($value)
 * @method static Builder|Geo whereParentId($value)
 * @method static Builder|Geo wherePopulation($value)
 * @method static Builder|Geo whereRight($value)
 * @method static Builder|Geo whereTimezone($value)
 * @mixin Builder
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
     * @return array|Collection
     */
    public function scopeCountries(Builder $query): array|Collection
    {
        return $query->where('level', '=', Geo::COUNTRY)->get();
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
