import { Action, Store, applyMiddleware, legacy_createStore as createStore } from "redux"; 
import rootReducers, { TRootState } from "../reducers/_rootReducers";
import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";

export type AppStore = Store<TRootState, Action>;

export const store: AppStore = createStore(rootReducers, applyMiddleware(thunk) as any)

export const persistor = persistStore(store)