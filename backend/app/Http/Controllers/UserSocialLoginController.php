<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserSocialLogin;
use Exception;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Laravel\Socialite\Two\User as SocialUser;

class UserSocialLoginController extends Controller
{
    /**
     * GitHub's Auth Callback
     * @return RedirectResponse
     */
    public function githubCallback(): RedirectResponse
    {
        /** @var SocialUser $githubUser */
        $githubUser = Socialite::driver('github')->user();

        $user = $this->upsertUser($githubUser);

        Auth::login($user, true);

        return redirect(config('app.frontend_url'));
    }

    /**
     * GitHub's Auth Redirect Response
     * @return RedirectResponse
     */
    public function githubRedirect(): RedirectResponse
    {
        return Socialite::driver('github')->redirect();
    }

    /**
     * Google's Auth Callback
     * @return RedirectResponse
     */
    public function googleCallback(): RedirectResponse
    {
        /** @var SocialUser $googleUser */
        $googleUser = Socialite::driver('google')->user();

        $user = $this->upsertUser($googleUser);

        Auth::login($user, true);

        return redirect(config('app.frontend_url'));
    }

    /**
     * Google's Auth Redirect Response
     * @return RedirectResponse
     */
    public function googleRedirect(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Update or create User
     * @param SocialUser $socialUser
     * @return User
     */
    private function upsertUser(SocialUser $socialUser): User
    {
        /** @var User $user */
        $user = User::query()
            ->updateOrCreate(
                ['email' => $socialUser->email],
                [
                    'name' => $socialUser->name,
                    'email' => $socialUser->email,
                    'avatar' => $socialUser->avatar,
                    'nickname' => $socialUser->nickname,
                    'email_verified_at' => now(),
                ]
            );

        UserSocialLogin::query()
            ->updateOrCreate(
                ['external_id' => $socialUser->id],
                [
                    'user_id' => $user->getKey(),
                    'access_token' => $socialUser->token,
                    'refresh_token' => $socialUser->refreshToken,
                    'scopes' => json_encode($socialUser->approvedScopes),
                    'expires' => $socialUser->expiresIn,
                ]
            );

        return $user;
    }
}
