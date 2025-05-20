export namespace GameModel {
    export enum Step {
        PLAYERS = 0,
        BATTEFIELD = 1,
        WEAPONS = 2,
        SUMMARY = 3,
        CREATED = 4
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
    }

    export type Form = {
        players: Player[],
        teamLeaderId: string | null,
        battlefieldId: string | null
    }
}