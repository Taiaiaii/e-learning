import { keyframes } from '@stitches/react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { styled } from '@styles/stitches.config';

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    inset: 0,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
});

export const StyledContent = styled(AlertDialogPrimitive.Content, {
    backgroundColor: '$principal',
    borderRadius: '16px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '500px',
    maxHeight: '85vh',
    padding: 50,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
    '&:focus': { outline: 'none' },
});

export const TriggerButton = styled('button', { border: 'none', backgroundColor: 'transparent' })

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

export const Description = styled('h1', {
    margin: '20px',
    color: '$base',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    textAlign: 'center'
});

export const ButtonsContainer = styled('div', { display: 'flex', padding: '0 20px' });