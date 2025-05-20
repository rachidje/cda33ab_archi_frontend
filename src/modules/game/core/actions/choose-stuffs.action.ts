import { AppDispatch, AppGetState } from "../../../store/store";
import { GameModel } from "../model/game.model";
import { gameSlice } from "../store/game.slice";

export const chooseStuffs= (form: GameModel.Form) => async (dispatch: AppDispatch, _: AppGetState) => {
    dispatch(gameSlice.actions.chooseStuffs(form))
}