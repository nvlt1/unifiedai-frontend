import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import './Button.scss'

const Button = ({ text, onClick }) => {
    return (
        <PrimaryButton onClick={onClick} styles={{ root: {margin: '5px'} }}>
            {text}
        </PrimaryButton>
    );
};

export default Button;