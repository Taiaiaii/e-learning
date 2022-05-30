import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ReactElement } from 'react';
import { StyledContent, StyledOverlay, TriggerButton } from './styles';

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

interface IModalTriggerProps {
    button: ReactElement;
    children: ReactElement;
}

export function ModalTrigger({button, children}: IModalTriggerProps) {
    return(
        <AlertDialogPrimitive.Root>
        <AlertDialogPrimitive.Trigger asChild>
          <TriggerButton>
            {button}
          </TriggerButton>
        </AlertDialogPrimitive.Trigger>
        <AlertDialogContent data-testid='dialog'>
        {children}
        </AlertDialogContent>
      </AlertDialogPrimitive.Root>
    )
}
