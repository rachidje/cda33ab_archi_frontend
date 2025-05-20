import { PlayersForm } from "../form/players-form";
import { GameModel } from "../model/game.model";
import { PlayerFactory } from "../model/player-factory";

describe("PlayersForm", () => {
    const johnDoe = PlayerFactory.create({id: "1", firstname: "John", lastname: "Doe",role: GameModel.Role.ASSAUT, stuff: {weapon: "1", skill: "1", gadget: "1"}})
    const janeDoe = PlayerFactory.create({id: "2", firstname: "Jane", lastname: "Doe",role: GameModel.Role.ASSAUT, stuff: {weapon: "1", skill: "1", gadget: "1"}})

    const emptyState: GameModel.Form = {
        players: [],
        teamLeaderId: null,
        battlefieldId: null
    }

    const stateWithOnePlayer: GameModel.Form = {
        players: [johnDoe],
        teamLeaderId: null,
        battlefieldId: null
    }

    const stateWithTwoPlayers: GameModel.Form = {
        players: [johnDoe, janeDoe],
        teamLeaderId: "1",
        battlefieldId: null
    }


    let form: PlayersForm;

    beforeEach(() => {
        form = new PlayersForm();
    })

    describe("Scenario: Add player", () => {
        it("should add a player", () => {
            const state = form.addPlayer(emptyState);
            expect(state.players).toEqual([
                {id: expect.any(String), firstname: "John", lastname: "Doe", age: 30, role: null, stuff: {weapon: null, skill: null, gadget: null}}
            ])
        })

        it("should add a player when ther's alrrady one", () => {
            const state = form.addPlayer(stateWithOnePlayer);
            expect(state.players).toEqual([
                johnDoe,
                {id: expect.any(String), firstname: "John", lastname: "Doe", age: 30, role: null, stuff: {weapon: null, skill: null, gadget: null}}
            ])
        })

        it("should add a player when ther's alrrady two", () => {
            const state = form.addPlayer(stateWithTwoPlayers);
            expect(state.players).toEqual([
                johnDoe, janeDoe,
                {id: expect.any(String), firstname: "John", lastname: "Doe", age: 30, role: null, stuff: {weapon: null, skill: null, gadget: null}}
            ])
        })
    })

    describe("Scenario: Remove player", () => {
        it("should return empty array", () => {
            const state = form.removePlayer(emptyState, "")
            expect(state.players).toEqual([])
        })

        it("should remove player with given id when ther's one", () => {
            const state = form.removePlayer(stateWithOnePlayer, "1")
            expect(state.players).toEqual([])
        })

        it("should remove player with given id when there's two", () => {
            const state = form.removePlayer(stateWithTwoPlayers, "1")
            expect(state.players).toEqual([janeDoe])
        })

        it("should set team leader id to null if I remove the team leader", () => {
            const state = form.removePlayer(stateWithTwoPlayers, "1")
            expect(state.teamLeaderId).toEqual(null)
        })
    })

    describe("Scenario: Define a team leader", () => {
        it("team leader is null if no players", () => {
            const state = form.changeTeamLeader(emptyState, "")
            expect(state.teamLeaderId).toEqual(null)
        })

        it("team leader ID should be the first user id if one user", () => {
            const state = form.changeTeamLeader(stateWithOnePlayer, "1")
            expect(state.teamLeaderId).toEqual("1")
        })

        it("define team leader ID with more one player", () => {
            const state = form.changeTeamLeader(stateWithTwoPlayers, "2")
            expect(state.teamLeaderId).toEqual("2")
        })
    })

    describe("Scenario: IsSubmittable", () => {
        it("should not be submittable if no team leader defined", () => {
            const isSubmittable = form.isSubmittable(emptyState);
            expect(isSubmittable).not.toBeTruthy()
        })

        it("should be submittable if one team leader defined", () => {
            const isSubmittable = form.isSubmittable(stateWithTwoPlayers)
            expect(isSubmittable).toBeTruthy()
        })

        it("Should not be submittable if age <= 0", () => {
            const invalidState = {
                ...stateWithOnePlayer,
                teamLeaderId: "1",
                players: [{...johnDoe, age: 0}]
            }
            const isSubmittable = form.isSubmittable(invalidState);
            expect(isSubmittable).not.toBeTruthy();
        })
    })

    describe("Scenario: Update player", () => {
        it.each([
            {
                key: "firstname" as keyof GameModel.Player,
                value: "Jane"
            },
            {
                key: "lastname" as keyof GameModel.Player,
                value: "Wick"
            },
            {
                key: "age" as keyof GameModel.Player, 
                value: 45
            },
        ])
        ("should change the firstname of the player", ({key, value}) => {
            const state = form.updatePlayer(stateWithOnePlayer, "1", key, value)
            expect(state.players[0][key]).toEqual(value)
        })

        it("should return if no player exist", () => {
            const state = form.updatePlayer(stateWithOnePlayer, "2", "firstname", "toto")
            expect(state).toEqual(stateWithOnePlayer)
        })
    })

})