import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { gameSlice } from "../store/game.slice";
import { GameModel } from "../model/game.model";
import { fetchBattlefields } from "../actions/fetch-battlefields.action";

export const registerFetcherListeners = (listener: ListenerMiddlewareInstance) => {
    listener.startListening({
        actionCreator: gameSlice.actions.setStep,
        effect : (action, api) => {
            switch(action.payload) {
                case GameModel.Step.BATTEFIELD:
                    api.dispatch(fetchBattlefields as any);
                    break;
            }
        }
    })
}