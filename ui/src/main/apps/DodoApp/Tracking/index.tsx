import React from 'react';
import { Typography, Button, CircularProgress } from '@mui/material';
import { FaTruck } from 'react-icons/fa';

import useStyles from './index.styles';

export const DodoTracking: React.FC = () => {
    const classes = useStyles();

    const [searchProgress, setSearchProgress] = React.useState(false);

    interface LoadedJobs {
        type: string;
        status: string;
        stops: number;
        packages: number;
        completedAt: number;
        trackingId: string;
    }

    //_0x3e0e99---logs-page
    const [loadedJobs, setLoadedJobs] = React.useState<LoadedJobs>(
        {
        type: 'Express',
        status: 'Active',
        stops: 6,
        packages: 8,
        completedAt: 3285728357,
        trackingId: '3GYUG235GYFYT',
    }
    );

    const searchForDelivery = () => {
        setSearchProgress(true);

        setTimeout(() => {
            setSearchProgress(false);
            //setIsSignedIn(active);
        }, 2500);
    }

    return (
        <div className={classes.content}>

            <section className={classes.header}>
                <Typography variant="h1" className={classes.title}>Track Deliveries</Typography>
            </section>

            <section className={classes.searchBar}>
                <input placeholder="Enter Tracking Number..." className={classes.input}></input>
                <Button size="small" className={classes.searchBtn} onClick={() => searchForDelivery()}>Search</Button>
            </section>

            { searchProgress ? <section className={classes.loadingSection}>
                <CircularProgress size={42} style={{ color: '#9CFFFF'}}></CircularProgress>
            </section> : 
            <section className={classes.trackingList}>
                {loadedJobs && 
                    <div className={classes.jobItem}>
                        <div className={classes.jobHeader}>

                            <div className={classes.jobLogo}>
                                <FaTruck className={classes.jobLogoIcon}></FaTruck>
                            </div>
                            <Typography variant="h1" className={classes.jobTitle}>{loadedJobs.trackingId}</Typography>
                        </div>

                        <div className={classes.desc}>
                            <Typography variant="h1" className={classes.descText}>
                                Type: {loadedJobs.type}, Status: {loadedJobs.status}, Stops: {loadedJobs.stops}, Packages {loadedJobs.packages}, Delivery Date: {new Date(loadedJobs.completedAt).toLocaleTimeString()} 
                            </Typography>
                        </div>

                    </div>

                    
                } { !loadedJobs && <Typography variant="h1" className={classes.noInfo}>No delivery information found.</Typography> } </section> }
    
        </div>
    )
}