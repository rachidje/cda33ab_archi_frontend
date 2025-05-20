import { GameModel } from "./game.model";

export class BattlefieldFactory {
    static create(data?: GameModel.Battlefield) {
        return {
            id: "1",
            title: "battlefield-1",
            difficulty: 10,
            ...data
        }
    }
}