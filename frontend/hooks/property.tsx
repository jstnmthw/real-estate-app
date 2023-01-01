import axios from '@/lib/axios';
import { SetErrorsProps, SetStatusProps } from '@/hooks/auth';
import { useSearchParams } from 'next/navigation';

const csrf = () => axios.get('/sanctum/csrf-cookie');

export const useProperty = () => {
  const searchProperty = async ({
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
      .post('/api/property/search', { q: '', ...props })
      .then((response) => console.log(response))
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  return {
    searchProperty,
  };
};
