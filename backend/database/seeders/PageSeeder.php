<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $page = new Page();
        $page->name = 'Homepage';
        $page->setTranslations(
            'meta_title',
            [
                'en' => 'Name in English',
                'nl' => 'Naam in het Nederlands'
            ]
        );
        $page->setTranslations(
            'meta_desc',
            [
                'en' => 'Name in English',
                'nl' => 'Naam in het Nederlands'
            ]
        );
        $page->save();
    }
}
