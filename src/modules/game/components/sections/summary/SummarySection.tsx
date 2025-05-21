import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSummarySection } from "./use-summary-section.hook";

export const SummarySection: React.FC<{}> = () => {
    const presenter = useSummarySection();

    return (
        <Box>
            <Typography variant="h5">Summary</Typography>
            <Stack spacing={2} marginTop={2}>
                <Stack spacing={1}>
                    <Typography variant="h6">
                        <b>PLayers</b>
                    </Typography>
                    {
                        presenter.summary.players.map(player => (
                            <>
                                <Typography key={player.id} variant="body1">
                                    {player.firstname} {player.lastname}
                                </Typography>
                                {player.stuff.weapon && (
                                    <Typography variant="body2">
                                        Weapon: {player.stuff.weapon.title}
                                    </Typography>
                                )}
                                {player.stuff.gadget && (
                                    <Typography variant="body2">
                                        Gadget: {player.stuff.gadget.title}
                                    </Typography>
                                )}
                                {player.stuff.skill && (
                                    <Typography variant="body2">
                                        Skill: {player.stuff.skill.title}
                                    </Typography>
                                )}
                            </>
                        ))
                    }
                </Stack>
                <Stack spacing={1}>
                    <Typography variant="h6">
                        <b>Battlefield</b>
                    </Typography>
                    <Typography variant="body2">
                        {presenter.summary.battlefield.title}
                    </Typography>
                </Stack>
                <Grid
                    container
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    marginTop={2}
                >
                    <Grid item>
                        <Button variant="contained" onClick={presenter.onPrevious}>
                            Precedent
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={presenter.onNext}>
                            Reserver
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
}