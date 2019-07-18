import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ConnectedApp from "../src/ConnectedApp";

afterEach(cleanup);

describe("<ConnectedApp /> ", () => {
    it("renders without crashing", () => {
        const { getByText } = render(<ConnectedApp />);
        expect(getByText("Welcome AUTH_USER_ID")).toBeInTheDocument();
        expect(true).toBe(true);
    });
});
