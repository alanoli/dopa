import React, { useState } from 'react';
import { Drawer } from "@material-ui/core";
import { Menu } from '@material-ui/icons';

import { useStyles } from './styles';
import Content from './Content';

const MenuDrawer = () => {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Menu onClick={() => setOpen(true)} />
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Content />
            </Drawer>
        </div>
    )
}

export default MenuDrawer;