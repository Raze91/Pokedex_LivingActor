import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemonsSlice";
import paginationReducer from "./slices/paginationSlice";
import favoritesReducer from "./slices/favoritesSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    pagination: paginationReducer,
    favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
