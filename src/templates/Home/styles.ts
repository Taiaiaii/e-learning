import { styled } from '../../styles/stitches.config';

export const Title = styled('div', {
    width: '100%',
    padding: '32px 25px 13px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h1': {
        fontSize: '3rem',
        color: '$titulo',
        fontWeight: '400'
    },
    '& p': {
        fontSize: '1.5rem',
        color: '$inputs'
    }
})

export const Content = styled('div', {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    gridAutoRows: '200px',
    padding: '0 15px'
})
export const CardContainer = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'noWrap'
})