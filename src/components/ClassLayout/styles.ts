import { styled } from '../../styles/stitches.config';

export const ClassContainer = styled('div', {
    width: '100%',
    height: '100vh',
    backgroundColor: '$purple'
})

export const Header = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    '& button': {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer'
    },
    padding: '24px 30px'
})

export const MainContainer = styled('div', {
    backgroundColor: '$background',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    height: '100vh'
})