import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { fetchBattlefields } from "../actions/fetch-battlefields.action";
import { fetchStuffs } from "../actions/fetch-stuffs.action";
import { GameModel } from "../model/game.model";
import { gameSlice } from "../store/game.slice";

export const registerFetcherListeners = (listener: ListenerMiddlewareInstance) => {
    listener.startListening({
        actionCreator: gameSlice.actions.setStep,
        effect : (action, api) => {
            switch(action.payload) {
                case GameModel.Step.BATTEFIELD:
                    api.dispatch(fetchBattlefields as any);
                    break;
                case GameModel.Step.WEAPONS:
                    api.dispatch(fetchStuffs as any);
                    break;
            }
        }
    })
}