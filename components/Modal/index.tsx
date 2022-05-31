import React, { ReactElement, ReactNode } from "react";

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import {
  StyledContent,
  StyledOverlay,
  TriggerButton,
  ButtonsContainer,
  Content,
  Description,
} from './styles';

interface IContentProps {
  children: ReactElement;
}

function AlertDialogContent({ children, ...props }: IContentProps) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

interface IModalProps {
  trigger: ReactElement;
  icon?: ReactElement;
  description: string;
  buttonCancel: ReactNode;
  buttonConfirm: ReactNode;
}

export function Modal({
  trigger,
  icon,
  description,
  buttonCancel,
  buttonConfirm,
}: IModalProps) {
  return (
    <AlertDialogPrimitive.Root>
      <AlertDialogPrimitive.Trigger asChild>
        <TriggerButton>{trigger}</TriggerButton>
      </AlertDialogPrimitive.Trigger>
      <AlertDialogContent data-testid='dialog'>
        <Content>
          {icon}
          <Description>{description}</Description>
          <ButtonsContainer>
            <AlertDialogPrimitive.Cancel asChild>
              {buttonCancel}
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action asChild>
              {buttonConfirm}
            </AlertDialogPrimitive.Action>
          </ButtonsContainer>
        </Content>
      </AlertDialogContent>
    </AlertDialogPrimitive.Root>
  );
}
