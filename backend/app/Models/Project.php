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
 * @method static ProjectFactory factory(...$parameters)
 * @method static Builder|Project newModelQuery()
 * @method static Builder|Project newQuery()
 * @method static Builder|Project query()
 * @method static Builder|Project whereCreatedAt($value)
 * @method static Builder|Project whereCreatedBy($value)
 * @method static Builder|Project whereDescription($value)
 * @method static Builder|Project whereId($value)
 * @method static Builder|Project whereLatitude($value)
 * @method static Builder|Project whereLongitude($value)
 * @method static Builder|Project whereTitle($value)
 * @method static Builder|Project whereUpdatedAt($value)
 * @method static Builder|Project whereUpdatedBy($value)
 * @mixin Builder
 */
class Project extends Model
{
    use HasFactory;
}
