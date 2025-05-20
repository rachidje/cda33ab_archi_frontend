import { GameModel } from "./game.model";

export class PlayerFactory {
    static create(data?: Partial<GameModel.Player>) : GameModel.Player {
        return {
            id: "",
            firstname: "",
            lastname: "",
            age: 30,
            ...data
        }
    }
}