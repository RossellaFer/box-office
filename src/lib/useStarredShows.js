import { useEffect, useReducer } from 'react';

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistentValue = localStorage.getItem(localStorageKey);
    return persistentValue ? JSON.parse(persistentValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return [...currentStarred, action.showId];
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const useStarredShows = () => {
  return usePersistedReducer(starredShowsReducer, [], 'starredShows');
};

export { useStarredShows };
