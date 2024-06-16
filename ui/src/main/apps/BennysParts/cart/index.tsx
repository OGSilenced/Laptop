import React from 'react';
import { Typography, Button } from '@mui/material'

import useStyles from './index.styles';

export const BennysCart: React.FC<{
    cart: any;
    removeFromCart: any;
}> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.bennysCart}>
            <div className={classes.bennysCartList}>
                {props.cart && props.cart.map((item, index) => (
                    <div className={classes.bennysCartItem} key={index}>
                        <div className={classes.bennysPartInfo}>
                            <img src={item.image} className={classes.bennysPartThumbnail} alt="cart-thumbnail"></img>
                            <Typography variant="h1" style={{ fontSize: 15 }} className={classes.bennysPartTitle}>{item.name} ({item.qty}x) {item.price} GNE</Typography>
                        </div>
                        <Button variant="contained" style={{ fontSize: 13, borderRadius: 50 }} className={classes.bennysRemoveBtn} onClick={() => props.removeFromCart(item)}>Remove Item</Button>
                    </div>
                ))}
            </div>

            <div className={classes.bennysCheckoutPanel}>
                Total: {props.cart.reduce((total, item) => total + (item.price * item.qty), 0)} GNE
                <Button variant="contained" style={{ fontSize: 13, borderRadius: 50, marginTop: '1rem' }} className={classes.bennysCheckoutBtn}>Checkout</Button>
            </div>

        </div>

    )
}