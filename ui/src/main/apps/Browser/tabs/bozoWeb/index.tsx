import React from 'react';
import { FaCarSide, FaChessKnight } from 'react-icons/fa';

import useStyles from './index.styles';
import { BozoWebItems } from './items/index'

export const BozoWeb: React.FC = () => {
    const classes = useStyles();

    const [bozoData] = React.useState([
        {
            'id': 'plateLookup',
            'data': {
                'name': 'Plate Lookup',
                'description': 'Find out what name is registered to a fake plate number.',
                'callBack': 'plateLookup',
                'price': 30,
                'cryptoName': 'GNE',
                'cryptoLogo': FaChessKnight,
                'imageLogo': FaCarSide
            }
        }
    ])


    return (
        <div className={classes.container}>
            <div className={classes.bozoWebServicesContainer}>
                {bozoData.map((bozo) => (
                    <BozoWebItems key={bozo.id} items={bozo.data}></BozoWebItems>
                ))}
            </div>
        </div>
    )
}