import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ConnectedApp from "../src/ConnectedApp";

afterEach(cleanup);

describe("<ConnectedApp /> ", () => {
    it("renders without crashing", () => {
        const { getByText } = render(<ConnectedApp />);
        expect(true).toBe(true);
    });
});
