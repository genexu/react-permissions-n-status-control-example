import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useErrorPageHanlder = () => {
  const history = useHistory();

  return useCallback((err) => {
    const response = err?.response;

    const status = response?.status;
    const code = response?.data?.code || 'ERROR-000001';
    const message = response?.data?.message || 'Oups, something went wrong';

    const state = {
      status,
      code,
      message,
    };

    history.push({
      pathname: `/error/${code}`,
      state,
    });
  }, []);
};

export default useErrorPageHanlder;
