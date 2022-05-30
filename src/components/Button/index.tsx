import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type Variants = 'filled' | 'ghost';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'css'> & {
  children: string;
  fullWidth?: boolean;
  variant: Variants;
};

export default function Button({ children, type = 'button', ...rest }: ButtonProps) {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
}
