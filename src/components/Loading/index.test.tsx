import { render } from "@testing-library/react";

import Loading from "."

describe('Loading component', ()=> {
    it('Should render properly', ()=> {
        render(<Loading/>)
    })
})