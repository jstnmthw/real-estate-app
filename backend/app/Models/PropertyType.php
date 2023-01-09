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
 * @method PropertyTypeFactory factory(...$parameters)
 * @method Builder|PropertyType newModelQuery()
 * @method Builder|PropertyType newQuery()
 * @method Builder|PropertyType query()
 * @method Builder|PropertyType whereCreatedAt($value)
 * @method Builder|PropertyType whereId($value)
 * @method Builder|PropertyType whereName($value)
 * @method Builder|PropertyType whereUpdatedAt($value)
 * @mixin Builder
 */
class PropertyType extends Model
{
    use HasFactory;
}
