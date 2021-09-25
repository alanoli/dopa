import React from 'react';
import { TextField as DefaultTextField } from '@material-ui/core';
import { FieldInputProps, FieldMetaState } from 'react-final-form';

interface TextFieldProps {
    input: FieldInputProps<any, HTMLElement>;
    meta: FieldMetaState<any>;
    autoComplete?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ input, meta, autoComplete, ...props }) => (
    <DefaultTextField
        variant="outlined"
        fullWidth
        color="primary"
        autoComplete={autoComplete ? '' : 'off'}
        error={meta.error && meta.touched}
        helperText={meta.error && meta.touched && `${meta.error}`}
        {...props}
        {...input}
    />
);

export default TextField;
