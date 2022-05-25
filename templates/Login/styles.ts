import { styled } from '../../styles/stitches.config';

export const MainContainer = styled('div', {
    backgroundColor: '$purple',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '20px'
})

export const TopContainer = styled('div', {
    backgroundImage: 'url(/e.learning.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    display: 'flex ',
    padding: '131px 136px 135px 36px',
    justifyContent: 'center'
})

export const BottomContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-39px',
    padding: '0 36px',
    '& div': {
      width: '100%',
    },
    '& h1': {
        color: '$pink',
        padding: '0 4px 16px',
        fontSize: '36px',
        lineHeight: '42.66px',
        fontWeight: '400',
        width: '90%'       
    },
    "& p": {
        color: '$principal',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '25px',
        padding: '0 4px 40px',
        width: '73%'
    }
})