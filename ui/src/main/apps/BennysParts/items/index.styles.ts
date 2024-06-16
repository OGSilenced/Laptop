import { makeStyles } from '@mui/styles';

export default makeStyles({
    bennysPartItem: {
        display: 'flex',
        marginRight: '1rem',
        marginBottom: '1rem',
        width: 170,
        position: 'relative',
        padding: '1rem 2rem',
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#212121'
    },
    lowStock: {
        color: '#f55252'
    },
    medStock: {
        color: '#f5ca52'
    },
    highStock: {
        color: '#a7f552'
    },
    bennysTextTitle: {
        margin: 0,
        padding: 0,
        color: '#fff',
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
    },
    bennysPartInfo: {
        color: '#fff',
        marginTop: 5,
        textAlign: 'center'
    },
    bennysPartInfoText: {
        margin: '5 0',
        fontSize: 13,
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bennysAddItemBtn: {
        border: 'none !important',
        color: '#fff !important',
        marginTop: 9,
        fontSize: 9,
        padding: '9 20 !important',
        borderRadius: 50,
        transition: 'ease-in 150ms !important',
        backgroundColor: '#6360FF !important',
    },
    bennysCartQty: {
        top: 8,
        right: 8,
        color: '#fff',
        fontSize: 12,
        minWidth: 25,
        minHeight: 25,
        padding: '6px 10px',
        position: 'absolute',
        fontWeight: 'normal',
        borderRadius: 50,
        background: '#6360FF',
        zIndex: 10,
        animation: 'ease-in fadeIn 250ms'
    }
});










