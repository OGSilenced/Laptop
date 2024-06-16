import React from 'react';
import { Typography, Button, Menu, MenuList, FormControl, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import useStyles from './index.styles';

export const HOEModal: React.FC<{
    children: any;
    show: any;
    close: any;
    confirm: any;
}> = (props) => {

    const classes = useStyles();

    return (
        <Dialog    
            open={props.show}
            onClose={props.close}
            aria-labelledby="form-dialog-title"      
            >
            <DialogTitle id='form-dialog-title' className={classes.modalTitle}>{props.children}</DialogTitle>

            <DialogActions className={classes.modalContainer} style={{ justifyContent: 'center' }}>
                <Button size="small" style={{ fontSize: 11 }} className={classes.listingBtn} onClick={props.confirm}>Confirm</Button>
                <Button size="small" style={{ fontSize: 11 }} className={classes.listingRedBtn} onClick={props.close}>Cancel</Button>
            </DialogActions>

            </Dialog>
    )
}