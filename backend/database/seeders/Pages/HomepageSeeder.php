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
        $page->setTranslations('meta_title', [
            'en' => 'RealEstate - Thailand\'s #1 property listing database.',
            'ru' => 'RuEstate - Thailand\'s #1 property listing database.',
        ]);
        $page->setTranslations('meta_desc',
            ['en' => '1,425,000 Current listings the major metropolitan areas including Bangkok, Phuket, Pattaya, Chiang Mai and more...']
        );
        $page->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'title',
            'category' => 'hero'
        ], [
            'label' => 'title',
            'category' => 'hero'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Thailand\'s #1 property listing platform',
            'de' => 'Thailands führende Plattform für Immobilienanzeigen',
            'fr' => 'La plateforme d\'annonces immobilières n° 1 en Thaïlande',
            'th' => 'แพลตฟอร์มประกาศอสังหาริมทรัพย์อันดับ 1 ของประเทศไทย',
            'ru' => 'Платформа №1 по продаже недвижимости в Таиланде',
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'buy',
            'category' => 'searchbar'
        ], [
            'label' => 'buy',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Buy'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'rent',
            'category' => 'searchbar'
        ], [
            'label' => 'rent',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Rent'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'sell',
            'category' => 'searchbar'
        ], [
            'label' => 'sell',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Sell'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label'=> 'location',
            'category' => 'searchbar'
        ], [
            'label' => 'location',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Location'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'price',
            'category' => 'searchbar'
        ], [
            'label' => 'price',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Price'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'beds',
            'category' => 'searchbar'
        ], [
            'label' => 'beds',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Bed(s)'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'baths',
            'category' => 'searchbar'
        ], [
            'label' => 'baths',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Bath(s)'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'submit-btn',
            'category' => 'searchbar'
        ], [
            'label' => 'submit-btn',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Browse Properties'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'title',
            'category' => 'featured-properties'
        ], [
            'label' => 'title',
            'category' => 'featured-properties'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Features Properties'
        ]);
        $pageItem->save();
    }
}
