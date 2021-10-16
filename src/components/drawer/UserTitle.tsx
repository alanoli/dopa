import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useStyles } from './styles';

import Button from '../../components/button';

const UserTitle = () => {
    const { auth, logOut } = useAuth();
    const classes = useStyles();

    return (
        <div className={classes.userTitle}>
            <img src="/dopa_logo_faded.svg" alt="" />
            <section>
                <p>{auth.currentUser.displayName}</p>
                <Button
                    variant={"outlined"}
                    color={"secondary"}
                    onClick={logOut}
                >
                    Logout
                </Button>
            </section>
        </div>
    )
}

export default UserTitle;