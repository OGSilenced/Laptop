import React from 'react';
import { Typography, Button } from '@mui/material';
import useStyles from './index.styles';

export const Staff: React.FC = () => {
  const classes = useStyles();

  return (
      <div className={classes.staffPage}>
        <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Staff Panel</Typography>

        <div className={classes.infoList}>
            <div className={classes.infoItem}>
                <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Total Groups</Typography>
                <Typography variant="body2" className={classes.subHeaderText}>1 Groups</Typography>
            </div>

            <div className={classes.infoItem}>
                <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Total Users In Groups</Typography>
                <Typography variant="body2" className={classes.subHeaderText}>3 Users</Typography>
            </div>
            </div>

            <div className={classes.infoList}>
            <div className={classes.infoItem}>
                <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>View Group Logs</Typography>
                <Button variant="contained" className={classes.button}>View Logs</Button>
            </div>

            <div className={classes.infoItem}>
                <Typography variant="body2" style={{ color: '#fff', fontSize: 26 }} className={classes.headerText}>Remove Group Member</Typography>
                <Button variant="contained" className={classes.button}>Remove</Button>
            </div>

        </div>
      </div>
  )
}