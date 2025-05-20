import { combineReducers, configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { registerGameStepListener } from "../game/core/listeners/game-step.listener";
import { gameReducer } from "../game/core/store/game.slice";
import { Dependencies } from "./dependencies";
import { registerFetcherListeners } from "../game/core/listeners/fetcher.listener";

const reducers = combineReducers({
    game: gameReducer
});

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<typeof reducers>;
export type AppDispatch = AppStore["dispatch"];
export type AppGetState = AppStore["getState"];


export const createStore = (config: {
    initialState?: AppState
    dependencies: Dependencies;
}) => {
    const store = configureStore({
        preloadedState: config?.initialState,
        reducer: reducers,
        devTools: true,
        middleware: (getDefaultMiddleware) => {
            const listener = createListenerMiddleware();
            registerGameStepListener(listener);
            registerFetcherListeners(listener)

            return getDefaultMiddleware({
                thunk: {
                    extraArgument: config.dependencies,
                }
            }).prepend(listener.middleware)
        }
    })

    return store;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();