import { BattlefieldFactory } from "../model/battlefield-factory";
import { GameModel } from "../model/game.model";
import { IBattlefieldGateway } from "./battlefield-gateway.interface";

export class ApiBattlefieldsGateway implements IBattlefieldGateway {
    constructor(
        private readonly url: string
    ) {}

    async getBattlefields(): Promise<GameModel.Battlefield[]> {
        const response = await fetch(`${this.url}/battlefields`)
        const data = await response.json()

        return data.map((battlefield: {id: string, title: string, difficulty: number}) => {
            return BattlefieldFactory.create({
                id: battlefield.id,
                title: battlefield.title,
                difficulty: battlefield.difficulty
            })
        })
    }
}