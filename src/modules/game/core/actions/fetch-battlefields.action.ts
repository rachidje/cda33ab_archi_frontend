import { extractErrorMessage } from "../../../shared/error.utils";
import { Dependencies } from "../../../store/dependencies";
import { AppDispatch, AppGetState } from "../../../store/store";
import { gameSlice } from "../store/game.slice";

export const fetchBattlefields = async (
    dispatch: AppDispatch, 
    _: AppGetState,
    dependencies: Dependencies
) => {
    dispatch(gameSlice.actions.handleLoadingBattlefields())
    try {
        const battlefields = await dependencies.battlefieldGateway.getBattlefields();
        dispatch(gameSlice.actions.storeBattlefields(battlefields))
    } catch (error) {
        dispatch(gameSlice.actions.handleFetchBattlefieldsError(extractErrorMessage(error)))
    }
}

