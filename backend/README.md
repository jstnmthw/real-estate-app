# Real Estate App

This is an application written in Laravel 9.x, Meilisearch, redis for full text search on geospatial data using lat & long points from https://geonames.org

## Installation

#### 1. Migrate & seed initial database

`php artisan migrate:fresh --seed`

#### 2. Seed Geo data

If you want all countries leave the country

`php artisan geo:seed`

If you want a specific country (and already downloaded the file)

`php artisan geo:seed <country> --append`

#### 3. (Optional) Seed Dev Data

If you want to seed mock data into the database

`php artisan dev:seed`

#### 4. Import MySQL db to Meilisearch

`php artisan scout:import App\\Models\\Property`
