import { IBattlefieldGateway } from "../game/core/gateways/battlefield-gateway.interface"
import { IStuffsGateway } from "../game/core/gateways/stuffs-gateway.interface"

export type Dependencies = {
    battlefieldGateway: IBattlefieldGateway,
    stuffsGateway: IStuffsGateway
}