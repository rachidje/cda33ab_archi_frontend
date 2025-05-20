import { useSelector } from "react-redux"
import { GameModel } from "../../../core/model/game.model"
import { AppState, useAppDispatch } from "../../../../store/store"
import { gameSlice } from "../../../core/store/game.slice"

export const useWeaponsSection = () => {
    function getSelectableWeapons() {
        return []
    }
    function getSelectableGadgets() {
        return []
    }
    function getSelectableSkills() {
        return []
    }

    function assignWeapon(playerId: string, weaponId: string) {}
    function assignGadget(playerId: string, gadgetId: string) {}
    function assignSkill(playerId: string, gadgetId: string) {}

    function onPrevious() {
        dispatch(gameSlice.actions.setStep(GameModel.Step.BATTEFIELD));
    }
    function onNext() {}
    function isSubmittable() {
        return false
    }

    const dispatch = useAppDispatch()

    const players: GameModel.Player[] = useSelector((state: AppState) => state.game.form.players);

    return {
        getSelectableWeapons,
        getSelectableGadgets,
        getSelectableSkills,
        assignWeapon,
        assignGadget,
        assignSkill,
        onNext,
        onPrevious,
        isSubmittable: isSubmittable()
    }
}