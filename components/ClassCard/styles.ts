import { styled } from '../../styles/stitches.config';

export const ClassCardContainer = styled('div',{
    width: '290px',
    height: '100px',
    backgroundColor: '$principal',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center'
})

export const IconContainer = styled('div', {
    borderRadius: '16px',
    width: '68px',
    height: '68px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-34px',
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
    padding: '24px',
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
    width: '50%',
    paddingTop: '16px',
    '& p': {
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '12px',
        color: '$inputs',
        width: '50%'

    }
})

export const Time = styled('div',{
    display: 'flex',
    justifyContent: 'flex-start',
    width: '70%',
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