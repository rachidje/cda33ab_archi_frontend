import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "../../../../store/store";
import { GameModel } from "../../../core/model/game.model";
import { gameSlice } from "../../../core/store/game.slice";
import { chooseBattlefield } from "../../../core/actions/choose-battlefield.action";


export const useBattlefieldSection = () => {
    function assignBattlefield(battlefieldId: string) {
        setAssignedBattlefieldId(battlefieldId)
    }

    function onNext() {
        if(assignedBattlefieldId === null) throw new Error("Battlefield not assigned")
        dispatch(chooseBattlefield(assignedBattlefieldId));
    }

    function onPrevious() {
        dispatch(gameSlice.actions.setStep(GameModel.Step.PLAYERS));
    }

    function isSubmittable() {
        return assignedBattlefieldId !== null;
    }

    const dispatch = useAppDispatch();
    const initialAssignedBattlefieldId = useSelector((state: AppState) => state.game.form.battlefieldId)

    const [assignedBattlefieldId, setAssignedBattlefieldId] = useState<string | null>(initialAssignedBattlefieldId);
    const availableBattlefields: GameModel.Battlefield[] = useSelector((state: AppState) => state.game.availableBattlefields.data)

    return {
        assignBattlefield,
        onNext,
        onPrevious,
        isSubmittable: isSubmittable(),
        availableBattlefields,
        assignedBattlefieldId
    }
}