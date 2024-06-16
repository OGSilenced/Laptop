import React from 'react';
import Draggable from 'react-draggable';
import { Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/AppHeader/index';


import useStyles from './index.styles';
import { BennysItems } from './items/index';
import { BennysCart } from './cart/index';

export const BennysParts: React.FC<{
    setActiveApps: any;
    activeApps: any;
    setMinimizedApps: any;
    minimizedApps: any;
    addSystemNotification: any;
}> = (props) => {
    const classes = useStyles();

    const [activeTab, setActiveTab] = React.useState('cosmetic');
    const [searchInput, setSearchInput] = React.useState('');

    const [bennysItems, setBennysItems] = React.useState([
        {
            category: 'consumables',
            name: 'Adv Repair Kit',
            stock: 18,
            image: 'https://cdn.discordapp.com/attachments/803725661977575475/956009869146734622/np_repair-toolkit.png',
            price: 5,
            value: 1000,
            spawncode: 'advrepairkit',
        },
        {
            category: 'performance',
            name: 'Vehicle Turbo',
            stock: 5,
            image: 'https://cdn.discordapp.com/attachments/803725661977575475/956009578380820480/khfv60M.png',
            price: 125,
            value: 25000,
            spawncode: 'turbokit',
        },
        {
            category: 'performance',
            name: 'Vehicle Turbo',
            stock: 5,
            image: 'https://cdn.discordapp.com/attachments/803725661977575475/956009578380820480/khfv60M.png',
            price: 125,
            value: 25000,
            spawncode: 'turbokit',
        }
    ])

    const getTabButtonClassName = (tab) => {
        return activeTab === tab ? 'bennysActiveBtn' : 'bennysTabBtn'
    }

    const [bennysCart, setBennysCart] = React.useState([]);

    function addToCart(item) {
        setBennysCart(prevCart => {

            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.spawncode === item.spawncode);
    
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
        setBennysCart(prevCart => {
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
    }, [bennysCart]);

    function updateCartDisplay() {
        console.log("Cart updated:", JSON.stringify(bennysCart));
    }

    return (
        <Draggable handle="#app-header">
            <div className={classes.bennysApp} style={{ display: props.activeApps.showBennysApp && !props.minimizedApps.BennysAppMinimized ? '' : 'none' }}>
                <AppHeader appName="Bennys Online Shop" color="#212121"                 
                onClose={
                    () => {
                            props.setActiveApps(prevState => ({
                              ...prevState,
                              showBennysApp: false
                          }));
                  }}
                  onMinimize={
                    () => {
                            props.setMinimizedApps(prevState => ({
                              ...prevState,
                              BennysAppMinimized: true
                            }));
                    }}
                ></AppHeader>

                <div className={classes.bennysAppContainer}>
                    <div className={classes.bennysAppHeading}>
                        <div className={classes.bennysAppTabSection}>
                            <Button size="small" variant="contained" style={{ fontSize: 11, borderRadius: 50, fontWeight: 500 }} className={classes[getTabButtonClassName('cosmetic')]} onClick={() => setActiveTab('cosmetic')}>Cosmetic Parts</Button>
                            <Button size="small" variant="contained" style={{ fontSize: 11, borderRadius: 50, fontWeight: 500 }} className={classes[getTabButtonClassName('performance')]} onClick={() => setActiveTab('performance')}>Performance Parts</Button>
                            <Button size="small" variant="contained" style={{ fontSize: 11, borderRadius: 50, fontWeight: 500 }} className={classes[getTabButtonClassName('consumables')]} onClick={() => setActiveTab('consumables')}>Consumable Parts</Button>
                            <input type="text" placeholder="search" className={classes.bennysAppSearch} onChange={(e) => setSearchInput(e.target.value)}></input>
                        </div>                      
                        <Button size="small" variant="contained" style={{ fontSize: 11, borderRadius: 50, fontWeight: 500 }} className={classes.bennysActiveBtn} id="cart" onClick={() => setActiveTab('cart')}>
                        
                        <FontAwesomeIcon
                        className={classes.icon}
                                icon={faShoppingCart}
                            />Cart
                            <div className={classes.bennysCartQty}>{bennysCart.reduce((total, item) => total + item.qty, 0)}</div>
                        </Button>
                    </div>
                    <div className={classes.bennysPartList}>
                    {bennysItems &&
                        bennysItems
                            .filter((item) => item.name.toLowerCase().includes(searchInput))
                            .filter(item => item.category === activeTab)
                            .map((item) => (
                                <BennysItems addSystemNotification={props.addSystemNotification} partInfo={item} addCartItem={addToCart} cart={bennysCart}></BennysItems>
                            ))}
                       
                    </div>
                     {activeTab === 'cart' && <BennysCart cart={bennysCart} removeFromCart={removeFromCart}></BennysCart>}
                </div>

            </div>
        </Draggable>
    )
}