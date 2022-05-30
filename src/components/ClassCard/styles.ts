import { styled } from '../../styles/stitches.config';

export const ClassCardContainer = styled('div',{
    backgroundColor: '$principal',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    height: '100px',
    width: '290px',
    padding: '10 24px',
    '@media (max-width: 320px)': {
        width: '260px',
        height: '85px'
    }
})

export const IconContainer = styled('div', {
    borderRadius: '16px',
    width: '30%',   
    height: '68%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-10%',
    variants: {
        concluded: {
            true: {
                backgroundColor: '$green',
            },
            false: {
                backgroundColor: '$pink'
            }
        }
    }  
})

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 16px',
    width: '100%'
})

export const Title = styled('h2', {
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '20px',
    color: '$base',
    width: '70%'
})

export const BottomContainer = styled('div',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
})

export const Details = styled('div', {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '65%',
    paddingTop: '16px',
    '& p': {
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '12px',
        color: '$inputs',
        width: '55%'
    }
})

export const Time = styled('div',{
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    gap: '5px'   
})

export const Label = styled('div', {
    borderRadius: '12px',
    backgroundColor: '$green',
    marginTop: '16px',
    '& p': {     
        fontSize: '10px',
        fontWeight: '500',
        lineHeight: '10px',
        padding: '3px 8px',
        color: '$principal',
    }   
})