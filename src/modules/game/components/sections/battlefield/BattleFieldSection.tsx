import { Box, Button, Card, CardActionArea, Grid, Typography } from "@mui/material";
import React from "react";
import { useBattlefieldSection } from "./use-battlefields-section.hook";

export const BattleFieldSection: React.FC<{}> = () => {

    const presenter = useBattlefieldSection();

    return (
        <Box>
            <Typography variant="h5">Choose your battlefield</Typography>
            <Grid container sx={{paddingTop: 2}} columnSpacing={2} rowSpacing={2}>
                {
                    presenter.availableBattlefields.map(battlefield => (
                        <Grid key={battlefield.id} item xs={4}>
                            <SelectableBattlefield
                                title={battlefield.title}
                                isSelected= {presenter.assignedBattlefieldId === battlefield.id}
                                onSelect={() => presenter.assignBattlefield(battlefield.id)}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <Grid 
                container
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                margin={2}
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

const SelectableBattlefield: React.FC<{
    title: string;
    isSelected: boolean;
    onSelect: () => void
}> = ({title, isSelected, onSelect}) => {
    return (
        <CardActionArea onClick={onSelect}>
            <Card sx={{padding: 4}} elevation={isSelected ? 6 : 1}>
                <Typography variant="h6" fontWeight={isSelected ? 700 : undefined}>
                    {title}
                </Typography>
            </Card>
        </CardActionArea>
    )
}