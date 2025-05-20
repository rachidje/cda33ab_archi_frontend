import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";
import { GameModel } from "../../core/model/game.model";
import { BattleFieldSection } from "../sections/battlefield/BattleFieldSection";
import { ConfirmationSection } from "../sections/confirmation/ConfirmationSection";
import { PlayerSection } from "../sections/players/PlayersSection";
import { SummarySection } from "../sections/summary/SummarySection";
import { WeaponsSection } from "../sections/weapons/WeaponsSection";

export const TeamPage: React.FC = () => {
    const step = useSelector((state: AppState) => state.game.step)

    return <main>
        {step === GameModel.Step.PLAYERS && <PlayerSection />}
        {step === GameModel.Step.BATTEFIELD && <BattleFieldSection />}
        {step === GameModel.Step.WEAPONS && <WeaponsSection />}
        {step === GameModel.Step.SUMMARY && <SummarySection />}
        {step === GameModel.Step.CREATED && <ConfirmationSection />}
    </main>;
};