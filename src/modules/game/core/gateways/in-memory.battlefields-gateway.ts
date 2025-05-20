import { BattlefieldFactory } from "../model/battlefield-factory";
import { GameModel } from "../model/game.model";
import { IBattlefieldGateway } from "./battlefield-gateway.interface";

export class InMemoryBattlefieldsGateway implements IBattlefieldGateway {
    async getBattlefields(): Promise<GameModel.Battlefield[]> {
        return [
            BattlefieldFactory.create({id: "1", title: "Zone delta", difficulty: 5}),
            BattlefieldFactory.create({id: "2", title: "Brume Zone", difficulty: 7}),
            BattlefieldFactory.create({id: "1", title: "Blackforge", difficulty: 8})
        ]
    }
}