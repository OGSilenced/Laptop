import React from 'react';
import useStyles from './index.styles'

export const Footer: React.FC<{}> = (props) => {
    const classes = useStyles();

    return (
        <section className={classes.footer}>
            {props.children}
        </section>
    )
}