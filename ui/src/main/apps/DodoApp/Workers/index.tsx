import React from "react";
import { Typography, Button } from '@mui/material'

import useStyles from './index.styles';
import { WorkerActions } from './actions/index';

export const DodoWorkers: React.FC = () => {
    const classes = useStyles();

    const [userCid, setUserCid] = React.useState(1)
    const [targetCid, setTargetCid] = React.useState(0)
    const [actionsModal, setActionsModal] = React.useState(false)

    const [workers] = React.useState([
        {
            id: 1,
            name: 'Bentley Casso',
            cid: 1,
            status: 'On Duty',
            lastDelivery: 767,   
        },
        {
            id: 2,
            name: 'Bentley Casso',
            cid: 7,
            status: 'On Duty',
            lastDelivery: 767,   
        }
    ])

    const handleActionsBtnClick = (cid) => {
        setTargetCid(cid)
        setActionsModal(true)
    }   

    return (
        <div className={classes.content}>

            <section className={classes.header}>
                <Typography variant="h1" className={classes.title}>Workers List</Typography>
                <input type="text" className={classes.searchInput} placeholder="Search"></input>
            </section>

            <section className={classes.workersList}>
                {workers && workers.map((emp) => (
                    <div className={classes.worker} key={emp.id}>
                        {actionsModal && targetCid === emp.cid ? 
                            <WorkerActions targetCid={targetCid} actionsModal={actionsModal} setActionsModal={setActionsModal}></WorkerActions>
                           : <>
                            <Typography variant="h1" className={classes.workerName}>{emp.name}, (State ID: {emp.cid}, Status: {emp.status}{emp && emp.lastDelivery ?  `, Last Delivery: ${emp.lastDelivery}` : null})</Typography>

                            <Button size="small" className={classes.btn} onClick={() => handleActionsBtnClick(emp.cid)}>Actions</Button> 
                            </>  }

                    </div>
                ))}
            </section>

        </div>
    )
}