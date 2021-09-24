import React from 'react';
import { TextField as DefaultTextField } from '@material-ui/core';

const TextField = ({ input, meta, ...props }) => (
    <DefaultTextField
        variant="outlined"
        fullWidth
        color="primary"
        error={meta.error && meta.touched}
        helperText={meta.error && meta.touched && `${meta.error}`}
        {...props}
        {...input}
    />
);

export default TextField;
