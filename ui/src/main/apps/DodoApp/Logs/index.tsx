import React from 'react';
import { Typography, Button, CircularProgress } from '@mui/material';
import { FaTruck } from 'react-icons/fa';

import useStyles from './index.styles'
import { LogoSVG } from '../Sidebar/logo/svg';

export const DodoLogs: React.FC = () => {
    const classes = useStyles();

    const [searchProgress, setSearchProgress] = React.useState(false);

    interface LoadedLogs {
        type: string;
        status: string;
        stops: number;
        packages: number;
        completedAt: number;
        trackingId: string;
        assignedBy: string;
    }

    const [loadedLogs] = React.useState([
        {
            trackingId: '67678WFWF6G',
            assignedBy: 'Bentley Casso',
            type: 'Express',
            status: 'Active',
            stops: 12, 
            packages: 16,
            completedAt: 123784,
        }
    ])

    const searchForDeliveryLog = () => {
        setSearchProgress(true);

        setTimeout(() => {
            setSearchProgress(false);
            //setIsSignedIn(active);
        }, 2500);
    }

    return (
        <div className={classes.content}>

            <section className={classes.header}>
                <Typography variant="h1" className={classes.title}>Delivery Logs</Typography>
            </section>


            <section className={classes.searchBar}>
                <input placeholder="Enter State Id..." type="number" className={classes.input}></input>
                <Button size="small" className={classes.searchBtn} onClick={() => searchForDeliveryLog()}>Search</Button>
            </section> 
            { searchProgress ? <section className={classes.loadingSection}>
                <CircularProgress size={42} style={{ color: '#9CFFFF'}}></CircularProgress>
            </section> : 
            <section className={classes.trackingList}>
                {loadedLogs && loadedLogs.map((log) => (
                    <div className={classes.jobItem}>
                        <div className={classes.jobHeader}>
                            <div className={classes.jobLogo}>
                                <FaTruck className={classes.jobLogoIcon}></FaTruck>
                            </div>
                            <Typography variant="h1" className={classes.jobTitle}>{log.trackingId}</Typography>
                        </div>
                        <div className={classes.desc}>
                            <Typography variant="h1" className={classes.descText}>
                                Assigned By: {log.assignedBy}, Type: {log.type}, Status: {log.status}, Stops: {log.stops}, Packages: {log.packages}, Delivery Date: {new Date(log.completedAt).toLocaleTimeString()}
                            </Typography>
                        </div>
                    </div>
                ))}
            </section>}
            
        </div>
    )
}