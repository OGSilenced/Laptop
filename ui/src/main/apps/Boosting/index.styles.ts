import { makeStyles } from '@mui/styles';

export default makeStyles({
      boostingApp: {
        position: 'absolute',
        height: '80%',
        width: '85%',
        top: '10%',
        left: '9%',
        backgroundColor: '#181820',
        animation: 'ease-in fadeIn 250ms'
      },
      contractList: {
        display: 'flex',
        overflowY: 'scroll',
        marginTop: '1rem',
        flex: 'auto',
        flexDirection: 'column'
      },
      container: {
        padding: '3%',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '90%',
        overflowY: 'scroll',
        position: 'relative'
      },
      tabsSection: {
        display: 'flex',
        paddingBottom: '1rem',
        justifyContent: 'space-between'
      },
      tabsBtns: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      tabBtn: {
        color: '#fff !important',
        border: 'none !important',
        padding: '10px 15px !important',
        borderRadius: 3,
        //background: '#21212B !important',
        background: 'transparent !important',
        marginRight: '1rem !important',
        fontSize: '1.2vh !important',
        fontWeight: 'normal !important',
        boxShadow: 'none !important',
        textTransform: 'none',
        '&:hover': {  
          color: '#fff !important',
          backgroundColor: '#21212B !important'
        },
      },
      active: {
        color: '#fff !important',
        textTransform: 'none',
        backgroundColor: '#21212B !important'
      },
      queueBtn: {
        border: 'none !important',
        width: 100,
        height: 37,
        padding: '10px 15px !important',
        borderRadius: 3,
        color: '#FFF !important',
        cursor: 'pointer !important',
        backgroundColor: '#21212B !important',
        fontSize: 10,
        fontWeight: 500,
        boxShadow: 'none !important',
        '&hover': {
          color: '#fff !important',
          backgroundColor: '#21212B !important'
        },
      },
      '@keyframes fadeIn': {
        'from': {
            'opacity': 0,
            'transform': 'scale(0)'
        },
        'to': {
            'opacity': 1,
            'transform': 'scale(1)'
        }
    },
    empty: {
      fontSize: 14,
      color: '#a7a7a7',
      textAlign: 'center'
    },
    boostingProgressionParent: {
      background: '#21212B',
      height: 5,
      flex: 'auto',
      borderRadius: 5,
      marginLeft: '1rem',
      marginRight: '1rem'
    },
    boostingProgression: {
      borderRadius: 5,
      //background: 'linear-gradient(90deg, #FF487C '.concat(100 - _0x39a527, '%, #00F8B9 100%)')
      background: 'linear-gradient(90deg, #FF487C 40%, #00F8B9 100%)'
    },
    progressSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    levelText: {
      fontSize: 12
    },
    previousContract: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '0.5rem'
    },
    pendingContracts: {
      display: 'grid !important',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 220px)) !important',
      gap: '1.25rem !important',
      gridAutoRows: 'minmax(100px, auto) !important',
    },
    //playerContractBanner
    
});