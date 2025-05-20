import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { GameModel } from "../model/game.model"

export type GameState = {
    step: GameModel.Step
    form: GameModel.Form
    availableBattlefields: {
        status: 'idle' | 'loading' | 'success' | 'error',
        error?: string | null
        data: GameModel.Battlefield[]
    }
}

const initialState: GameState = {
    step: GameModel.Step.PLAYERS,
    form: {
        players: [],
        teamLeaderId: null
    },
    availableBattlefields: {
        status: 'idle',
        data: []
    }
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<GameModel.Step>) => {
            state.step = action.payload
        },
        choosePlayers: (state, action: PayloadAction<GameModel.Form>) => {
            state.form = action.payload;
        },
        handleLoadingBattlefields: (state) => {
            state.availableBattlefields.status = 'loading'
        },
        handleFetchBattlefieldsError : (state, action: PayloadAction<string>) => {
            state.availableBattlefields.status = 'error';
            state.availableBattlefields.error = action.payload
        },
        storeBattlefields: (state, action: PayloadAction<GameModel.Battlefield[]>) => {
            state.availableBattlefields.data = action.payload;
            state.availableBattlefields.status = 'success'
        }
    }
})

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;