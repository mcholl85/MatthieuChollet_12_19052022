import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function useFetch(userId, params) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = `http://localhost:3000/user/${userId}/${params}`;

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        setData(await response.json());
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { isLoading, data, error };
}

useFetch.propTypes = {
  userId: PropTypes.string.isRequired,
  params: PropTypes.string,
};
