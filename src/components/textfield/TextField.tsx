import React from 'react';
import { TextField as DefaultTextField, TextFieldProps } from '@material-ui/core';
import { FieldInputProps, FieldMetaState } from 'react-final-form';

type CustomTextFieldProps = TextFieldProps & {
    input: FieldInputProps<any, HTMLElement>;
    meta: FieldMetaState<any>;
}

const TextField: React.FC<CustomTextFieldProps> = ({ input, meta, autoComplete, ...props }) => (
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
