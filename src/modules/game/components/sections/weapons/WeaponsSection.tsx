import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import React from "react";
import { GameModel } from "../../../core/model/game.model";
import { useWeaponsSection } from "./use-weapons-section.hook";

export const WeaponsSection: React.FC<{}> = () => {
    const presenter = useWeaponsSection()

    return (
        <Box>
            <Typography variant="h5">Choose your weapons</Typography>
            <Stack sx={{marginTop: 4}} gap={4}>
                {
                    presenter.players.map(player => (
                        <PlayerComposer
                            key={player.id}
                            playerId={player.id}
                            firstname={player.firstname}
                            lastname={player.lastname}
                            role={player.role}
                            selectedWeaponId={player.stuff.weapon!}
                            selectedGadgetId={player.stuff.gadget!}
                            selectedSkillId={player.stuff.skill!}
                            weapons={presenter.getSelectableWeapons(player.id)}
                            gadgets={presenter.getSelectableGadgets(player.id)}
                            skills={presenter.getSelectableSkills(player.id)}
                            onWeaponSelected={presenter.assignWeapon}
                            onGadgetSelected={presenter.assignGadget}
                            onSkillSelected={presenter.assignSkill}
                        />
                    ) )
                }
            </Stack>
            <Grid 
                container
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                marginTop={2}
            >
                <Grid item>
                    <Button variant="contained" onClick={presenter.onPrevious}>Precedent</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={presenter.onNext} disabled={!presenter.isSubmittable} >Suivant</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

const PlayerComposer: React.FC<{
    playerId: string
    firstname: string
    lastname: string
    role: GameModel.Role | null

    selectedWeaponId: GameModel.StuffId | null
    selectedGadgetId: GameModel.StuffId | null
    selectedSkillId: GameModel.StuffId | null

    weapons: GameModel.Stuff[]
    gadgets: GameModel.Stuff[]
    skills: GameModel.Stuff[]

    onWeaponSelected: (playerId: string, stuffId: string) => void
    onGadgetSelected: (playerId: string, stuffId: string) => void
    onSkillSelected: (playerId: string, stuffId: string) => void
}> = ({
    playerId, 
    firstname, 
    lastname, 
    role,
    selectedWeaponId, 
    selectedGadgetId, 
    selectedSkillId, 
    weapons, 
    gadgets, 
    skills, 
    onWeaponSelected, 
    onGadgetSelected, 
    onSkillSelected
}) => {
    return (
        <Stack rowGap={2}>
            <Typography variant="h6">
                {firstname} {lastname} | {role}
            </Typography>
            <FormControl fullWidth>
                <InputLabel>Weapon</InputLabel>
                <Select 
                    label="Weapon"
                    value={selectedWeaponId ?? undefined}
                    onChange={(event: SelectChangeEvent) => {
                        onWeaponSelected(playerId, event.target.value as string);
                    }}
                >
                    {weapons.map(weapon => (
                        <MenuItem key={weapon.id} value={weapon.id}>
                            {weapon.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Gadget</InputLabel>
                <Select 
                    label="Gadget"
                    value={selectedGadgetId ?? undefined}
                    onChange={(event: SelectChangeEvent) => {
                        onGadgetSelected(playerId, event.target.value as string);
                    }}
                >
                    {gadgets.map(gadget => (
                        <MenuItem key={gadget.id} value={gadget.id}>
                            {gadget.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Skill</InputLabel>
                <Select 
                    label="Skill"
                    value={selectedSkillId ?? undefined}
                    onChange={(event: SelectChangeEvent) => {
                        onSkillSelected(playerId, event.target.value as string);
                    }}
                >
                    {skills.map(skill => (
                        <MenuItem key={skill.id} value={skill.id}>
                            {skill.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Stack>
    )
}