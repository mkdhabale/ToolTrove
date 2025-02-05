import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ZustandCounter from "../pages/Product/counter-example/Counter";
import { BrowserRouter } from "react-router-dom";

test("check ZustandCounter logic", () => {
  render(
    <BrowserRouter>
      <ZustandCounter />
    </BrowserRouter>
  );
  const getCounterText = screen.getByText("Counter value is 0");
  const getIncButtonElementByText = screen.getByText("Increment");
  const getDecButtonElementByText = screen.getByText("Decrement");
  fireEvent.click(getIncButtonElementByText);

  expect(getCounterText.textContent).toBe("Counter value is 1");

  fireEvent.click(getIncButtonElementByText);

  expect(getCounterText.textContent).toBe("Counter value is 2");

  fireEvent.click(getDecButtonElementByText);

  expect(getCounterText.textContent).toBe("Counter value is 1");
});
