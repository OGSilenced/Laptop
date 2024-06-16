import React from 'react';
import { Typography } from '@mui/material'; 
import { FaTruck } from 'react-icons/fa';

import useStyles from './index.styles';

export const DodoDashboard: React.FC = () => {
    const classes = useStyles();

    var data = {
        workers: 0,
        jobsCompleted: 0,
        todaysRev: 0,
        jobs: [
            {
                id: '65AFGSWG65W',
                name: 'Bentley Casso',
                startedAt: 5648568,
                deliveredPackages: 4,
                requiredPackages: 12,
            }
        ],
        expressJobs: 0,
        freightJobs: 0
    };

    return (
        <div className={classes.content}>

            <section className={classes.header}>
                <Typography variant="h1" className={classes.title}>Tracking Dashboard</Typography>
            </section>

            <section className={classes.stats}>
                <div className={classes.stat}>
                    <Typography variant="h1" className={classes.statValue}>{data.workers}</Typography>
                    <Typography variant="h1" className={classes.statTitle}>Workers</Typography>
                </div>

                <div className={classes.stat}>
                    <Typography variant="h1" className={classes.statValue}>{data.jobsCompleted}</Typography>
                    <Typography variant="h1" className={classes.statTitle}>Completed Deliveries</Typography>
                </div>

                <div className={classes.stat}>
                    <Typography variant="h1" className={classes.statValue}>${data.todaysRev}</Typography>
                    <Typography variant="h1" className={classes.statTitle}>Todays Revenue</Typography>
                </div>
            </section>     
            <section className={classes.stats}>

                <div className={classes.stat}>
                    <Typography variant="h1" className={classes.statValue}>{data.expressJobs}</Typography>
                    <Typography variant="h1" className={classes.statTitle}>Express Jobs Available</Typography>
                </div>

                <div className={classes.stat}>
                    <Typography variant="h1" className={classes.statValue}>{data.freightJobs}</Typography>
                    <Typography variant="h1" className={classes.statTitle}>Freight Jobs Available</Typography>
                </div>
            </section>

            <section className={classes.jobs}>
                <Typography variant="h1" className={classes.title}>Current Deliveries</Typography>

                { data.jobs && data.jobs.length > 0 && data.jobs.map((job, index) => (
                    <div className={classes.jobItem} key={index}>

                        <div className={classes.jobHeader}>
                            <div className={classes.jobLogo}>
                                <FaTruck className={classes.jobLogoIcon}></FaTruck>
                            </div>
                            <Typography variant="h1" className={classes.jobTitle}>{job.id}</Typography>
                        </div>
                        
                        <div className={classes.desc}>
                            <Typography variant="h1" className={classes.descText}>
                                Started By: {job.name}, Duration: {job.startedAt}, Packages: ({job.deliveredPackages} / {job.requiredPackages}), 
                            </Typography>
                        </div>

                    </div>
                ))}
            </section>

        </div>
    )
}