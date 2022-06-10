import { fireEvent, render, screen } from "@testing-library/react";

import { MOCKED_CATEGORY_LIST } from "../../../.mocks/constants";
import { HomeTemplate } from "."

const mockedPush = jest.fn()
const mockTabSelected = jest.fn()

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockedPush,
    };
  },
}));

jest.mock('@hooks/useTab', () => ({
  useTab: () => ({
    isTabSelected: mockTabSelected,
    
  }),
}));

describe('Home template', ()=> {
    it('Should call function on click card', ()=> {
        render(<HomeTemplate categorys={MOCKED_CATEGORY_LIST}/>)

        const cards = screen.getAllByTestId('category-card')
        fireEvent.click(cards[0])
        expect(mockedPush).toBeCalled()
    })
})