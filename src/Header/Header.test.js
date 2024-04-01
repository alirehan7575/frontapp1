import { Header } from "./Header";
import React from "react";
import { render, screen } from "@testing-library/react"


describe('Header Componenet Tests', () => {
    test('Check div content', async () => {
        render(<Header />);
        const divEle = await screen.findByTestId("div-test-id");
        expect(divEle.textContent).toBe("My First React Application");
    })

})
