import React from 'react';
import { Typography } from '@mui/material'

import useStyles from './index.styles';
import { ContractButton } from '../button/index';

export const Popup: React.FC<{
    message: string;
    loading: any;
    onCancel: any;
    onAccept: any;
}> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.confirmPopup}>
            <Typography variant="h1" className={classes.text}>{props.message}</Typography>
            { !props.loading && <div className={classes.buttons}>
                <ContractButton onClick={props.onAccept} label="continue"></ContractButton>
                <ContractButton onClick={props.onCancel} style={{ marginTop: '0.5rem' }} label="Cancel"></ContractButton>
            </div> }
        </div>
    )
}