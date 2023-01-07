import useSWR from 'swr';
import axios from '@/lib/axios';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { User as UserProps } from '@/types/user';
import { useCookies } from 'react-cookie';

export type SetErrorsProps = Dispatch<SetStateAction<never[]>>;
export type SetStatusProps = Dispatch<SetStateAction<null>>;

export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: {
  middleware?: string;
  redirectIfAuthenticated?: string;
} = {}) => {
  const [cookies, setCookies] = useCookies();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    data: user,
    error,
    mutate,
  } = useSWR<UserProps, string>(tryUser() ? '/api/user' : null, () =>
    axios
      .get('/api/user')
      .then((res) => {
        setCookies('Authenticated', true, { sameSite: 'lax' });
        return res.data.data;
      })
      .catch((error) => {
        console.log('Now should remove');
        setCookies('Authenticated', false, { sameSite: 'lax', path: '/' });
        if (error.response.status !== 409) {
          throw error;
        }
        router.push('/verify-email');
      }),
  );

  const csrf = () =>
    axios.get('/sanctum/csrf-cookie').catch(() => {
      setLoading(false);
    });

  const register = async ({
    setErrors,
    ...props
  }: {
    setErrors: SetErrorsProps;
  }) => {
    setLoading(true);
    await csrf();

    setErrors([]);

    axios
      .post('/register', props)
      .then(() => {
        mutate();
      })
      .catch((error) => {
        setCookies('Authenticated', false, { sameSite: 'lax', path: '/' });
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
    setLoading(false);
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
    setLoading(true);
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/login', props)
      .then(() => mutate())
      .catch((error) => {
        setCookies('Authenticated', false, { sameSite: 'lax', path: '/' });
        if (error.response.status !== 422) throw error;

        setLoading(false);
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
    setLoading(true);
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/reset-password', { token: searchParams.get('token'), ...props })
      .then((response) =>
        router.push('/login?rest=' + response.data.status.toString('base64')),
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
    setLoading(false);
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
      await axios.post('/logout').then(() => {
        setCookies('Authenticated', false, { sameSite: 'lax', path: '/' });
        mutate();
      });
    }

    window.location.pathname = '/signin';
  }, [error, mutate, setCookies]);

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

  function tryUser() {
    if (middleware === 'auth' || cookies.Authenticated !== 'false') {
      return true;
    }
    return null;
  }

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
    loading,
  };
};
