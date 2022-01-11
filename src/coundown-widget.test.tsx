import React from "react"
import {screen, render} from "@testing-library/react"

import {CoundownWidget} from "./coundown-widget";

describe("CoundownWidget", () => {
    it("should render the component", () => {
        render(<CoundownWidget contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
