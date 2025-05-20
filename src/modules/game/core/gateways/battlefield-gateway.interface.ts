import { GameModel } from "../model/game.model";

export interface IBattlefieldGateway {
    getBattlefields() : Promise<GameModel.Battlefield[]>
}