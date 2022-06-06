import { styled } from '@styles/stitches.config';

const IconsSideStyles = {
    right: {
        flexDirection: 'row-reverse',
        '& svg ': {
            marginLeft: 10,
        },

    },
    left: {
        flexDirection: 'row',
        '& svg ': {
            marginRight: 10,
        },
    },

}

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
        iconSide: IconsSideStyles
    }
})