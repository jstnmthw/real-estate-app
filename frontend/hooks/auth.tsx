import useSWR from 'swr';
import axios from '@/lib/axios';
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { User as UserProps } from '@/types/user';

export type SetErrorsProps = Dispatch<SetStateAction<never[]>>;
export type SetStatusProps = Dispatch<SetStateAction<null>>;

export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: {
  middleware?: string;
  redirectIfAuthenticated?: string;
} = {}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    data: user,
    error,
    mutate,
  } = useSWR<UserProps, string>('/api/user', () =>
    axios
      .get('/api/user')
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;

        router.push('/verify-email');
      }),
  );

  const csrf = () => axios.get('/sanctum/csrf-cookie');

  const register = async ({
    setErrors,
    ...props
  }: {
    setErrors: SetErrorsProps;
  }) => {
    await csrf();

    setErrors([]);

    axios
      .post('/register', props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const login = async ({
    setErrors,
    setStatus,
    ...props
  }: {
    setErrors: SetErrorsProps;
    setStatus: SetStatusProps;
    password: string;
    email: string;
    remember: boolean;
  }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/login', props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const forgotPassword = async ({
    setErrors,
    setStatus,
    email,
  }: {
    setErrors: SetErrorsProps;
    setStatus: SetStatusProps;
    email: string;
  }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/forgot-password', { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const resetPassword = async ({
    setErrors,
    setStatus,
    ...props
  }: {
    setErrors: SetErrorsProps;
    setStatus: SetStatusProps;
  }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/reset-password', { token: searchParams.get('token'), ...props })
      .then((response) =>
        // router.push('/login?reset=' + btoa(response.data.status)),
        router.push('/login?rest=' + response.data.status.toString('base64')),
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const resendEmailVerification = ({
    setStatus,
  }: {
    setStatus: SetStatusProps;
  }) => {
    axios
      .post('/email/verification-notification')
      .then((response) => setStatus(response.data.status));
  };

  const logout = useCallback(async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate());
    }

    window.location.pathname = '/signin';
  }, [error, mutate]);

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated);
    if (
      window.location.pathname === '/verify-email' &&
      user?.email_verified_at &&
      redirectIfAuthenticated
    )
      router.push(redirectIfAuthenticated);
    if (middleware === 'auth' && error) logout();
  }, [user, error, middleware, redirectIfAuthenticated, router, logout]);

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};
