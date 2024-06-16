import React from "react";

import useStyles from './index.styles';
import { ContractButton } from "../button/index";

export const TransferPopup: React.FC<{
    handleClose: any;
    contractId?: any;
}> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.transferPopup}>

            <div className={classes.title}>
                Transfer Contract
            </div>

            <input className={classes.input} placeholder="Enter state id..." type="number">

            </input>

            <div className={classes.buttons}>
                <ContractButton onClick label="Send"></ContractButton>
                <ContractButton onClick={props.handleClose} style={{ margin: '0.5rem 0' }} label="Cancel"></ContractButton>
            </div>

        </div>
    )
} 