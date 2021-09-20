import React from 'react';

import {
    Home
} from '@material-ui/icons';

import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider
} from '@material-ui/core';

const Content = () => {
    return (
        <List>
            <ListItem button key="principal">
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary={"Principal"} />
            </ListItem>
            <ListItem button key="habit">
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary={"Hábito"} />
            </ListItem>
        </List>
    )
}

export default Content;