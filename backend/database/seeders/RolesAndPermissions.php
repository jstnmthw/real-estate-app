<?php

namespace Database\Seeders;

//use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $user = Role::findOrCreate('user');
        $admin = Role::findOrCreate('admin');
        $agent = Role::findOrCreate('agent');
        $contact =Role::findOrCreate('contact');

        $createProperty = Permission::create(['name' => 'create properties']);
        $readProperty = Permission::create(['name' => 'read properties']);
        $updateProperty = Permission::create(['name' => 'update properties']);
        $deleteProperty = Permission::create(['name' => 'delete properties']);

        $readProperty->syncRoles([$user, $agent, $admin, $contact]);
        $createProperty->syncRoles([$agent, $admin, $user]);
        $updateProperty->syncRoles([$agent, $admin, $user]);
        $deleteProperty->syncRoles([$agent, $admin, $user]);
    }
}
