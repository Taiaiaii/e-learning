import { styled } from '../../styles/stitches.config';

export const StyledButton = styled('button', {

    padding: '19px 82px',
    fontSize: '1.5rem',
    fontWeight: '500',
    lineHeight: '1.5',
    whiteSpace: 'nowrap',
    border: 0,
    borderRadius: '100px',
    cursor: 'pointer',
    outline: 0,
    variants: {
        variant: {
            filled: {
                backgroundColor: '$pink',
                color: '$principal',
            },
            ghost: {
                backgroundColor: 'transparent',
                color: '$pink'
            },
        },
        fullWidth: {
            true: {
                display: 'block',
                width: '100%',
            },
        },
    }
})