import { extractErrorMessage } from "../../../shared/error.utils";
import { Dependencies } from "../../../store/dependencies";
import { AppDispatch, AppGetState } from "../../../store/store";
import { gameSlice } from "../store/game.slice";

export const fetchStuffs = async (dispatch: AppDispatch, _: AppGetState, dependencies: Dependencies) => {
    dispatch(gameSlice.actions.handleLoadingStuffs())
    try {
        const stuffs = await dependencies.stuffsGateway.getStuffs()
        dispatch(gameSlice.actions.storeStuffs(stuffs))
    } catch (error) {
        dispatch(gameSlice.actions.handleFetchStuffsError(extractErrorMessage(error)))
    }
}