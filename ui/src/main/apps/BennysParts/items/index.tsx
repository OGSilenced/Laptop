import React from "react";
import { Typography, Button } from '@mui/material';

import useStyles from './index.styles';

export const BennysItems: React.FC<{
    addSystemNotification: any;
    partInfo: any;
    addCartItem: any;
    cart: any;
}> = (props) => {
    const classes = useStyles();

    const getItemCartQty = (part) => {
        const foundItem = props.cart.find((item) => item.spawncode === part.spawncode);
        return foundItem ? foundItem.qty : 0;
    }

    const getItemStockValue = (stock) => {
        var stockClass = 'lowStock';

        if (stock > 3 && stock < 6) {
            stockClass = 'medStock'
        } else if (stock > 6) {
            stockClass = 'highStock'
        }

       return (<Typography style={{ fontSize: 14, marginLeft: 3 }} className={classes[stockClass] }> {props.partInfo.stock}</Typography>)
    }

    const attemptAddToCart = (item) => {
        if (item.stock > getItemCartQty(item)) {
            console.log('hola')
            props.addCartItem(item)
        } else {
            props.addSystemNotification({
                show: true,
                icon: 'https://i.imgur.com/WaFc6BD.png',
                title: 'Bennys Parts',
                message: 'Insufficient Stock'
            })
        }
        //props.addCartItem(item)
    }
    

    return (
        <div className={classes.bennysPartItem}>
            <div className={classes.bennysCartQty}>
                {getItemCartQty(props.partInfo)}
            </div>

            <img src={props.partInfo.image} alt="part-item-icon" className="thumbnail"></img>
            <Typography variant="h1" style={{ fontSize: 12, marginTop: 10 }} className={classes.bennysTextTitle}>{props.partInfo.name}</Typography>

            <ul className={classes.bennysPartInfo}>
            <Typography style={{ fontSize: 13 }} className={classes.bennysPartInfoText}>Stock: {getItemStockValue(props.partInfo.stock)}</Typography>
                <Typography style={{ fontSize: 13 }} className={classes.bennysPartInfoText}>Price: {props.partInfo.price} GNE</Typography>
                <Typography style={{ fontSize: 13 }} className={classes.bennysPartInfoText}>Return: ${props.partInfo.value} </Typography>
            </ul>
            
            <Button style={{ marginTop: 9, fontSize: 9, borderRadius: 50 }} className={classes.bennysAddItemBtn} onClick={() => attemptAddToCart(props.partInfo)}>Add To Cart</Button>
        </div>
    )
}