<?php

namespace App\Models;

use Database\Factories\PropertyTypeFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\PropertyType
 *
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static PropertyTypeFactory factory(...$parameters)
 * @method static Builder|PropertyType newModelQuery()
 * @method static Builder|PropertyType newQuery()
 * @method static Builder|PropertyType query()
 * @method static Builder|PropertyType whereCreatedAt($value)
 * @method static Builder|PropertyType whereId($value)
 * @method static Builder|PropertyType whereName($value)
 * @method static Builder|PropertyType whereUpdatedAt($value)
 * @mixin Builder
 */
class PropertyType extends Model
{
    use HasFactory;
}
