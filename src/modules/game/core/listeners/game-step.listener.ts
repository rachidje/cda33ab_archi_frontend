import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { GameModel } from "../model/game.model";
import { gameSlice } from "../store/game.slice";

export const registerGameStepListener = (listener: ListenerMiddlewareInstance) => {
    listener.startListening({
        actionCreator: gameSlice.actions.choosePlayers,
        effect: (_, api) => {
            api.dispatch(gameSlice.actions.setStep(GameModel.Step.BATTEFIELD))
        }
    })

    listener.startListening({
        actionCreator: gameSlice.actions.chooseBattlefield,
        effect: (_, api) => {
            api.dispatch(gameSlice.actions.setStep(GameModel.Step.WEAPONS))
        }
    })

    listener.startListening({
        actionCreator: gameSlice.actions.chooseStuffs,
        effect: (_, api) => {
            api.dispatch(gameSlice.actions.setStep(GameModel.Step.SUMMARY))
        }
    })
}