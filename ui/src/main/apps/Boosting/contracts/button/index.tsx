import React from "react";
import { Button } from '@mui/material';

import useStyles from './index.styles'

export const ContractButton: React.FC<{
    onClick: any;
    style?: any;
    disabled?: any;
    label: any;
}> = (props) => {
    const classes = useStyles();

    return(
        <Button
            className={classes.button}
            onClick={props.onClick}
            style={props.style}
            disabled={props.disabled}
            color="primary"
        > {props.label}
        </Button>
    )
}