import { useRef, useState } from "react";
import { useAppDispatch } from "../../../../store/store";
import { choosePlayers } from "../../../core/actions/choose-players.action";
import { PlayersForm } from "../../../core/form/players-form";
import { GameModel } from "../../../core/model/game.model";

export const usePlayersSection = () => {
    function addPLayer() {
        const newState = playersForm.current.addPlayer(form);
        setForm(newState);
    }

    function removePlayer(id: string) {
        const newState = playersForm.current.removePlayer(form, id);
        setForm(newState);
    }

    function changeTeamLeader(id: string) {
        const newState = playersForm.current.changeTeamLeader(form, id);
        setForm(newState);
    }

    function isSubmittable() {
        return playersForm.current.isSubmittable(form);
    }

    function updatePlayer<K extends keyof GameModel.Player>(id: string, key: K, value: GameModel.Player[K]) {
        const newState = playersForm.current.updatePlayer(form, id, key, value);
        setForm(newState);
    }

    function onNext() {
        dispatch(choosePlayers(form))
    }

    const dispatch = useAppDispatch()

    const [form, setForm] = useState<GameModel.Form>({
        players: [],
        teamLeaderId: null
    })

    const playersForm = useRef(new PlayersForm())

    return {
        addPLayer,
        removePlayer,
        updatePlayer,
        changeTeamLeader,
        onNext,
        isSubmittable: isSubmittable(),
        form
    }
}