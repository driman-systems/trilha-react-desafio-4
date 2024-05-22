import React from 'react';
import { ButtonContainer } from './styles';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({ title, isValid }) => {
  return <ButtonContainer disabled={!isValid}>{title}</ButtonContainer>;
};

export default Button;
