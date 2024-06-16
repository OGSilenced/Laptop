import { makeStyles } from '@mui/styles';

export default makeStyles({
    empty: {
        textAlign: 'center',
        color: '#a7a7a7',
    },
    contract: {
        padding: '0 1rem 1rem 1rem',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        borderRadius: 5,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#21212B',
        fontFamily: 'Roboto, sans-serif',
        position: 'relative',
    },
    btn: {
        border: 'none',
        color: '#fff',
        marginRight: '1rem',
        padding: '7px 12px',
        fontSize: 10,
        borderRadius: 5,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    red: {
        backgroundColor: '#FF3E32',
    },
    blue: {
        backgroundColor: '#3278FF',
    },
    green: {
        backgroundColor: '#2e9e0a',
    },
    brown: {
        backgroundColor: '#795548',
    },
    disabled: {
        background: '#757575',
        color: '#d8d8d8'
    },
    contractType: {
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        width: '100%',
        height: '100%',
        padding: 10,
        display: 'flex',
        position: 'absolute',
        borderRadius: 3,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#21212B',
        boxShadow: '#0000004f 0 4px 6px 3px',
    },
    title: {
        color: '#fff',
        fontSize: '2vh !important',
        fontWeight: 'normal',
    },
    desc: {
        color: '#AAAAAA',
        fontSize: '1.5vh',
        margin: '1rem 0',
        textAlign: 'center',
        fontWeight: 'normal',
    },
    close: {
        top: 8,
        right: 13,
        fontSize: 18,
        color: '#181820',
        position: 'absolute',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    owner: {
        margin: 0,
        padding: 0,
        color: '#fff',
        fontSize: 15,
        fontWeight: 500,
    },
    text: {
        margin: 0,
        padding: 0,
        color: '#fff',
        fontSize: 14,
        display: 'flex',
        marginBottom: '0.25rem',
    },
    buttons: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '0.5rem',
    },
    typeButtons: {
        flexWrap: 'wrap',
        width: '100%',
        marginTop: '0.5rem',
        justifyContent: 'space-evenly',
    },
    '.svg-inline--fa.fa-fw': {
        width: '0.35em !important'
    },
    vehicleClass: {
        width: '3.5rem',
        height: '3.5rem',
        color: '#fff',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#181820',
        border: '2px solid #70C4BF',
        marginTop: '2rem',
    },
    contractInfo: {
        display: 'flex',
        margin: '1rem 0',
        aliugnItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    contractText: {
        color: '#AAAAAA',
        fontSize: '1.40vh !important',
        textAlign: 'center',
        marginBottom: 5,
    },
    contractVehicle: {
        color: '#fff',
        fontSize: '1.6vh !important',
        margin: '0.3rem 0 !important',
        textAlign: 'center',
        fontWeight: 'bold !important',
    },
    contractButtons: {},
    playerContractBanner: {
        background: '#127b4f',
        width: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        padding: 5,
        fontSize: '1.35vh',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        color: '#fff'
    }
});