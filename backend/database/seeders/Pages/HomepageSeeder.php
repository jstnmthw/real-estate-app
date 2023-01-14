<?php

namespace Database\Seeders\Pages;

use App\Models\Page;
use App\Models\PageItems;
use Illuminate\Database\Seeder;

class HomepageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $page = Page::query()->updateOrCreate([
            'label' => 'Homepage'
        ], [
           'label' => 'Homepage'
        ]);
        $page->setTranslations('meta_title',
            ['en' => 'RealEstate - Thailand\'s #1 property listing database.']
        );
        $page->setTranslations('meta_desc',
            ['en' => '1,425,000 Current listings the major metropolitan areas including Bangkok, Phuket, Pattaya, Chiang Mai and more...']
        );
        $page->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'hero.title'
        ], [
            'label' => 'hero.title',
            'category' => 'homepage'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Thailand\'s #1 property listing platform'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'featured.title'
        ], [
            'label' => 'featured.title',
            'category' => 'homepage'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Features Properties'
        ]);
        $pageItem->save();

        $pageItem = PageItems::query()->updateOrCreate([
            'label' => 'searchbar.buy'
        ], [
            'label' => 'searchbar.buy',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Buy'
        ]);
        $pageItem->save();

        $pageItem = PageItems::query()->updateOrCreate([
            'label' => 'searchbar.rent'
        ], [
            'label' => 'searchbar.rent',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Rent'
        ]);
        $pageItem->save();

        $pageItem = PageItems::query()->updateOrCreate([
            'label' => 'searchbar.sell'
        ], [
            'label' => 'searchbar.sell',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Sell'
        ]);
        $pageItem->save();

        $pageItem = PageItems::query()->updateOrCreate([
            'label'=> 'searchbar.location'
        ], [
            'label' => 'searchbar.location',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Location'
        ]);
        $pageItem->save();

        $pageItem = PageItems::query()->updateOrCreate([
            'label' => 'searchbar.price'
        ], [
            'label' => 'searchbar.price',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Price'
        ]);
        $pageItem->save();

        $pageItem = PageItems::query()->updateOrCreate([
            'label' => 'searchbar.beds'
        ], [
            'label' => 'searchbar.beds',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Bed(s)'
        ]);
        $pageItem->save();

        $pageItem = PageItems::query()->updateOrCreate([
            'label' => 'searchbar.baths'
        ], [
            'label' => 'searchbar.baths',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Bath(s)'
        ]);
        $pageItem->save();

        $pageItem = PageItems::query()->updateOrCreate([
            'label' => 'searchbar.submit-btn'
        ], [
            'label' => 'searchbar.submit-btn',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Browse Properties'
        ]);
        $pageItem->save();
    }
}
