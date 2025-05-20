import { GameModel } from "./game.model";

export class StuffFactory {
    static create(data?: Partial<GameModel.Stuff>) : GameModel.Stuff {
        return {
            id: "1",
            title: "Fusil d’assaut M4A1",
            type: GameModel.StuffType.WEAPON,
            requiredRole: GameModel.Role.ASSAUT,
            ...data
        }
    }
}