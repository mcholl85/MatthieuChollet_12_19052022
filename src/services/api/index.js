import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function useFetch(userId, params) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = `http://localhost:3000/user/${userId}/${params}`;

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { isLoading, data, error };
}

useFetch.propTypes = {
  userId: PropTypes.string.isRequired,
  params: PropTypes.string,
};