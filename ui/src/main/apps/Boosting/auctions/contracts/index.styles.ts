import { makeStyles } from "@mui/styles";

export default makeStyles({
    auctionItem: {
        display: 'table',
        width: '100%',
        padding: '1.5rem',
        tableLayout: 'fixed',
        backgroundColor: '#21212B',
        justifyContent: 'space-between',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: 10,
    },
    auctionItemInfo: {
        textAlign: 'center',
        display: 'table-cell',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    auctionItemHeading: {
        textAlign: 'center',
    },
    auctionItemInfoText: {
        textAlign: 'center',
    },
    auctionItemWrapper: {
        padding: 0, //if winning - 2
        position: 'relative',
        background: '#21212B', //if winning -- //'linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0)',
        borderRadius: 10,
        marginBottom: '0.5rem',
        zIndex: 1,
    },
    crownIcon: {
        top: -13,
        left: -7,
        zIndex: 5,
        height: 36,
        rotate: '345deg',
        position: 'absolute',
        animation: 'bounce 2s infinite',
    },
    '@global': {
        '@keyframes bounce': {
            '0%': { 'transform': 'translateY(0)' },
            '25%': { 'transform': 'translateY(0)' },
            '50%': { 'transform': 'translateY(0)' },
            '75%': { 'transform': 'translateY(0)' },
            '100%': { 'transform': 'translateY(0)' },
            '40%': { 'transform': 'translateY(-6px)' },
            '60%': { 'transform': 'translateY(-3px)' }
        }
    }
})