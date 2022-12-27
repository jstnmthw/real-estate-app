<?php

namespace App\Models;

//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;

/**
 * @property int    $id
 * @property string $name
 * @property string $nickname
 * @property string $email
 * @property Carbon $email_verified_at
 * @property string $password
 * @property string $remember_token
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property-read UserSocialLogin $logins
 * @mixin Builder
 * @mixin Role
 */
class User extends Authenticatable
{
    use HasApiTokens,
        HasFactory,
        HasRoles,
        Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'avatar',
        'nickname',
        'email_verified_at',
        'remember_token',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the logins for the user.
     */
    public function logins(): HasMany
    {
        return $this->hasMany(UserSocialLogin::class);
    }

    /**
     * Get the properties created by this user.
     *
     * @return HasMany
     */
    public function properties(): HasMany
    {
        return $this->hasMany(Property::class, 'created_by');
    }

    /**
     * Get the properties this user is listed as an agent for.
     *
     * @return BelongsToMany
     */
    public function agentProperties(): BelongsToMany
    {
        return $this->belongsToMany(Property::class)
            ->wherePivot('group', 'contact');
    }

    /**
     * Get the properties this user is listed as a contact for.
     *
     * @return BelongsToMany
     */
    public function contactProperties(): BelongsToMany
    {
        return $this->belongsToMany(Property::class)
            ->wherePivot('group', 'agent');
    }

}
