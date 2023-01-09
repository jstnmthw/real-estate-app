<?php

namespace App\Models;

use Database\Factories\ImagesFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\Images
 *
 * @property int $id
 * @property string $name
 * @property string $hash
 * @property string $path
 * @property string $type
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method ImagesFactory factory(...$parameters)
 * @method Builder|Images newModelQuery()
 * @method Builder|Images newQuery()
 * @method Builder|Images query()
 * @method Builder|Images whereCreatedAt($value)
 * @method Builder|Images whereHash($value)
 * @method Builder|Images whereId($value)
 * @method Builder|Images whereName($value)
 * @method Builder|Images wherePath($value)
 * @method Builder|Images whereType($value)
 * @method Builder|Images whereUpdatedAt($value)
 * @mixin Builder
 */
class Images extends Model
{
    use HasFactory;
}
