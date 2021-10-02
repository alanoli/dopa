import React from 'react';
import Router from 'next/router';

import { makeStyles } from '@material-ui/core';
import UserTitle from './UserTitle';

import {
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    primary: {
        fontSize: '1.4rem'
    }
}))

const Content = () => {
    const classes = useStyles();

    return (
        <>
            <UserTitle />
            <List>
                <ListItem button key="habits">
                    <ListItemText onClick={() => Router.push("/habits")} classes={classes}>
                        Hábitos
                    </ListItemText>
                </ListItem>
                <ListItem button key="today">
                    <ListItemText onClick={() => Router.push("/today")} classes={classes}>
                        Hoje
                    </ListItemText>
                </ListItem>
                <ListItem button key="habits/progress">
                    <ListItemText onClick={() => Router.push("/habits/progress")} classes={classes}>
                        Demais períodos
                    </ListItemText>
                </ListItem>
            </List>
        </>
    )
}

export default Content;