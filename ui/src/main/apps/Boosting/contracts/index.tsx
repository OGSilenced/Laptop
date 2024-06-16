import React from 'react';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import useStyles from './index.styles';
import { ContractButton } from './button/index';
import { Popup } from './popup/index';
import { TransferPopup } from './transfer/index'

export const Contracts: React.FC = () => {
    const classes = useStyles();
    const [deletingContract, setDeletingContract] = React.useState(false)
    const [transferringContract, setTransferringContract] = React.useState(false)
    const [startingContract, setStartingContract] = React.useState(false)
    const [selectingContractType, setSelectingContractType] = React.useState(false)

    return (
        <div className={classes.contract}>
            { startingContract && <Popup message="Start Contract" onAccept={() => setSelectingContractType(true)} onCancel={() => setStartingContract(false)} loading={false}></Popup>}
            { deletingContract && <Popup message="Delete Contract?" loading={false} onCancel={() => setDeletingContract(false)} onAccept></Popup>}
            { transferringContract && <TransferPopup handleClose={() => setTransferringContract(false)} ></TransferPopup>}

            { selectingContractType && <div className={classes.contractType}>
                <Typography variant="h1" style={{ fontSize: 18, cursor: 'pointer' }} className={classes.close} onClick={() => setSelectingContractType(false)}>
                <FontAwesomeIcon
                        icon={faTimes}
                        size="1x"
                    />
                </Typography>

                <Typography variant="h1" className={classes.title}>Select Type</Typography>
                <Typography variant="body1" className={classes.desc}>If you choose to vin scratch it will cost an additional 250 GNE to claim ownership.</Typography>

                <div className={classes.typeButtons}>
                    <ContractButton onClick label="Vin Scratch"></ContractButton>
                    <ContractButton onClick label="Normal Dropoff" style={{ margin: '0.5rem 0' }}></ContractButton>
                </div>
            </div> }

            <div className={classes.playerContractBanner}>Player Contract</div>
            <div className={classes.vehicleClass}>A</div>

            <div className={classes.contractInfo}>
                <Typography className={classes.contractText} style={{ marginBottom: 0 }}>Racing Alias</Typography>
                <Typography variant="h1" className={classes.contractVehicle}>GTR R-35</Typography>
                <Typography className={classes.contractText}>Plate: 89HH8787</Typography>
                <>
                {/* --contract not active */}
                <Typography className={classes.contractText}>Buy In: 50 GNE</Typography>
                <Typography className={classes.contractText}>
                    Expires In: 
                    <span style={{ color: '#1ad61a', marginLeft: 2, fontSize: '1.6vh' }}>
                        02 Hours, 30 Min
                    </span>
                </Typography>
                </>

                <div className={classes.buttons}>
                    <ContractButton onClick={() => setStartingContract(true)} disabled={false} style={{ marginTop: '0.5rem' }} label='Start Contract'></ContractButton>
                    <ContractButton onClick={() => setTransferringContract(true)} disabled={false} style={{ marginTop: '0.5rem' }} label='Transfer Contract'></ContractButton>
                    <ContractButton onClick={() => console.log('hols')} disabled={false} style={{ marginTop: '0.5rem' }} label='Auction Contract'></ContractButton>
                    <ContractButton onClick={() => setDeletingContract(true)} disabled={false} style={{ marginTop: '0.5rem' }} label='Decline Contract'></ContractButton>

                    {/* disable all except cancel if contract active, only show cancel if contract active else it will be cancel contract */}
                </div>
            </div>

        </div>
    )
}