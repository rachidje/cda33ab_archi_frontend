import { GameModel } from "../model/game.model";
import { StuffFactory } from "../model/stuff-factory";
import { IStuffsGateway } from "./stuffs-gateway.interface";

export class ApiStuffsGateway implements IStuffsGateway {
    constructor(
        private readonly url: string
    ) {}

    async getStuffs(): Promise<GameModel.Stuff[]> {
        const response = await fetch(`${this.url}/stuffs`)
        const data = await response.json()

        return data.map((stuff: {id: string, title: string, type: string, requiredRole: string}) => {
            return StuffFactory.create({
                id: stuff.id,
                title: stuff.title,
                type: stuff.type as GameModel.StuffType,
                requiredRole: stuff.requiredRole as GameModel.Role
            })
        })
    }
}