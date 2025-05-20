export namespace GameModel {
    export enum Step {
        PLAYERS = 0,
        BATTEFIELD = 1,
        WEAPONS = 2,
        SUMMARY = 3,
        CREATED = 4
    }

    export enum WeaponType {
        MAIN_WEAPON = "WEAPON",
        GADGET = "GADGET",
        SKILL = "SKILL"
    }

    export type Battlefield = {
        id: string
        title: string
        difficulty: number
    }

    export type Player = {
        id: string
        firstname: string
        lastname: string
        age: number
        stuff: {
            weapon: string | null
            gadget: string | null
            skill: string | null
        } 
    }

    export type Form = {
        players: Player[],
        teamLeaderId: string | null,
        battlefieldId: string | null
    }
}