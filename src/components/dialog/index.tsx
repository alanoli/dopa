import React, { useState } from 'react';

import {
    Box,
    Dialog as DefaultDialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton
} from '@material-ui/core';

import { Close } from '@material-ui/icons';

import Button from '../button';

interface DialogProps {
    children: React.ReactElement;
    open: boolean;
    onClose: () => void;
    title: string;
    onSubmit: () => void;
}

export const Dialog: React.FC<DialogProps> = ({ children, open, onClose, title, onSubmit }): React.ReactElement => {

    return (
        <DefaultDialog
            open={open}
            onClose={onClose}
            fullWidth
        >
            <Box position={"absolute"} top={0} right={0}>
                <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
            </Box>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onSubmit}>Ok</Button>
                <Button onClick={onClose}>Cancelar</Button>
            </DialogActions>
        </DefaultDialog>
    )
}