import React from "react";
import { Typography, Button, Menu, MenuList, FormControl, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'

import useStyles from './index.styles';
import { ContractButton } from "../../../contracts/button";

export const AuctionModal: React.FC<{
    show: boolean;
    handleClose: any;
    auctionId: number;
}> = (props) => {

    const classes = useStyles();
    const [bidInput, setBidInput] = React.useState(0)

    return (
        <Dialog
            open={props.show}
            onClose={props.handleClose}
            aria-labelledby='form-dialog-title'
            >
            <DialogTitle id="form-dialog-title" style={{ backgroundColor: '#21212b', padding: 8 }}>Place Bid</DialogTitle>

            <DialogContent style={{ backgroundColor: '#21212b', padding: 8 }}>
                <input placeholder="Enter bid amount..." type="number" className={classes.input} value={bidInput} onChange={(e) => setBidInput(parseInt(e.target.value))}></input>
            </DialogContent>

            <DialogActions style={{ backgroundColor: '#21212b', width: '100%' }}>
                <ContractButton label="Place Bid" onClick style={{ whiteSpace: 'no-wrap' }}></ContractButton>
                <ContractButton label="Cancel" onClick={props.handleClose}></ContractButton>
            </DialogActions>
        </Dialog>
    )
}