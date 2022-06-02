import { styled } from '@styles/stitches.config';

export const Div = styled('div', {
    maxWidth: '334px',
    width: '100%',
    '& input::placeholder': {
        color: '$inputs',
        fontSize: '1.5rem',
        fontWeight: '400',
        position: 'absolute',
        left: '60px',
        top: '17px'
    },
    '& input:focus::placeholder': {
        color: 'transparent',
     },
    '@media (max-width: 320px)': {
        padding: '0 20px',
    }
})

export const StyledInput = styled('input', {
    width: '100%',
    height: '56px',
    borderRadius: '100px',
    display: 'flex',
    textAlign: 'center',
    backgroundImage: 'url("/search.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px',
    backgroundPositionX: '26.5px',
    backgroundPositionY: 'center',
    color: '$base',
    fontSize: '2rem',
    outline: 'none'
})