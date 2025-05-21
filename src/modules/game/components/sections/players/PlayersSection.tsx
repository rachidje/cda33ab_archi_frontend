import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { GameModel } from "../../../core/model/game.model";
import { usePlayersSection } from "./use-players-section.hook";

export const PlayerSection: React.FC<{}> = () => {
    const presenter = usePlayersSection();

    return (
        <Box sx={{marginTop: 2}}>
            <Typography variant="h5">Joueurs</Typography>
            <Grid sx={{paddingTop: 2}} rowSpacing={4}>
                <Box>
                    {
                        presenter.form.players.map(player => (
                            <Box key={player.id}>
                                <PlayerRow 
                                    id={player.id}
                                    firstname={player.firstname}
                                    lastname={player.lastname}
                                    age= {player.age}
                                    role= {player.role}
                                    isTeamLeader= {player.id === presenter.form.teamLeaderId}
                                    onChange={presenter.updatePlayer}
                                    onDelete={presenter.removePlayer}
                                    onChangeTeamLeader={presenter.changeTeamLeader}
                                />
                            </Box>
                        ))
                    }
                </Box>
            </Grid>

            <Grid 
                container
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                marginTop={2}
            >
                <Grid item>
                    <Button variant="contained" onClick={presenter.addPLayer}>Ajouter</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={presenter.onNext} disabled={!presenter.isSubmittable} >Suivant</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

const PlayerRow: React.FC<{
    id: string
    firstname: string
    lastname: string
    age: number
    role: GameModel.Role | null
    isTeamLeader: boolean
    onChange: <K extends keyof GameModel.Player> (id: string, key: K, value: GameModel.Player[K]) => void
    onDelete: (id: string) => void
    onChangeTeamLeader: (id: string) => void
}> = ({id, firstname, lastname, age, role, isTeamLeader, onChange, onDelete, onChangeTeamLeader}) => {
    return (
        <Box>
            <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                <Grid item>
                    <FormControl>
                        <FormLabel>Prenom</FormLabel>
                        <TextField  
                            value={firstname}
                            onChange={(e) => onChange(id, "firstname", e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormLabel>Nom</FormLabel>
                        <TextField 
                            value={lastname}
                            onChange={(e) => onChange(id, "lastname", e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormLabel>Age</FormLabel>
                        <TextField 
                            value={age}
                            onChange={(e) => onChange(id, "age", parseInt(e.target.value))}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel>Role</InputLabel>
                        <Select
                            label='Role'
                            value={role}
                            onChange={(e) => onChange(id, "role", e.target.value as GameModel.Role)}
                        >
                        {Object.values(GameModel.Role).map((roleOption) => (
                            <MenuItem key={roleOption} value={roleOption}>
                            {roleOption}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControlLabel 
                        control={
                            <Checkbox 
                                checked= {isTeamLeader}
                                onChange={() => onChangeTeamLeader(id)}
                            />   
                        }
                        label= "Leader"
                    />
                </Grid>
                <Box sx={{marginTop: 2}}>
                    <Button
                        variant="contained"
                        onClick={() => onDelete(id)}
                        color="error"
                        startIcon= {<DeleteIcon />}
                    >Supprimer</Button>
                </Box>
            </Grid>
        </Box>
    )
}