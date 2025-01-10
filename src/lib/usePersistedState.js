import { useEffect, useState } from 'react';

export const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const persistedState = sessionStorage.getItem(key);
    return persistedState ? JSON.parse(persistedState) : defaultValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const useSrcStr = () => {
  return usePersistedState('searchString', '');
};
