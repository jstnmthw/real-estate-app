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
 * @method static ImagesFactory factory(...$parameters)
 * @method static Builder|Images newModelQuery()
 * @method static Builder|Images newQuery()
 * @method static Builder|Images query()
 * @method static Builder|Images whereCreatedAt($value)
 * @method static Builder|Images whereHash($value)
 * @method static Builder|Images whereId($value)
 * @method static Builder|Images whereName($value)
 * @method static Builder|Images wherePath($value)
 * @method static Builder|Images whereType($value)
 * @method static Builder|Images whereUpdatedAt($value)
 * @mixin Builder
 */
class Images extends Model
{
    use HasFactory;
}
