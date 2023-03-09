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
            'label' => 'hero.title',
            'category' => 'homepage'
        ], [
            'label' => 'hero.title',
            'category' => 'homepage'
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
            'label' => 'searchbar.buy',
            'category' => 'searchbar'
        ], [
            'label' => 'searchbar.buy',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Buy'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'searchbar.rent',
            'category' => 'searchbar'
        ], [
            'label' => 'searchbar.rent',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Rent'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'searchbar.sell',
            'category' => 'searchbar'
        ], [
            'label' => 'searchbar.sell',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Sell'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label'=> 'searchbar.location',
            'category' => 'searchbar'
        ], [
            'label' => 'searchbar.location',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Location'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'searchbar.price',
            'category' => 'searchbar'
        ], [
            'label' => 'searchbar.price',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Price'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'searchbar.beds',
            'category' => 'searchbar'
        ], [
            'label' => 'searchbar.beds',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Bed(s)'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'searchbar.baths',
            'category' => 'searchbar'
        ], [
            'label' => 'searchbar.baths',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Bath(s)'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'searchbar.submit-btn',
            'category' => 'searchbar'
        ], [
            'label' => 'searchbar.submit-btn',
            'category' => 'searchbar'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Browse Properties'
        ]);
        $pageItem->save();

        /** @var PageItems $pageItem */
        $pageItem = $page->items()->updateOrCreate([
            'label' => 'featured.title',
            'category' => 'homepage'
        ], [
            'label' => 'featured.title',
            'category' => 'homepage'
        ]);
        $pageItem->setTranslations('value', [
            'en' => 'Features Properties'
        ]);
        $pageItem->save();
    }
}
