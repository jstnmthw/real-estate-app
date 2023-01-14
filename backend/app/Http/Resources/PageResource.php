<?php

namespace App\Http\Resources;

use App\Models\Page;
use App\Models\PageItems;
use Database\Factories\PageFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;

/**
 * App\Resources\PageResource
 *
 * @property int $id
 * @property string $name
 * @property array $meta_title
 * @property array $meta_desc
 * @property string|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string $locale
 * @property PageItems $items
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
class PageResource extends JsonResource
{
    /**
     * Create a new resource instance.
     *
     * @param  mixed  $resource
     * @param  ?string $locale
     * @return void
     */
    public function __construct($resource, ?string $locale)
    {
        parent::__construct($resource);
        $this->locale = $locale;
    }

    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        App::setLocale($this->locale);
        // return parent::toArray($request);
        return [
            'meta' => [
                'title' => $this->meta_title,
                'description' => $this->meta_desc,
            ],
            'items' => PageItemResource::collection($this->items)
                ->collection
                ->mapWithKeys(function ($item) {
                    return [
                        $item['label'] => $item['value']
                    ];
                }),
        ];
    }
}
