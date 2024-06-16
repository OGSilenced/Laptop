import React from 'react';
import { Typography, Button } from '@mui/material'
import { FaCarSide } from 'react-icons/fa';

import useStyles from './index.styles';

export const BozoWebItems: React.FC<{
    items: any;
}> = (props) => {
    const classes = useStyles();
    const { items } = props

    return (
        <div className={classes.bozoWebService}>{items.imageLogo}
            <items.imageLogo size="6x" style={{ color: 'white' }}></items.imageLogo>
            <Typography variant="h1" style={{ fontSize: 16 }} className={classes.bozoWebTextTitle}>{items.name}</Typography>
            <Typography style={{ fontSize: 14 }} className={classes.bozoWebTextDescription}>{items.description}</Typography>
            <ul className={classes.bennysbozoWebService}>
                <Typography className={classes.bennysbozoWebServiceText}>Price: <items.cryptoLogo size="lg" style={{ color: 'white', width: '1em', height: '1em' }}></items.cryptoLogo> {items.price} {items.cryptoName.toUpperCase()}</Typography>
            </ul>
            <Button size="small" style={{ borderRadius: 50, fontSize: 14, marginTop: 9 }} className={classes.bozoWebPurchase}>Purchase</Button>
        </div>
    )
}