import React from 'react';
import { Typography, Button } from '@mui/material';

import useStyles from '../index.styles';

export const WorkerActions: React.FC<{
    targetCid: any;
    actionsModal: any;
    setActionsModal: any;
}> = (props) => {
    const classes = useStyles();

    const [assigningJob, setAssigningJob] = React.useState(false)

    return (
        <>
        {assigningJob ? 
                <div className={classes.modal}>
                <Typography variant="h1" className={classes.desc}>Which job type would you like to assign?</Typography>
    
                <div className={classes.buttons}>
                    <div className={classes.inputSection}>
                        <Typography variant="h1" className={classes.companyCut}>Company Cut</Typography>
                        <input type="number" placeholder="Enter Company Cut..." className={classes.input}></input>
                    </div>
                    <Button size="small" className={classes.btn}>Express</Button>
                    <Button size="small" className={classes.btn}>Freight</Button>
                    <Button size="small" className={classes.btn} onClick={() => setAssigningJob(false)}>Cancel</Button>
                </div>
    
            </div>
             : 
             <div className={classes.modal}>
                <Typography variant="h1" className={classes.desc}>Which actions would you like to do?</Typography>

                <div className={classes.buttons}>
                    <Button size="small" className={classes.btn} onClick={() => setAssigningJob(true)}>Assign Job</Button>
                    <Button size="small" className={classes.btn}>Sign Off</Button>
                    <Button size="small" className={classes.btn} onClick={() => props.setActionsModal(false)}>Cancel</Button>
                </div>
            </div>}
        </>
        // <div className={classes.modal}>
        //     <Typography variant="h1" className={classes.desc}>Which job type would you like to assign?</Typography>

        //     <div className={classes.buttons}>
        //         <div className={classes.inputSection}>
        //             <Typography variant="h1" className={classes.companyCut}>Company Cut</Typography>
        //             <input type="number" placeholder="Enter Company Cut..." className={classes.input}></input>
        //         </div>
        //         <Button size="small" className={classes.btn}>Express</Button>
        //         <Button size="small" className={classes.btn}>Freight</Button>
        //         <Button size="small" className={classes.btn}>Cancel</Button>
        //     </div>

        // </div>
    )
}