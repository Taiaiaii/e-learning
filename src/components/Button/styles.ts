import { styled } from '../../styles/stitches.config';

export const StyledButton = styled('button', {

    padding: '19px 82px',
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '17.58px',
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