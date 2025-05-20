import { createTestStore } from "../../../testing/tests-environment"
import { GameModel } from "../model/game.model"
import { PlayerFactory } from "../model/player-factory"
import { choosePlayers } from "./choose-players.action"

describe("Choose players", () => {
    it("should choose the players", () => {
        const store = createTestStore()
        const form: GameModel.Form = {
            players: [PlayerFactory.create({id: "1"})],
            teamLeaderId: null,
            battlefieldId: null
        }

        store.dispatch(choosePlayers(form));
        expect(store.getState().game.form).toEqual(form);
        expect(store.getState().game.step).toEqual(GameModel.Step.BATTEFIELD);
    })
})