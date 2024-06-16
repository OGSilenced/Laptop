import React from 'react';
import useStyles from './index.styles';
import { Typography, Button } from '@mui/material'

export const PuppetMasterPage: React.FC = () => {
    const classes = useStyles();
    const [isQueueEnabled, setIsQueueEnabled] = React.useState(true)
    const [vehiclePickupEnabled, setVehiclePickupEnabled] = React.useState(true)

    return (
        <div className={classes.PuppetMasterPage}>
            {/* <button>Toggle Queue?</button> */}
            <section className={classes.row}>
                <div className={classes.formSection}>
                    <Typography className={classes.label}>Players In Queue</Typography>
                    <Typography className={classes.description}>7 Players</Typography>
                </div>

                <div className={classes.formSection}>
                    <Typography className={classes.label}>Active Contracts</Typography>
                    <Typography className={classes.description}>2 Contracts</Typography>
                </div>

                <div className={classes.formSection}>
                    <Typography className={classes.label}>Pending Contracts</Typography>
                    <Typography className={classes.description}>14 Contracts</Typography>
                </div>

            </section>

            <section className={classes.row}>
                <div className={classes.formSection}>
                    <Typography className={classes.label}>Queue Status ( {isQueueEnabled ? 'Online' : 'Offline'} )</Typography>
                    {isQueueEnabled ? 
                        <Button size="small" className={classes.btn} onClick={() => setIsQueueEnabled(false)}>Disable Queue</Button>
                    : <Button size="small" className={classes.btn} onClick={() => setIsQueueEnabled(true)}>Enable Queue</Button> }
                </div>

                <div className={classes.formSection}>
                    <Typography className={classes.label}>Block From Queue (StateID)</Typography>
                    <Button size="small" className={classes.btn}>Block</Button>
                </div>

                <div className={classes.formSection}>
                    <Typography className={classes.label}>Contract Vehicles/Pickup Locations (active contracts)</Typography>
                    {vehiclePickupEnabled ? 
                        <Button size="small" className={classes.btn} onClick={() => setVehiclePickupEnabled(false)}>Disable</Button>
                    : <Button size="small" className={classes.btn} onClick={() => setVehiclePickupEnabled(true)}>Enable</Button> }
                </div>
            </section>

            <section className={classes.row}>
                <div className={classes.formSection}>
                    <Typography className={classes.label}>Contract Creator</Typography>
                    <Button size="small" className={classes.btn}>Create</Button>
                </div>
            </section>

        </div>
    )
}