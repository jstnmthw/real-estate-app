<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
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
        $page->category = '';
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
