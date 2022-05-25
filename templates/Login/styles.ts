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
    height: '80vh',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
        marginLeft: '-25%'
    },
    '@media (max-width: 320px)': {
        height: '100vh',
        padding: '30px'
    }
})

export const BottomContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-59px',
    padding: '20px 36px 20px',
    '& div': {
      width: '100%',
    },
    '& h1': {
        color: '$pink',
        padding: '0 4px 16px',
        fontSize: '36px',
        lineHeight: '42.66px',
        fontWeight: '400',
        width: '90%',
        '@media (max-width: 320px)': {
            width: '100%',
            padding: '0 20px 10px',
        }       
    },
    '& p': {
        color: '$principal',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '25px',
        padding: '0 4px 40px',
        width: '73%',
        '@media (max-width: 320px)': {
            width: '100%',
            padding: '0 20px 10px',
        }
    },    
})