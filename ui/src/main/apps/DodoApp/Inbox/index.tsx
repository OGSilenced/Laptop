import React from 'react';
import { Typography, Button } from '@mui/material';

import useStyles from './index.styles'

export const DodoInbox: React.FC = () => {
    const classes = useStyles();

    const [jobOffers] = React.useState([
        {
            id: 1,
            type: 'Express',
            requiredStops: 14,
            requiredPackages: 20,
            companyCut: 15,
            active: true
        }
    ])

    return (
        <div className={classes.content}>

            <section className={classes.header}>
                <Typography variant="h1" className={classes.title}>Job Offers</Typography>
            </section>

            <section className={classes.inboxList}>
                {jobOffers && jobOffers.map((job) => (
                    <div className={classes.inbox} key={job.id}>
                        <Typography variant="h1" className={classes.inboxName}>Type: {job.type}</Typography>
                        <Typography variant="h1" className={classes.inboxName}>Stops: {job.requiredStops}</Typography>
                        <Typography variant="h1" className={classes.inboxName}>Packages: {job.requiredPackages}</Typography>
                        <Typography variant="h1" className={classes.inboxName}>Company Cut: {job.companyCut}%</Typography>

                        <div className={classes.buttons}>
                            {job.active ? 
                                <Button size="small" className={classes.btnDisabled}>Job Active</Button>
                             : <Button size="small" className={classes.btn}>Start Job</Button>}
                             <Button size="small" className={classes.btn} style={{ marginLeft: '0.5rem' }}>Cancel Job</Button>
                        </div>

                    </div>
                ))}

                { jobOffers.length <= 0 ? <Typography variant="h1" className={classes.noJobs}>Job inbox is currently empty.</Typography> : null}
            </section>
            
        </div>
    )
}