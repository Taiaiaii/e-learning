import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ReactElement } from 'react';
import { ButtonsContainer, Content, StyledContent, StyledDescription, StyledOverlay, TriggerButton,  } from './styles';
import Garbage from '../../public/garbage.svg';
import ColorfulGarbage from '../../public/colorfulGarbage.svg';
import { Button } from '../Button';

type ContentType = {
    children: ReactElement;
}

function AlertDialogContent({ children, ...props }: ContentType) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

export default function DeleteComponent () {
    return (
      <AlertDialogPrimitive.Root>
        <AlertDialogPrimitive.Trigger asChild>
          <TriggerButton>
            <Garbage />
          </TriggerButton>
        </AlertDialogPrimitive.Trigger>
        <AlertDialogContent>
          <Content>
            <ColorfulGarbage/>
            <StyledDescription>
              Quer excluir suas aulas de Matemática?
            </StyledDescription>
            <ButtonsContainer>
              <AlertDialogPrimitive.Action asChild>
                <Button variant='ghost'>Não</Button>
              </AlertDialogPrimitive.Action>
              <AlertDialogPrimitive.Cancel asChild>
                <Button variant='filled'>Com certeza</Button>
              </AlertDialogPrimitive.Cancel>
            </ButtonsContainer>
          </Content>
        </AlertDialogContent>
      </AlertDialogPrimitive.Root>
    );
}