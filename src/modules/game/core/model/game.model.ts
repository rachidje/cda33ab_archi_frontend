export namespace GameModel {
    export enum Step {
        PLAYERS = 0,
        BATTEFIELD = 1,
        WEAPONS = 2,
        SUMMARY = 3,
        CREATED = 4
    }

    export type StuffId = string;

    export enum StuffType {
        WEAPON = "WEAPON",
        GADGET = "GADGET",
        SKILL = "SKILL"
    }

    export type Stuff = {
        id: string
        title: string
        type: StuffType
        requiredRole: Role | null
    }

    export type Battlefield = {
        id: string
        title: string
        difficulty: number
    }

    export enum Role {
        ASSAUT = "ASSAUT", // En première ligne, offensif, rapide
        SOUTIEN = "SOUTIEN",
        ECLAIREUR = "ECLAIREUR"
    }

    export type Player = {
        id: string
        firstname: string
        lastname: string
        age: number
        role: Role | null
        stuff: {
            weapon: StuffId | null
            gadget: StuffId | null
            skill: StuffId | null
        } 
    }

    export type Form = {
        players: Player[],
        teamLeaderId: string | null,
        battlefieldId: string | null
    }

    export type SummaryStuff = {
        id: string
        title: string
    }

    export type Summary = {
        battlefield: {
            id: string
            title: string
        },
        players: Array<{
            id: string
            firstname: string
            lastname: string
            isTeamLeader: boolean
            stuff: {
                weapon: SummaryStuff
                gadget: SummaryStuff | null
                skill: SummaryStuff | null
            }
        }>
    }
}