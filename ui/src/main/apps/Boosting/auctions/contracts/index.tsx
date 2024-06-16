import React from 'react';
import { Typography } from '@mui/material';

import useStyles from './index.styles';
import { AuctionModal } from './modal/index';
import { ContractButton } from "../../contracts/button";

export const AuctionItem: React.FC<{info: any}> = (props) => {
    const classes = useStyles();
    const info = props.info;

    const [showModal, setShowModal] = React.useState(false)

    const countdownTimer = (expirationTime, label) => {
        const calculateTimeRemaining = (endTime: number) => {
            const remainingTime = endTime - Date.now();
            const hours = Math.floor(remainingTime / 1000 / 3600 % 24);
            const minutes = Math.floor(remainingTime / 60000 % 60);
            const seconds = Math.floor(remainingTime / 1000 % 60);
            
            let color = '';
            if (hours < 2) {
                color = '#efca15';
            }
            if (hours < 1 && minutes < 60) {
                color = '#ef4715';
            }
            if (hours >= 2 && minutes > 0) {
                color = '#1ad61a';
            }
    
            const formattedHours = hours < 10 ? '0' + hours : '' + hours;
            const formattedMinutes = minutes < 10 ? '0' + minutes : '' + minutes;
            const formattedSeconds = seconds < 10 ? '0' + seconds : '' + seconds;
    
            return (
                <span style={{ color }}>
                    {endTime < Date.now() ? label : `${formattedHours}:${formattedMinutes}:${formattedSeconds}`}
                </span>
            );
        };
    
        return calculateTimeRemaining(expirationTime);
    };

    const expiry = React.useMemo(() => {
        let expire;
        return countdownTimer(
            null !== (expire = info.expiresAt) && typeof expire !== 'undefined' ? expire : 0,
            'Expired'
        );
    }, []); // Empty dependency array as there are no dependencies

    const ending = React.useMemo(() => {
        let expire;
        return countdownTimer(
            null !== (expire = info.endsAt) && typeof expire !== 'undefined' ? expire : 0,
            'Ended'
        );
    }, []); // Empty dependency array as there are no dependencies

    return (
        <div className={classes.auctionItemWrapper}>

        <div className={classes.auctionItem}>
            <AuctionModal show={showModal} handleClose={() => setShowModal(false)} auctionId={info.id}></AuctionModal>

            <div className={classes.auctionItemInfo}>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemInfoText}>{info.sellerAlias}</Typography>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemHeading}>Seller</Typography>
            </div>

            <div className={classes.auctionItemInfo}>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemInfoText}>{info.vehicleClass}</Typography>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemHeading}>Class</Typography>
            </div>

            <div className={classes.auctionItemInfo}>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemInfoText}>{info.vehicleModel}</Typography>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemHeading}>Vehicle</Typography>
            </div>

            <div className={classes.auctionItemInfo}>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemInfoText}>{info.currentBid} GNE</Typography>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemHeading}>Current Bid</Typography>
            </div>

            <div className={classes.auctionItemInfo}>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemInfoText}>{ending}</Typography>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemHeading}>Ends In</Typography>
            </div>

            <div className={classes.auctionItemInfo}>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemInfoText}>{expiry}</Typography>
                <Typography variant="body2" style={{ color: '#fff' }} className={classes.auctionItemHeading}>Expires In</Typography>
            </div>

            <div className={classes.auctionItemInfo}>
                <ContractButton label="Bid" onClick={() => setShowModal(true)}></ContractButton>
            </div>

        </div>

        </div>
    )
}