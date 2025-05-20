import { GameModel } from "../model/game.model";

export interface IStuffsGateway {
    getStuffs(): Promise<GameModel.Stuff[]>
}