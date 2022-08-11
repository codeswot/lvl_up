import { applyMiddleware, compose, createStore } from 'redux';
import Reducers from '@redux/reducers';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const store = createStore(
    Reducers,
    compose(applyMiddleware(ReduxThunk))
);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store as any);
export default store;