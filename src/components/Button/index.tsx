import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { StyledButton } from './styles';

type Variants = 'filled' | 'ghost';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'css'> & {
  children: string | ReactNode
  fullWidth?: boolean;
  variant: Variants;
};

export function Button({ children, type = 'button', ...rest }: ButtonProps) {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
}
