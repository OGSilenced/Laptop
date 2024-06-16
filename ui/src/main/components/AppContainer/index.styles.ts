import { makeStyles } from '@mui/styles';

export default makeStyles({
  desktopIconBox: {
    maxWidth: 100,
    height: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid transparent',
    padding: 10,
  },
  icon: {
    height: 50,
  },
  iconTitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'normal',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  '&:hover': {
    cursor: 'pointer',
    border: '1px rgba(255, 255, 255, 0.466) solid',
    backgroundColor: 'rgba(131, 210, 255, 0.068)',
},
'@keyframes fadeIn': {
    from: {
        opacity: 0,
        transform: 'scale(0)',
    },
    to: {
        opacity: 1,
        transform: 'scale(1)',
    },
  }
});