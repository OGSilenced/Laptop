import React, { useState } from 'react';
import { Typography, Button } from '@mui/material'
import useStyles from './index.styles';
//import UseStyles from '../index.styles';

export const Progression: React.FC<{

    }> = (props) => {
    const classes = useStyles()
    const [prog, setProg] = useState([
        {
            unlocked: true,
            name: 'Rookie',
            graffitiNeeded: 4
        },
        {
            unlocked: false,
            name: 'Well Known',
            graffitiNeeded: 10
        },
    ])
    //const styles = UseStyles()


    return (
        <div className={classes.progressionPage}>
            <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Current Progression</Typography>
            <Typography variant="body2" className={classes.subHeaderText}>Current Graffitis: 6</Typography>

            <div className={classes.progressionList}>
                {prog && prog.length > 0
                    ? prog.map(function (data, index) {
                    return (
                        <div className={classes.progressionItem} style={{ boxShadow: data.unlocked ? '0px 0px 3px 1px rgba(0, 249, 185, 0.15)' : '0px 0px 3px 1px #00000040' }} key={index}>
                            {data.unlocked ? <Typography variant="body2" style={{ color: '#fff' }} className={classes.progressionItemName}>{data.name}</Typography> : 
                            <Typography variant="body2" style={{ color: '#fff' }} className={classes.progressionHidden}>?</Typography>}
                            <Typography variant="body2" className={classes.progressionRequired}>Graffitis Needed: {data.graffitiNeeded}</Typography>
                        </div>
                            );
                        })
                    : null}
            </div>

    </div>
    )
}