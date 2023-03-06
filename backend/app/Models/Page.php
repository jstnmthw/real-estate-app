<?php

namespace App\Models;

use Database\Factories\PageFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;
use Spatie\Translatable\HasTranslations;

/**
 * App\Models\Page
 *
 * @property int $id
 * @property string $name
 * @property array $meta_title
 * @property array $meta_desc
 * @property string|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string $locale Used to pass locale to api resource
 * @method static PageFactory factory(...$parameters)
 * @method static Builder|Page newModelQuery()
 * @method static Builder|Page newQuery()
 * @method static Builder|Page query()
 * @method static Builder|Page whereCreatedAt($value)
 * @method static Builder|Page whereDeletedAt($value)
 * @method static Builder|Page whereId($value)
 * @method static Builder|Page whereMetaDesc($value)
 * @method static Builder|Page whereMetaTitle($value)
 * @method static Builder|Page whereName($value)
 * @method static Builder|Page whereUpdatedAt($value)
 * @mixin Builder
 */
class Page extends Model
{
    use HasFactory,
        HasTranslations;

    /**
     * Attributes that can be translated
     * @var string[]
     */
    public array $translatable = [
        'meta_title',
        'meta_desc'
    ];

    /**
     * @var mixed|string
     */
    public mixed $category;

    /**
     * Attribute to use for routing (default: id)
     * @return string
     */
    public function getRouteKeyName(): string
    {
        return 'label';
    }

    /**
     * Get the text items of this page
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(PageItems::class);
    }
}
