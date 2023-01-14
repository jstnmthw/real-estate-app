<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Spatie\Translatable\HasTranslations;

/**
 * App\Models\PageItems
 *
 * @property int $id
 * @property string $label
 * @property array $value
 * @property int $page_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|PageItems newModelQuery()
 * @method static Builder|PageItems newQuery()
 * @method static Builder|PageItems query()
 * @method static Builder|PageItems whereCreatedAt($value)
 * @method static Builder|PageItems whereId($value)
 * @method static Builder|PageItems whereLabel($value)
 * @method static Builder|PageItems wherePageId($value)
 * @method static Builder|PageItems whereUpdatedAt($value)
 * @method static Builder|PageItems whereValue($value)
 * @mixin Builder
 */
class PageItems extends Model
{
    use HasFactory,
        HasTranslations;

    public array $translatable = ['value'];
}
