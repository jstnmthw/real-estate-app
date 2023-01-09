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
 * @method static Builder|UserSocialLogin newModelQuery()
 * @method static Builder|UserSocialLogin newQuery()
 * @method static Builder|UserSocialLogin query()
 * @method static Builder|UserSocialLogin whereAccessToken($value)
 * @method static Builder|UserSocialLogin whereCreatedAt($value)
 * @method static Builder|UserSocialLogin whereExpires($value)
 * @method static Builder|UserSocialLogin whereExternalId($value)
 * @method static Builder|UserSocialLogin whereId($value)
 * @method static Builder|UserSocialLogin whereRefreshToken($value)
 * @method static Builder|UserSocialLogin whereScopes($value)
 * @method static Builder|UserSocialLogin whereUpdatedAt($value)
 * @method static Builder|UserSocialLogin whereUserId($value)
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
