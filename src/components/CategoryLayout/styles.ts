import { styled } from '@styles/stitches.config';

export const CategoryContainer = styled('div', {
    width: '100%',
    backgroundColor: '$purple',
    position: 'relative'
})

export const Header = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    '& button': {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer'
    },
    padding: '24px 30px'
})

export const Content = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: '24px'
})

export const MainContainer = styled('div', {
    backgroundColor: '$background',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    paddingBottom: '20px',
    minHeight: '100vh'
})

export const Footer = styled('div', {
    backgroundColor: '$principal',
    display: 'flex',
    justifyContent: 'space-between',
    height: '73px',
    position: 'fixed',
    bottom: 0,
    width: '100%'
})

export const Options = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    '& p': {
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '$inputs',
        paddingLeft: '12px'
    },
    variants: {
        selected: {
            true: {
                borderTop: '2px solid #FF6680',
                '& p': {
                    color: '$pink'
                },
                '& svg path': {
                    stroke: '$pink'
                }
            }
        }
    }
})