import { nanoid } from "@reduxjs/toolkit";
import { produce } from "immer";
import { GameModel } from "../model/game.model";

export class PlayersForm {

    addPlayer(state: GameModel.Form) : GameModel.Form {
        return produce(state, draft => {
            draft.players.push({
                id: nanoid(),
                firstname: "John",
                lastname: "Doe",
                age: 30
            })
        })
    }

    removePlayer(state: GameModel.Form, id: string) : GameModel.Form {
        return produce(state, draft => {
            const index = draft.players.findIndex(player => player.id === id);
            if(index < 0) return;
            draft.players.splice(index, 1);

            if(draft.teamLeaderId === id) {
                draft.teamLeaderId = null;
            }
        })
    }

    changeTeamLeader(state: GameModel.Form, id: string) : GameModel.Form {
        return produce(state, draft => {
            const existingPlayer = draft.players.some(player => player.id === id);
            draft.teamLeaderId = existingPlayer ? id : null;
        })
    }

    isSubmittable(state: GameModel.Form) : boolean {
        return state.teamLeaderId !== null &&
            state.players.every(player => player.age > 0) &&
            state.players.every(player => player.firstname.length > 0) &&
            state.players.every(player => player.lastname.length > 0)
    }

    updatePlayer<K extends keyof GameModel.Player>(
        state: GameModel.Form, 
        id: string,
        key: K,
        value: GameModel.Player[K]
    ) : GameModel.Form {
        return produce(state, draft => {
            const player = draft.players.find(player => player.id === id);
            if (!player) return;
            player[key] = value
        })
    }
}