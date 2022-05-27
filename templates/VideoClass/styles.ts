import { styled } from '../../styles/stitches.config';

export const VideoContainer = styled('div', {
    width: '100%',
    height: '30%',
    position: 'absolute',
    top: 0,
    '& iframe': {
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
    }
})

export const DescriptionContainer = styled('div', {
    width: '100%',
    padding: ' 0 25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '60%',
    '& h1': {
        fontSize: '3rem',
        fontWeight: '400',
        color: '$titulo'
    },
    '& p': {
        fontSize: '1.5rem',
        color: '$base'
    }
})

export const DetailsContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%',
    padding: '17px 0',
    '& span': {
        fontSize: '1.2rem',
        color: '$inputs'
    }
    
})

export const ButtonContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    maxWidth: '100%',
    width: '100%',
    padding: '0 25px',
    boxSizing: 'border-box'

})

export const ButtonContent = styled('div', {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    width: '100%',
    '& svg': {
        margin: '0 4px'
    }

})