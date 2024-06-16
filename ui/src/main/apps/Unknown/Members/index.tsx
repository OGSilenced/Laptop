import React, { useState } from 'react';
import { Typography, Button, Menu, MenuList, FormControl, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import useStyles from './index.styles';
import { fetchNui } from '../../../../utils/fetchNui';

export const Members: React.FC<{

    }> = (props) => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const [addingMemberCid, setAddingMemberCid] = useState(0);
    const [members, setMembers] = useState([
        {
            name: 'Bentley Casso',
            stateid: 1
        },
        {
            name: 'Eli Carter',
            stateid: 2
        },
        {
            name: 'Eli Skeng',
            stateid: 3
        }
    ]);

    const handleClose = () => {
        setModalOpen(false);
        //wqgfd
    }

    const handleAddGangMember = () => {
        console.log(addingMemberCid);

        fetchNui("np-gangsystem:ui:addMember", { stateId: addingMemberCid}).then(resData =>
            console.log(resData)
        )
        setModalOpen(false)
    }

    const changeAddingMemberCid = (value) => {
        setAddingMemberCid(value);
    }

    return (
        <div className={classes.membersPage}>
            <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Current Members ({members.length})</Typography>
            <Button variant="contained" className={classes.addMemberButton} onClick={() => setModalOpen(true)}>Add Member</Button>

            <Dialog    
            open={modalOpen}
            onClose={handleClose}
            
            >
                <DialogTitle style={{ background: '#0C0D11' }}>
                <Typography style={{ fontSize: 20 }} className={classes.headerText2}>Add Group Member</Typography>
                </DialogTitle>

                <DialogContent style={{ background: '#0C0D11' }}>
                <FormControl fullWidth>
                    <TextField variant="standard" label="State ID" sx={{
                                '& label': {
                                color: '#ffffff80 !important',
                                },
                              '& .MuiInput-underline:after': {
                                borderColor:
                                  '#0b604a !important',
                                color: '#0b604a !important',
                              },
                              '& .Mui-focused:after': {
                                color: '#0b604a !important',
                              },
                    }}
                    onChange={(e) => changeAddingMemberCid(e.target.value)}
                    type="number"
                    > 
                    </TextField>
                </FormControl>
                </DialogContent>

                <DialogActions style={{ background: '#0C0D11' }}>
                    <Button className={classes.orangeButton} onClick={() => handleAddGangMember()}>Add Member</Button>
                </DialogActions>

            </Dialog>

            <div className={classes.membersList}>
            {members && members.length > 0
                ? members.map(function (data, index) {
                  return (
                            <li className={classes.member} key={index}>
                                <Typography variant="body2" style={{ fontSize: 19 }} className={classes.memberName}>{data.name}</Typography>
                                <Typography variant="body2" style={{ fontSize: 17 }} className={classes.kickMember}>Kick Member</Typography>
                            </li>
                        );
                      })
                  : null}
            </div>
    </div>
    )
}