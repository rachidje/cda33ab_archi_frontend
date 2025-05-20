import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { GameModel } from "../model/game.model"

export type GameState = {
    step: GameModel.Step
    form: GameModel.Form
    availableBattlefields: {
        status: 'idle' | 'loading' | 'success' | 'error',
        error?: string | null
        data: GameModel.Battlefield[]
    },
    availableStuffs: {
        status: 'idle' | 'loading' | 'success' | 'error',
        error?: string | null
        data: GameModel.Stuff[]
    }
}

const initialState: GameState = {
    step: GameModel.Step.PLAYERS,
    form: {
        players: [],
        teamLeaderId: null,
        battlefieldId: null
    },
    availableBattlefields: {
        status: 'idle',
        data: []
    },
    availableStuffs: {
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
        },
        chooseBattlefield: (state, action: PayloadAction<string>) => {
            state.form.battlefieldId = action.payload
        },
        handleLoadingStuffs: (state) => {
            state.availableStuffs.status = 'loading'
        },
        handleFetchStuffsError : (state, action: PayloadAction<string>) => {
            state.availableStuffs.status = 'error';
            state.availableStuffs.error = action.payload
        },
        storeStuffs: (state, action: PayloadAction<GameModel.Stuff[]>) => {
            state.availableStuffs.data = action.payload
            state.availableStuffs.status = 'success'
        },
        chooseStuffs: (state, action: PayloadAction<GameModel.Form>) => {
            state.form = action.payload
        }
    }
})

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;