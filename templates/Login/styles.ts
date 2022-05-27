import { styled } from '../../styles/stitches.config';

export const MainContainer = styled('div', {
    backgroundColor: '$purple',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',   
})

export const TopContainer = styled('div', {
    backgroundImage: 'url(/e.learning.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    display: 'flex ',
    height: '70vh',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
        marginLeft: '-25%'
    },
    '@media (max-width: 320px)': {
        height: '100vh',       
    }
})

export const BottomContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-59px',
    width: '100vw',
    padding: '20px 36px 20px',
    '@media (max-width: 320px)': {
        width: '100%',
        padding: '20px 20px 60px',
    },
    
    '& h1': {
        color: '$pink',
        padding: '0 4px 16px',
        fontSize: '3.6rem',
        lineHeight: '1.2',
        fontWeight: '400',
        width: '90%',
        '@media (max-width: 320px)': {
            width: '100%',
            padding: '0 20px 10px',
        }       
    },
    '& p': {
        color: '$principal',
        fontSize: '1.5rem',
        fontWeight: '400',
        lineHeight: '1.5',
        padding: '0 4px 40px',
        width: '225px',
        '@media (max-width: 320px)': {
            width: '100%',
            padding: '0 20px 10px',
        }
    },    
})