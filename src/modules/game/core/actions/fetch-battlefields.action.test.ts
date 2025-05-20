import { createTestStore } from "../../../testing/tests-environment"
import { BattlefieldFactory } from "../model/battlefield-factory"
import { fetchBattlefields } from "./fetch-battlefields.action"

describe("Fetch battlefields", () => {
    it("should fetch battlefields", async () => {
        const battlefield = BattlefieldFactory.create()
        const listOfBattlefields = [battlefield]

        const store = createTestStore({
            dependencies: {
                battlefieldGateway: {
                    getBattlefields: () => Promise.resolve(listOfBattlefields)
                }
            }
        });

        const promise = store.dispatch(fetchBattlefields);

        expect(store.getState().game.availableBattlefields.status).toEqual('loading')

        await promise

        expect(store.getState().game.availableBattlefields.data).toEqual(listOfBattlefields);
        expect(store.getState().game.availableBattlefields.status).toEqual('success');
    })

    it("should handle failure when fetching battlefields", async () => {
        const store = createTestStore({
            dependencies: {
                battlefieldGateway: {
                    getBattlefields: () => Promise.reject(
                        new Error("Failed to fetch battlefields")
                    )
                }
            }
        })

        const promise= store.dispatch(fetchBattlefields)

        expect(store.getState().game.availableBattlefields.status).toEqual('loading')

        await promise;

        expect(store.getState().game.availableBattlefields.data).toEqual([])
        expect(store.getState().game.availableBattlefields.status).toEqual('error');
        expect(store.getState().game.availableBattlefields.error).toEqual("Failed to fetch battlefields")
    })
})