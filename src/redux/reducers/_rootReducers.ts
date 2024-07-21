import { combineReducers } from "redux";
import { counterReducer } from "./counterReducers/_counterReducers";
import { userReducer } from "./userReducers/_userReducers";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configReducers } from "./configReducers/_configReducers";

const persistConfigCon = {
    key: "config",
    storage
}

const persistedConfigReducers = persistReducer(persistConfigCon, configReducers)

const rootReducers = combineReducers({
    counter: counterReducer,
    users: userReducer,
    config: persistedConfigReducers
})

export default rootReducers

export type TRootState = ReturnType<typeof rootReducers>