import { StuffForm } from "../form/stuff-form"
import { GameModel } from "../model/game.model"
import { PlayerFactory } from "../model/player-factory"
import { StuffFactory } from "../model/stuff-factory"

describe("StuffForm", () => {
    let stuffForm: StuffForm
    const playerWithAssautRole = PlayerFactory.create({id: "1", role: GameModel.Role.ASSAUT});
    const playerWithSoutienRole = PlayerFactory.create({id: "2", role: GameModel.Role.SOUTIEN});

    const assautWeapon = StuffFactory.create({
        id: "1",
        title: "weapon 1",
        type: GameModel.StuffType.WEAPON,
        requiredRole: GameModel.Role.ASSAUT
    })

    const soutienWeapon = StuffFactory.create({
        id: "2",
        title: "weapon 2",
        type: GameModel.StuffType.WEAPON,
        requiredRole: GameModel.Role.SOUTIEN
    })

    const assautGadget = StuffFactory.create({
        id: "3",
        title: "gadget 1",
        type: GameModel.StuffType.GADGET,
        requiredRole: GameModel.Role.ASSAUT
    })

    const soutienGadget = StuffFactory.create({
        id: "4",
        title: "gadget 2",
        type: GameModel.StuffType.GADGET,
        requiredRole: GameModel.Role.SOUTIEN
    })

    const assautSkill = StuffFactory.create({
        id: "5",
        title: "skill 1",
        type: GameModel.StuffType.SKILL,
        requiredRole: GameModel.Role.ASSAUT
    })

    const soutienSkill = StuffFactory.create({
        id: "6",
        title: "skill 2",
        type: GameModel.StuffType.SKILL,
        requiredRole: GameModel.Role.SOUTIEN
    })

    const stuffs = [assautWeapon, soutienWeapon, assautGadget, soutienGadget, assautSkill, soutienSkill]

    const submittableForm: GameModel.Form = {
        players: [{...playerWithAssautRole, stuff: {weapon: assautWeapon.id, gadget: null, skill: null}}],
        teamLeaderId: playerWithAssautRole.id,
        battlefieldId: "1"
    }

    const unSubmittableForm: GameModel.Form = {
        players: [{...playerWithAssautRole, stuff: {weapon: null, gadget: null, skill: null}}],
        teamLeaderId: playerWithAssautRole.id,
        battlefieldId: "1"
    }

    beforeEach(() => {
        stuffForm = new StuffForm();
    })

    describe("Scenario: Selecting weapons", () => {
        it.each([
            {stuffs: [], player: playerWithAssautRole, expected: []},
            {stuffs: stuffs, player: playerWithAssautRole, expected: [assautWeapon]},
            {stuffs: stuffs, player: playerWithSoutienRole, expected: [soutienWeapon]},
        ])("should return all weapons for assault role", ({stuffs, player, expected}) => {
            const result = stuffForm.getSelectableWeapons(stuffs, player)
            expect(result).toEqual(expected)
        })
    })

    describe("Scenario: Selecting gadgets", () => {
        it.each([
            {stuffs: [], player: playerWithAssautRole, expected: []},
            {stuffs: stuffs, player: playerWithAssautRole, expected: [assautGadget]},
            {stuffs: stuffs, player: playerWithSoutienRole, expected: [soutienGadget]},
        ])("should return all weapons for assault role", ({stuffs, player, expected}) => {
            const result = stuffForm.getSelectableGadgets(stuffs, player)
            expect(result).toEqual(expected)
        })
    })

    describe("Scenario: Selecting skills", () => {
        it.each([
            {stuffs: [], player: playerWithAssautRole, expected: []},
            {stuffs: stuffs, player: playerWithAssautRole, expected: [assautSkill]},
            {stuffs: stuffs, player: playerWithSoutienRole, expected: [soutienSkill]},
        ])("should return all weapons for assault role", ({stuffs, player, expected}) => {
            const result = stuffForm.getSelectableSkills(stuffs, player)
            expect(result).toEqual(expected)
        })
    })

    describe("Scenario: Assign stuff to player", () => {
        const form : GameModel.Form = {
            players: [playerWithAssautRole, playerWithSoutienRole],
            teamLeaderId: null,
            battlefieldId: null
        }

        it.each([
            {playerId: playerWithAssautRole.id, stuffId: null, expected: null},
            {playerId: playerWithAssautRole.id, stuffId: assautWeapon.id, expected: assautWeapon.id},
        ])("should assign the assaut weapon to the assault player", ({playerId, stuffId, expected}) => {
            const result = stuffForm.assignWeapon(form, playerId, stuffId)
            expect(result.players[0].stuff.weapon).toEqual(expected)
        })

        it("should assign the assaut weapon fo non existing player", () => {
            const result = stuffForm.assignWeapon(form, "non-existing-player", assautWeapon.id)
            expect(result).toEqual(form)
        })
    })

    describe("Scenario: Check if form is submittable", () => {
        it.each([
            {form: submittableForm, expected: true},
            {form: unSubmittableForm, expected: false},
        ])("should return true if form is submittable", ({form, expected}) => {
            const result = stuffForm.isSubmittable(form)
            expect(result).toEqual(expected)
        })
    })
})