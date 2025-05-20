import { createTestStore } from "../../../testing/tests-environment"
import { GameModel } from "../model/game.model";
import { chooseBattlefield } from "./choose-battlefield.action";

describe("Choose battlefield", () => {
    it("should choose a battlefield", () => {
        const store = createTestStore()
        store.dispatch(chooseBattlefield("1"));

        expect(store.getState().game.form.battlefieldId).toEqual("1");
        expect(store.getState().game.step).toEqual(GameModel.Step.WEAPONS);
    })
})