import { AppDispatch, AppGetState } from "../../../store/store";
import { gameSlice } from "../store/game.slice";

export const chooseBattlefield = (battlefieldId: string) => (dispatch: AppDispatch, _: AppGetState) => {
    dispatch(gameSlice.actions.chooseBattlefield(battlefieldId))
}