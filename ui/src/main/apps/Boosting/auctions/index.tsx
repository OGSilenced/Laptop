import React from "react";
import { Typography, TextField, FormControl, FormControlLabel, InputAdornment, Button, Checkbox } from '@mui/material';

import useStyles from './index.styles';
import { AuctionItem } from './contracts/index'

export const ContractAuctions: React.FC = () => {
    const classes = useStyles();

    const [auctionContracts] = React.useState([
        {
            id: 1,
            sellerAlias: 'Pupper Master',
            vehicleClass: 'A+',
            vehicleModel: 'Subaru WRX STI',
            currentBid: 38,
            endsAt: 9999999999999999999999,
            expiresAt: 9999999999999999999999999999999999,
        }
    ])

    return (
        <div className={classes.container}>

            <div className={classes.auctionFilters}>
            <FormControl fullWidth sx={{ width: '100%' }}>
                <FormControlLabel
                style={{ color: '#a7a7a7' }}
                control={<Checkbox color="warning" checked={'on' === localStorage.getItem('auctionSoundsEnabled')}></Checkbox>}
                label="Enable Auction Sounds"
                //checked={'on' === localStorage.getItem('useWhiteIconNames')}
                //value={localStorage.getItem('useWhiteIconNames')}
                //onChange={handleFontColorChange}
                />
            </FormControl>
            </div>

            <div className={classes.auctionItems}>

                { auctionContracts && auctionContracts.map((contract) => (
                    <AuctionItem key={contract.id} info={contract}></AuctionItem>
                ))}

            { auctionContracts.length <= 0 && <Typography variant="h1" style={{ fontSize: 14 }} className={classes.empty}>Auction listings are currently empty.</Typography>}
            </div>

    

        </div>
    )
}