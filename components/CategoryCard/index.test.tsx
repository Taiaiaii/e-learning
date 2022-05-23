import { render, screen } from '@testing-library/react';
import CategoryCard from '.';
import '@testing-library/jest-dom/extend-expect';

describe('Card Category Component', () => {
    it('Should display all elements properly', ()=> {
        render (
            <CategoryCard img='/build.svg' lessons='LESSONS' title='TITLE'/>
        )
        
        const title = screen.getByText('TITLE');
        const lessons = screen.getByText('LESSONS Aulas');
        const image = screen.getByRole('img');

        expect(title).toBeInTheDocument();
        expect(lessons).toBeInTheDocument();
        expect(image).toBeInTheDocument();
            
    })
})