import { GameModel } from "./game.model";

export class PlayerFactory {
    static create(data?: Partial<GameModel.Player>) : GameModel.Player {
        return {
            id: "",
            firstname: "",
            lastname: "",
            age: 30,
            role: null,
            stuff: {
                weapon: null,
                gadget: null,
                skill: null
            },
            ...data
        }
    }
}