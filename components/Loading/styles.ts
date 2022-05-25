import { keyframes } from '@stitches/react';
import { styled } from '../../styles/stitches.config';

const dots = keyframes({
    '0% ': {
        backgroundColor: '#FF6680'
    },
    '50%': {
        backgroundColor: '#FFFFFF'
    },

    '100%': {
        backgroundColor: '#FFFFFF'
    }
})

export const LoadingContainer = styled('div', {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$purple',   
})

export const DotContainer = styled('div', {
    paddingTop: '48px',
    '& div::before, div::after': {
        content: '',
        display: 'inline-block',
        position: 'absolute',
        top: 0
    },
    '& div::before': {
        left: '-15px',
        width: '4px',
        height: '4px',
        backgroundColor: '$principal',
        color: '$principal',
        animation: `${dots} 1s infinite alternate`,
        animationDelay: '1s'
    },
    '& div::after': {
        left: '15px',
        width: '4px',
        height: '4px',
        backgroundColor: '$principal',
        color: '$principal',
        animation: `${dots} 1s infinite alternate`,
        animationDelay: '2s'
    }
})

export const Dot = styled('div', {
    position: 'relative',
    width: '4px',
    height: '4px',
    backgroundColor: '$principal',
    color: '$principal',
    animation: `${dots} 1s infinite linear alternate`,
    animationDelay: '3s' 
})