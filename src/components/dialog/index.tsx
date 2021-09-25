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
}

export const Dialog: React.FC<DialogProps> = ({ children, onClose, open, title }): React.ReactElement => {

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
        </DefaultDialog>
    )
}