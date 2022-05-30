import { ButtonsContainer, Content, Description } from './styles';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ReactElement, ReactNode } from 'react';

interface IModalContentProps {
    icon?: ReactElement;
    description: string;
    buttonCancel: ReactNode;
    buttonConfirm: ReactNode

}

export function ModalContent({icon, description, buttonCancel, buttonConfirm}: IModalContentProps){
    return (
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
    );
}