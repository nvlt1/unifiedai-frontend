import React from 'react';
import { TextField } from '@fluentui/react';
import './Input.scss';

const Input = ({ label, placeholder, onChange, value }) => {
    return (
        <TextField
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            styles={{root: {margin: '10px 0'} }}
        />
    );
};

export default Input;