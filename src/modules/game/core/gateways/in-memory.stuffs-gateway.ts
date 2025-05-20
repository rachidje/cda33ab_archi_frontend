import { GameModel } from "../model/game.model";
import { StuffFactory } from "../model/stuff-factory";
import { IStuffsGateway } from "./stuffs-gateway.interface";

export class InMemoryStuffsGateway implements IStuffsGateway {
    async getStuffs(): Promise<GameModel.Stuff[]> {
        return [
            StuffFactory.create({
                id: "1",
                title: "Fusil d’assaut M4A1",
                type: GameModel.StuffType.WEAPON,
                requiredRole: GameModel.Role.ASSAUT,
            }),
            StuffFactory.create({
                id: "2",
                title: "Fusil à pompe SPAS-12",
                type: GameModel.StuffType.WEAPON,
                requiredRole: GameModel.Role.ASSAUT,
            }),
            StuffFactory.create({
                id: "3",
                title: "Pistolet mitrailleur UMP45",
                type: GameModel.StuffType.WEAPON,
                requiredRole: GameModel.Role.ASSAUT,
            }),
            StuffFactory.create({
                id: "4",
                title: "Grenade flash",
                type: GameModel.StuffType.GADGET,
                requiredRole: GameModel.Role.ASSAUT,
            }),
            StuffFactory.create({
                id: "5",
                title: "C4 télécommandé",
                type: GameModel.StuffType.GADGET,
                requiredRole: GameModel.Role.ASSAUT,
            }),
            StuffFactory.create({
                id: "6",
                title: "Bouclier frontal",
                type: GameModel.StuffType.GADGET,
                requiredRole: GameModel.Role.ASSAUT,
            }),
            StuffFactory.create({
                id: "7",
                title: "Rage de combat (dégâts augmentés)",
                type: GameModel.StuffType.SKILL,
                requiredRole: GameModel.Role.ASSAUT,
            }),
            StuffFactory.create({
                id: "8",
                title: "Sprint furtif",
                type: GameModel.StuffType.SKILL,
                requiredRole: GameModel.Role.ASSAUT,
            }),
            StuffFactory.create({
                id: "9",
                title: "Charge explosive",
                type: GameModel.StuffType.SKILL,
                requiredRole: GameModel.Role.ASSAUT,
            }),
            StuffFactory.create({
                id: "10",
                title: "Pistolet silencieux",
                type: GameModel.StuffType.WEAPON,
                requiredRole: GameModel.Role.SOUTIEN,
            }),
            StuffFactory.create({
                id: "11",
                title: "Fusil automatique léger",
                type: GameModel.StuffType.WEAPON,
                requiredRole: GameModel.Role.SOUTIEN,
            }),
            StuffFactory.create({
                id: "12",
                title: "SMG courte portée",
                type: GameModel.StuffType.WEAPON,
                requiredRole: GameModel.Role.SOUTIEN,
            }),
            StuffFactory.create({
                id: "13",
                title: "Trousse de soins",
                type: GameModel.StuffType.GADGET,
                requiredRole: GameModel.Role.SOUTIEN,
            }),
            StuffFactory.create({
                id: "14",
                title: "Station médicale",
                type: GameModel.StuffType.GADGET,
                requiredRole: GameModel.Role.SOUTIEN,
            }),
            StuffFactory.create({
                id: "15",
                title: "Drone de réanimation",
                type: GameModel.StuffType.GADGET,
                requiredRole: GameModel.Role.SOUTIEN,
            }),
            StuffFactory.create({
                id: "16",
                title: "Soin de zone",
                type: GameModel.StuffType.SKILL,
                requiredRole: GameModel.Role.SOUTIEN,
            }),
            StuffFactory.create({
                id: "17",
                title: "Immunité temporaire",
                type: GameModel.StuffType.SKILL,
                requiredRole: GameModel.Role.SOUTIEN,
            }),
            StuffFactory.create({
                id: "18",
                title: "Charge explosive",
                type: GameModel.StuffType.SKILL,
                requiredRole: GameModel.Role.SOUTIEN,
            }),
            StuffFactory.create({
                id: "19",
                title: "Arbalète silencieuse",
                type: GameModel.StuffType.WEAPON,
                requiredRole: GameModel.Role.ECLAIREUR,
            }),
            StuffFactory.create({
                id: "20",
                title: "Pistolet mitrailleur",
                type: GameModel.StuffType.WEAPON,
                requiredRole: GameModel.Role.ECLAIREUR,
            }),
            StuffFactory.create({
                id: "21",
                title: "Fusil léger avec silencieux",
                type: GameModel.StuffType.WEAPON,
                requiredRole: GameModel.Role.ECLAIREUR,
            }),
            StuffFactory.create({
                id: "22",
                title: "Caméra portative",
                type: GameModel.StuffType.GADGET,
                requiredRole: GameModel.Role.ECLAIREUR,
            }),
            StuffFactory.create({
                id: "23",
                title: "Leurre sonore",
                type: GameModel.StuffType.GADGET,
                requiredRole: GameModel.Role.ECLAIREUR,
            }),
            StuffFactory.create({
                id: "24",
                title: "Mine capteur",
                type: GameModel.StuffType.GADGET,
                requiredRole: GameModel.Role.ECLAIREUR,
            }),
            StuffFactory.create({
                id: "25",
                title: "Vision thermique",
                type: GameModel.StuffType.SKILL,
                requiredRole: GameModel.Role.ECLAIREUR,
            }),
            StuffFactory.create({
                id: "26",
                title: "Camouflage actif",
                type: GameModel.StuffType.SKILL,
                requiredRole: GameModel.Role.ECLAIREUR,
            }),
            StuffFactory.create({
                id: "27",
                title: "Marquage des ennemis",
                type: GameModel.StuffType.SKILL,
                requiredRole: GameModel.Role.ECLAIREUR,
            }),
        ]
    }
}