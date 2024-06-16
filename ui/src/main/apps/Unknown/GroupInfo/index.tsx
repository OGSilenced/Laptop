import React from 'react';
import { Typography, Button } from '@mui/material'
import useStyles from '../index.styles'

export const GroupInfo: React.FC<{

    }> = (props) => {
    const classes = useStyles()


    return (
        <div className={classes.infoPage}>

            <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Group Information</Typography>
            <Typography variant="body2" style={{ color: '#8f8f8f' }} className={classes.subHeaderText}>Current Group: Dev Gang</Typography>
            
            <>
                <div className={classes.infoList}>
                <div className={classes.infoItem}>
                    <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Max Members</Typography>
                    <Typography variant="body2" style={{ color: '#8f8f8f' }} className={classes.subHeaderText}>15 members</Typography>
                </div>
                <div className={classes.infoItem}>
                    <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Sales Today</Typography>
                    <Typography variant="body2" style={{ color: '#8f8f8f' }} className={classes.subHeaderText}>0</Typography>
                </div>
                <div className={classes.infoItem}>
                    <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Money Collected</Typography>
                    <Typography variant="body2" style={{ color: '#8f8f8f' }} className={classes.subHeaderText}>$0</Typography>
                </div>
            </div>

            <div className={classes.infoList}>
                <div className={classes.infoItem}>
                    <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Toggle Discovered Graffiti</Typography>
                    <Button variant="contained" className={classes.button}>Toggle</Button>
                </div>

                <div className={classes.infoItem}>
                    <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Toggle Contested Graffitis</Typography>
                    <Button variant="contained" className={classes.button}>Toggle</Button>
                </div>
            </div>
            </>

        </div>
    )
}