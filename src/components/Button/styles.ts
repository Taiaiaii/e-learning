import { styled } from '@styles/stitches.config';

export const StyledButton = styled('button', {
    padding: '11px 24px',
    fontSize: '1.5rem',
    fontWeight: '500',
    lineHeight: '1.5',
    whiteSpace: 'nowrap',
    border: 0,
    borderRadius: '100px',
    cursor: 'pointer',
    outline: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg ': {
        marginLeft: 10,
    },
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
                padding: '19px 82px',
            },
        },
        iconSide: {
            right: {
                flexDirection: 'row-reverse',               
            },
            left: {
                flexDirection: 'row',
            },

        }
    }
})