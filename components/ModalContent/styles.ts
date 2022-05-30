import { styled } from '../../styles/stitches.config';
export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

export const Description = styled('h1', {
    margin: '20px',
    color: '$base',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    textAlign: 'center'
});

export const ButtonsContainer = styled('div', { display: 'flex', padding: '0 20px' });