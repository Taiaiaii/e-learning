import { render } from "@testing-library/react";

import { AppProvider } from "@context"

describe('Provider', ()=> {
    it('Should render children', ()=> {
        render(<AppProvider><div>TESTE</div></AppProvider>);
    })
})