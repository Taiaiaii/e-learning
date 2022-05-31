import React from "react"
import { render, screen } from "@testing-library/react"

import ClassCard from "."

describe('Class Card Component', ()=> {
    it('Should render with label', ()=> {
        render(<ClassCard classNumber="01" isConcluded={true} time={5} title='teste'/>)

        const label = screen.getByText('Completo!')
        expect(label).toBeInTheDocument()
    })

    it('Should render without label', () => {
      render(
        <ClassCard classNumber='01' isConcluded={false} time={5} title='teste' />
      );

      const label = screen.queryByText('Completo!');
      expect(label).not.toBeInTheDocument();
    });

    it('Should render all elements properly', ()=> {
        render(
          <ClassCard
            classNumber='01'
            isConcluded={false}
            time={5}
            title='teste'
          />
        );

        const title = screen.getByText('teste')
        const details = screen.getByText('Aula 01')
        const time = screen.getByText('5 min')     

        expect(title).toBeInTheDocument()
        expect(details).toBeInTheDocument()
        expect(time).toBeInTheDocument()
    })
})