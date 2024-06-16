import React from 'react';
import { Typography, Button } from '@mui/material'

import useStyles from './index.styles';

import { Footer } from '../footer/index'
import { HOEModal } from '../modal/index'

export const StickShop: React.FC = () => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = React.useState(false)

    const [sticks, setSticks] = React.useState([
        {
            'name': 'GNESTICK_10',
            'thumbnail': 'https://i.imgur.com/RNWivbW.png',
            'price': 100,
            'displayName': '10 GNE Stick',
            'stock': 0
        },
        {
            'name': 'GNESTICK_25',
            'thumbnail': 'https://i.imgur.com/RNWivbW.png',
            'price': 100,
            'displayName': '25 GNE Stick',
            'stock': 0
        },
        {
            'name': 'GNESTICK_50',
            'thumbnail': 'https://i.imgur.com/RNWivbW.png',
            'price': 100,
            'displayName': '50 GNE Stick',
            'stock': 0
        },
        {
            'name': 'GNESTICK_100',
            'thumbnail': 'https://i.imgur.com/RNWivbW.png',
            'price': 25,
            'displayName': '100 GNE Stick',
            'stock': 0
        },
        {
            'name': 'GNESTICK_250',
            'thumbnail': 'https://i.imgur.com/RNWivbW.png',
            'price': 100,
            'displayName': '250 GNE Stick',
            'stock': 0
        }
    ])

    const [HOImportsCart, setHOImportsCart] = React.useState([]);

    function addToCart(item) {
        setHOImportsCart(prevCart => {

            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.name === item.name);
    
            const newCart = [...prevCart];
    
            if (existingItemIndex !== -1) {
                newCart[existingItemIndex] = { ...newCart[existingItemIndex], qty: newCart[existingItemIndex].qty + 1 };
            } 
            else {
                const newItem = { ...item, qty: 1 };
                newCart.push(newItem);
            }
    
            return newCart;
        });
    }

    function removeFromCart(item) {
        setHOImportsCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.spawncode === item.spawncode);
    
            if (existingItemIndex !== -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex] = { ...newCart[existingItemIndex], qty: newCart[existingItemIndex].qty - 1 };
    
                if (newCart[existingItemIndex].qty === 0) {
                    newCart.splice(existingItemIndex, 1);
                }
    
                return newCart;
            }
    
            return prevCart;
        });
    }

    React.useEffect(() => {
        updateCartDisplay();
    }, [HOImportsCart]);

    function updateCartDisplay() {
        console.log("Cart updated:", JSON.stringify(HOImportsCart));
    }

    return (
        <>
        <div className={classes.stickShopContainer}>
            <HOEModal show={modalOpen} close={() => setModalOpen(false)} confirm>Are you sure?</HOEModal>
            
            {sticks && sticks.map((stick, index) => (
                <div className={classes.shopItem} key={stick.name}>
                    <div className={classes.hoimportCartQty}>
                    {HOImportsCart.filter(item => item.name === stick.name).reduce((total, item) => total + item.qty, 0)}
                    </div>

                <img src={stick.thumbnail} className={classes.thumbnail} alt="thumbnail-small"></img>
                <Typography style={{ color: '#fff', fontSize: 13 }} className={classes.itemText}>Name: {stick.displayName}</Typography>
                <Typography style={{ color: '#fff', fontSize: 13 }} className={classes.itemText}>Price: {stick.price} GNE</Typography>
                <Typography style={{ color: '#fff', fontSize: 13 }} className={classes.itemText}>Stock: {stick.stock}</Typography>
                <Button size="small" style={{ fontSize: 10 }} className={classes.cartBtn} onClick={() => addToCart(stick)}>Add To Cart</Button>
                <Button size="small" disabled={HOImportsCart.filter(item => item.name === stick.name).reduce((total, item) => total + item.qty, 0) === 0} style={{ fontSize: 10 }} className={classes.removeBtn} onClick={() => removeFromCart(stick)}>Remove From Cart</Button>
                </div>
            ))}

            <Footer>
                <Typography style={{ fontSize: 13, color: '#fff' }}>Cart Total: {HOImportsCart.reduce((total, item) => total + (item.price * item.qty), 0)} GNE</Typography>
                <Button size="small" style={{ fontSize: 10, fontWeight: 500 }} className={classes.checkoutBtn} onClick={() => setModalOpen(true)}>Confirm Order</Button>
            </Footer>
        </div>
        </>
    )
}