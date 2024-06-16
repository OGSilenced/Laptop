import React from 'react';
import { Typography } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';

import useStyles from './index.styles'

export const StrainList: React.FC<{
    name: any;
    progress: any;
    n: any;
    p: any;
    k: any;
}> = (props) => {
    const classes = useStyles();

    const linearProgressProps: LinearProgressProps = {
        variant: "determinate",
        value: props.progress.amount, 
        classes: {
          root: classes.herbsProgressParent,
          bar: classes.herbsProgress,
        },
      };

      const linearProgressPropsN: LinearProgressProps = {
        variant: "determinate",
        value: props.n, 
        classes: {
          root: classes.herbInput,
          bar: classes.herbInputValue,
        },
      };

      const linearProgressPropsP: LinearProgressProps = {
        variant: "determinate",
        value: props.p, 
        classes: {
          root: classes.herbInput,
          bar: classes.herbInputValue,
        },
      };

      const linearProgressPropsK: LinearProgressProps = {
        variant: "determinate",
        value: props.k, 
        classes: {
          root: classes.herbInput,
          bar: classes.herbInputValue,
        },
      };
// n, p, k *100???

    return (
        <div className={classes.herbItem}>
            <Typography variant="h1" className={classes.herbStrainTitle}>{props.name}</Typography>

            <div className={classes.herbStrainLevels}>
                <Typography style={{ fontSize: 12, color: '#fff' }}>{props.progress.current}</Typography>
                <Typography style={{ fontSize: 12, color: '#fff' }}>{props.progress.next}</Typography>
            </div>

            <LinearProgress {...linearProgressProps} />

            <div className={classes.herbData}>
                <Typography className={classes.dataLabel}>N</Typography>
                <LinearProgress {...linearProgressPropsN} />
            </div>

            <div className={classes.herbData}>
                <Typography className={classes.dataLabel}>P</Typography>
                <LinearProgress {...linearProgressPropsP} />
            </div>

            <div className={classes.herbData}>
                <Typography className={classes.dataLabel}>K</Typography>
                <LinearProgress {...linearProgressPropsK} />
            </div>


        </div>
    )
}