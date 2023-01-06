import axios from '@/lib/axios';

const csrf = () => axios.get('/sanctum/csrf-cookie');

export const useProperty = () => {
  const search = async () => {
    await csrf();

    axios
      .get('/api/property/search')
      .then((response) => console.log(response))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
      });
  };

  return {
    search,
  };
};
