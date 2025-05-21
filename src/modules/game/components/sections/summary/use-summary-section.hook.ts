import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "../../../../store/store";
import { GameModel } from "../../../core/model/game.model";
import { gameSlice } from "../../../core/store/game.slice";

const selectSummary = (state: AppState): GameModel.Summary => {
    function findStuffById(stuffId: GameModel.StuffId) {
        return stuffs.find(stuff => stuff.id === stuffId) ?? null
    }

    const battlefieldId = state.game.form.battlefieldId
    const battlefield = state.game.availableBattlefields.data.find(battlefield => battlefield.id === battlefieldId)
    const teamLeaderId = state.game.form.teamLeaderId
    const stuffs = state.game.availableStuffs.data
    const players = state.game.form.players.map(player => {
        return {
            id: player.id,
            firstname: player.firstname,
            lastname: player.lastname,
            isTeamLeader: player.id === teamLeaderId,
            stuff: {
                weapon: findStuffById(player.stuff.weapon!)!,
                gadget: player.stuff.gadget ? findStuffById(player.stuff.gadget) : null,
                skill: player.stuff.skill ? findStuffById(player.stuff.skill) : null,
            }
        }   
    })

    return {
        battlefield: {
            id: battlefield!.id,
            title: battlefield!.title
        },
        players
    }

}

export const useSummarySection = () => {
    function onNext() {
        dispatch(gameSlice.actions.setStep(GameModel.Step.CREATED));
    }

    function onPrevious() {
        dispatch(gameSlice.actions.setStep(GameModel.Step.WEAPONS));
    }

    const dispatch = useAppDispatch()
    const summary: GameModel.Summary = useSelector(selectSummary);

    return {
        onNext,
        onPrevious,
        summary
    }
}