import { styled } from '@styles/stitches.config';

export const CategoryCardContainer = styled('div', {
    backgroundColor: '$principal',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '16px',
    width: '100%',
    padding: '25px',
    alignItems: 'flex-start',
    position: 'relative',
    maxWidth: '156px',
    '@media (max-width: 320px)': {
        width: '130px',
        height: '172px'
    }
})

export const CategoryContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '24px',
    width: '100%',  
})

export const CategoryTitle = styled('h2', {
    fontSize: '1.5rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '$base',
    paddingBottom: '4px'
})

export const Lessons = styled('p', {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '$inputs'
})

export const ChildrenContainer = styled('div', {
    position: 'absolute',
    top: '12px',
    right: '14px'
})