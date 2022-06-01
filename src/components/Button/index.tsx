import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

import { StyledButton } from './styles';

type Variants = 'filled' | 'ghost';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'css'> & {
  icon?: ReactElement;
  iconSide?: 'right' | 'left';
  children:  ReactNode | string;
  fullWidth?: boolean;
  variant: Variants;
};

export function Button({
  icon,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <StyledButton type={type} {...rest}>
      {icon}
      {children}
    </StyledButton>
  );
}
