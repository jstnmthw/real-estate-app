<?php

namespace App\Models;

//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\PersonalAccessToken;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $avatar
 * @property int|null $phone
 * @property string|null $nickname
 * @property string|null $address
 * @property int|null $country_id
 * @property int|null $province_id
 * @property int|null $city_id
 * @property int|null $language_id
 * @property Carbon|null $email_verified_at
 * @property string|null $password
 * @property int $verified
 * @property string|null $remember_token
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection|Property[] $agentProperties
 * @property-read int|null $agent_properties_count
 * @property-read Collection|Property[] $contactProperties
 * @property-read int|null $contact_properties_count
 * @property-read Collection|UserSocialLogin[] $logins
 * @property-read int|null $logins_count
 * @property-read DatabaseNotificationCollection|DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read Collection|Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read Collection|Property[] $properties
 * @property-read int|null $properties_count
 * @property-read Collection|Role[] $roles
 * @property-read int|null $roles_count
 * @property-read Collection|PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static UserFactory factory(...$parameters)
 * @method static Builder|User newModelQuery()
 * @method static Builder|User newQuery()
 * @method static Builder|User permission($permissions)
 * @method static Builder|User query()
 * @method static Builder|User count()
 * @method static Builder|User role($roles, $guard = null)
 * @method static Builder|User whereAddress($value)
 * @method static Builder|User whereAvatar($value)
 * @method static Builder|User whereCityId($value)
 * @method static Builder|User whereCountryId($value)
 * @method static Builder|User whereCreatedAt($value)
 * @method static Builder|User whereCreatedBy($value)
 * @method static Builder|User whereEmail($value)
 * @method static Builder|User whereEmailVerifiedAt($value)
 * @method static Builder|User whereId($value)
 * @method static Builder|User whereLanguageId($value)
 * @method static Builder|User whereName($value)
 * @method static Builder|User whereNickname($value)
 * @method static Builder|User wherePassword($value)
 * @method static Builder|User wherePhone($value)
 * @method static Builder|User whereProvinceId($value)
 * @method static Builder|User whereRememberToken($value)
 * @method static Builder|User whereUpdatedAt($value)
 * @method static Builder|User whereUpdatedBy($value)
 * @method static Builder|User whereVerified($value)
 * @mixin Builder
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
