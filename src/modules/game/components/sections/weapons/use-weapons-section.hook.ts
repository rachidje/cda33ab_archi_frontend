import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import { AppState, useAppDispatch } from "../../../../store/store"
import { chooseStuffs } from "../../../core/actions/choose-stuffs.action"
import { StuffForm } from "../../../core/form/stuff-form"
import { GameModel } from "../../../core/model/game.model"
import { gameSlice } from "../../../core/store/game.slice"

export const useWeaponsSection = () => {
    function findPlayerById(id: string) {
        return form.players.find(player => player.id === id)
    }

    function getSelectableWeapons(playerId: string): GameModel.Stuff[] {
        const player = findPlayerById(playerId)
        if(!player) return []
        return stuffForm.current.getSelectableWeapons(stuffs, player)
    }
    function getSelectableGadgets(playerId: string): GameModel.Stuff[] {
        const player = findPlayerById(playerId)
        if(!player) return []
        return stuffForm.current.getSelectableGadgets(stuffs, player)
    }
    function getSelectableSkills(playerId: string): GameModel.Stuff[] {
        const player = findPlayerById(playerId)
        if(!player) return []
        return stuffForm.current.getSelectableSkills(stuffs, player)
    }

    function assignWeapon(playerId: string, stuffId: string) {
        const newState = stuffForm.current.assignWeapon(form, playerId, stuffId)
        setForm(newState)
    }
    function assignGadget(playerId: string, stuffId: string) {
        const newState = stuffForm.current.assignGadget(form, playerId, stuffId)
        setForm(newState)
    }
    function assignSkill(playerId: string, stuffId: string) {
        const newState = stuffForm.current.assignSkill(form, playerId, stuffId)
        setForm(newState)
    }

    function onPrevious() {
        dispatch(gameSlice.actions.setStep(GameModel.Step.BATTEFIELD));
    }

    function isSubmittable() {
        return stuffForm.current.isSubmittable(form);
    }

    function onNext() {
        dispatch(chooseStuffs(form))
    }

    const dispatch = useAppDispatch()
    const stuffForm = useRef(new StuffForm())
    
    const stuffs: GameModel.Stuff[] = useSelector((state: AppState) => state.game.availableStuffs.data)
    const initialForm = useSelector((state: AppState) => state.game.form)
    const [form, setForm] = useState<GameModel.Form>(initialForm)

    return {
        getSelectableWeapons,
        getSelectableGadgets,
        getSelectableSkills,
        assignWeapon,
        assignGadget,
        assignSkill,
        onNext,
        onPrevious,
        isSubmittable: isSubmittable(),
        players: form.players
    }
}