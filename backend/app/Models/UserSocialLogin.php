<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * App\Models\UserSocialLogin
 *
 * @property int $id
 * @property int $user_id
 * @property string $external_id
 * @property string $access_token
 * @property string|null $refresh_token
 * @property array|null $scopes
 * @property Carbon|null $expires
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read User|null $user
 * @method Builder|UserSocialLogin newModelQuery()
 * @method Builder|UserSocialLogin newQuery()
 * @method Builder|UserSocialLogin query()
 * @method Builder|UserSocialLogin whereAccessToken($value)
 * @method Builder|UserSocialLogin whereCreatedAt($value)
 * @method Builder|UserSocialLogin whereExpires($value)
 * @method Builder|UserSocialLogin whereExternalId($value)
 * @method Builder|UserSocialLogin whereId($value)
 * @method Builder|UserSocialLogin whereRefreshToken($value)
 * @method Builder|UserSocialLogin whereScopes($value)
 * @method Builder|UserSocialLogin whereUpdatedAt($value)
 * @method Builder|UserSocialLogin whereUserId($value)
 * @mixin Builder
 */
class UserSocialLogin extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'external_id',
        'access_token',
        'refresh_token',
        'scopes',
        'expires',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'external_id',
        'access_token',
        'refresh_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'expires' => 'datetime',
        'scopes' => 'array',
    ];

    /**
     * Get the user that owns the social login.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
