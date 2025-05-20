import { produce } from "immer";
import { GameModel } from "../model/game.model";

export class StuffForm {
    private isStuffType(stuff: GameModel.Stuff, type: GameModel.StuffType) {
        return stuff.type === type
    }

    private hasRequiredRole(stuff: GameModel.Stuff, player: GameModel.Player) {
        return player.role === stuff.requiredRole
    }

    private getDraftPlayer(form: GameModel.Form, playerId: string) {
        return form.players.find(player => player.id === playerId)
    }

    getSelectableWeapons(stuffs: GameModel.Stuff[], player: GameModel.Player) {
        return stuffs.filter(stuff => {
            if(
                !this.isStuffType(stuff, GameModel.StuffType.WEAPON) || 
                !this.hasRequiredRole(stuff, player)
            ) {
                return false
            }
            return true
        })
    }

    getSelectableGadgets(stuffs: GameModel.Stuff[], player: GameModel.Player) {
        return stuffs.filter(stuff => {
            if(
                !this.isStuffType(stuff, GameModel.StuffType.GADGET) || 
                !this.hasRequiredRole(stuff, player)
            ) {
                return false
            }
            return true
        })
    }

    getSelectableSkills(stuffs: GameModel.Stuff[], player: GameModel.Player) {
        return stuffs.filter(stuff => {
            if(
                !this.isStuffType(stuff, GameModel.StuffType.SKILL) || 
                !this.hasRequiredRole(stuff, player)
            ) {
                return false
            }
            return true
        })
    }

    private assignStuffToPlayer(
        form: GameModel.Form, 
        playerId: string, 
        stuffId: GameModel.StuffId | null, 
        stuffType: 'weapon' | 'gadget' | 'skill'
    ) {
        return produce(form, draft => {
            const player = this.getDraftPlayer(draft, playerId)
            if(!player) return;
            player.stuff[stuffType] = stuffId
        })
    }

    assignWeapon(form: GameModel.Form, playerId: string, weaponId: GameModel.StuffId | null) {
        return this.assignStuffToPlayer(form, playerId, weaponId, 'weapon')
    }

    assignGadget(form: GameModel.Form, playerId: string, gadgetId: GameModel.StuffId | null) {
        return this.assignStuffToPlayer(form, playerId, gadgetId, 'gadget')
    }

    assignSkill(form: GameModel.Form, playerId: string, skillId: GameModel.StuffId | null) {
        return this.assignStuffToPlayer(form, playerId, skillId, 'skill')
    }

    isSubmittable(form: GameModel.Form) {
        return form.players.every(player => {
            return player.stuff.weapon !== null
        })
    }
}