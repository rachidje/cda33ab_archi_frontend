import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useWeaponsSection } from "./use-weapons-section.hook";

export const WeaponsSection: React.FC<{}> = () => {
    const presenter = useWeaponsSection()

    return (
        <Box>
            <Typography variant="h5">Choose your weapons</Typography>
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