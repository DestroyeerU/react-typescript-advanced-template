import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import rootReducer from '../ducks/rootReducer';

export default (reducers: typeof rootReducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'appNameKey',
      storage,

      // ducks to persist (folder name)
      whitelist: [],
    },
    reducers
  );

  return persistedReducer;
};
