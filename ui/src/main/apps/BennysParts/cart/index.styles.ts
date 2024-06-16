import { makeStyles } from '@mui/styles';

export default makeStyles({
    bennysCart: {
        display: 'flex',
        marginTop: '1rem',
    },
    bennysCartList: {
        flex: 'auto',
        display: 'flex',
        overflow: 'scroll',
        flexDirection: 'column',
        mexHeight: 'calc(100vh - 558px)',
    },
    bennysCartItem: {
        width: '100%',
        display: 'flex',
        padding: '7px 20px',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: '0.75rem',
        background: '#212121',
        justifyContent: 'space-between'
    },
    bennysPartInfo: {
        display: 'flex',
        alignItems: 'center',
    },
    bennysPartThumbnail: {
        height: 50,
        marginRight: '0.5rem'
    },
    bennysPartTitle: {
        margin: 0,
        padding: 0,
        fontSize: 15,
        color: '#8d8d8d',
        fontWeight: 'normal'
    },
    bennysCheckoutPanel: {
        display: 'flex !important',
        color: '#fff !important',
        flexBasis: '20% !important',
        alignItems: 'center !important',
        flexDirection: 'column',
        justifyContent: 'center !important',
    },
    bennysRemoveBtn: {
        border: 'none !important',
        color: '#fff !important',
        fontSize: 10,
        borderRadius: 50,
        padding: '7px 14px !important',
        background: '#f55252 !important',
        transition: 'ease-in 100ms',
        '&:hover': {
            transform: 'scale(1.03'
        }
    },
    bennysCheckoutBtn: {
        color: '#fff !important',
        fontSize: 13,
        border: 'none !important',
        borderRadius: 50,
        marginTop: '1rem !important',
        padding: '7px 14px !important',
        background: 'green !important',
        transition: 'ease-in 100ms',
        '&:hover': {
            transform: 'scale(1.03'
        }
    },
});
