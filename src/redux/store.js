import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import expenseTrackerReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, expenseTrackerReducer)
export let store = createStore(persistedReducer)
export let persistor = persistStore(store)