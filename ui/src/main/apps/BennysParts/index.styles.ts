import { makeStyles } from '@mui/styles';

export default makeStyles({
    bennysApp: {
        position: 'absolute',
        height: '80%',
        width: '85%',
        top: '10%',
        left: '9%',
        backgroundColor: '#101010',
        animation: 'ease-in fadeIn 250ms',
        overflow: 'hidden'
    },
    bennysAppContainer: {
        display: 'flex',
        padding: '2rem',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'relative',
        flexDirection: 'column'
    },
    bennysAppHeading: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '1.35rem',
        justifyContent: 'space-between',
        //borderBottom: '2px solid #6360FF'
    },
    bennysAppTabSection: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    bennysTabBtn: {
        color: '#686868 !important',
        border: 'none',
        position: 'relative',
        marginRight: '1rem',
        padding: '10px 15px !important',
        borderRadius: 50,
        background: 'transparent !important',
        transition: 'ease-in 200ms',
        fontSize: 11,
        fontWeight: 500,
        boxShadow: 'none !important',
        '&:hover': {
            color: '#BAB9FF !important',
            cursor: 'pointer',
            backgroundColor: '#212121'
        }
    },
    bennysCartQty: {
        top: -12,
        right: -10,
        color: '#fff',
        fontSize: 12,
        minWidth: 25,
        minHeight: 25,
        padding: '3px 10px',
        position: 'absolute',
        fontWeight: 'normal',
        borderRadius: 50,
        background: '#6360FF !important',
        animation: 'ease-in fadeIn 250ms'
    },
    bennysAppSearch: {
        color: '#fff',
        border: 'none',
        borderRadius: 50,
        paddingLeft: '0.75rem',
        backgroundColor: '#212121'
    },
    bennysActiveBtn: {
        border: 'none !important',
        position: 'relative',
        marginRight: '1rem !important',
        padding: '10px 15px !important',
        borderRadius: 50,
        transition: 'ease-in 200ms',
        fontSize: 11, 
        fontWeight: 500,
        boxShadow: 'none !important',
        color: '#BAB9FF !important',
        cursor: 'pointer',
        backgroundColor: '#212121 !important'
    },
    icon: {
        marginRight: '0.35rem'
    },
    bennysPartList: {
        display: 'grid',
        gap: '0.5rem',
        overflow: 'scroll',
        gridAutoRows: 'minmax(1fr, auto)',
        gridTemplateColumns: 'repeat(auto-fill, minmax(170px, auto))'
    },
});










// BennysPartItem: {
//     display: 'flex',
//     marginRight: '1rem',
//     marginBottom: '1rem',
//     width: 170,
//     position: 'relative',
//     padding: '1rem 2rem',
//     borderRadius: 5,
//     alignItems: 'center',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     backgroundColor: '#212121'
// },
// lowStock: {
//     color: '#f55252'
// },
// medStock: {
//     color: '#f5ca52'
// },
// highStock: {
//     color: '#a7f552'
// },
// bennysTextTitle: {
//     margin: 0,
//     padding: 0,
//     color: '#fff',
//     fontSize: 12,
//     marginTop: 10,
//     textAlign: 'center',
// },
// bennysPartInfo: {
//     color: '#fff',
//     marginTop: 5,
//     textAlign: 'center'
// },
// bennysPartInfoText: {
//     margin: '5 0',
//     fontSize: 13,
//     fontWeight: 'normal',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
// },
// bennysAddItemBtn: {
//     border: 'none',
//     color: '#fff',
//     marginTop: 9,
//     fontSize: 9,
//     padding: '9 20',
//     borderRadius: 50,
//     transition: 'ease-in 150ms',
//     backgroundColor: '#6360FF'
// },
// bennysCartQty: {
//     top: 8,
//     right: 8,
//     color: '#fff',
//     fontSize: 12,
//     minWidth: 25,
//     minHeight: 25,
//     padding: '6px 10px',
//     position: 'absolute',
//     fontWeight: 'normal',
//     borderRadius: 50,
//     background: '#6360FF',
//     zIndex: 10,
//     animation: 'ease-in fadeIn 250ms'
// }