<?php

namespace App\Models;

use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\Project
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $description
 * @property string $latitude
 * @property string $longitude
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method ProjectFactory factory(...$parameters)
 * @method Builder|Project newModelQuery()
 * @method Builder|Project newQuery()
 * @method Builder|Project query()
 * @method Builder|Project whereCreatedAt($value)
 * @method Builder|Project whereCreatedBy($value)
 * @method Builder|Project whereDescription($value)
 * @method Builder|Project whereId($value)
 * @method Builder|Project whereLatitude($value)
 * @method Builder|Project whereLongitude($value)
 * @method Builder|Project whereTitle($value)
 * @method Builder|Project whereUpdatedAt($value)
 * @method Builder|Project whereUpdatedBy($value)
 * @mixin Builder
 */
class Project extends Model
{
    use HasFactory;
}
