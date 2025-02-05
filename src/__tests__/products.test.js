import { render, screen, waitFor } from "@testing-library/react";
import { useActions, useZustandStore } from "../store/zustand/use-counter";
import Products from "../pages/Product/product";
import { BrowserRouter } from "react-router-dom";

// Mocking Zustand store
jest.mock("../store/zustand/use-counter", () => ({
  useZustandStore: jest.fn(),
  useActions: jest.fn(),
}));

describe("Products Component", () => {
  it("should render the 'List of Products' heading", () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    );
    expect(screen.getByText("List of Products")).toBeInTheDocument();
  });

  it("should display products when listOfProducts is populated", async () => {
    const mockProducts = [
      { id: 1, title: "Product 1", thumbnail: "image1.jpg" },
      { id: 2, title: "Product 2", thumbnail: "image2.jpg" },
    ];

    // Mock Zustand store
    useZustandStore.mockReturnValue({ listOfProducts: mockProducts });
    useActions.mockReturnValue({ fetchListOfProducts: jest.fn() });

    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    );

    // Wait for products to be rendered
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
    });

    // Check if images are rendered
    expect(screen.getByAltText("product img")).toBeInTheDocument();
  });

  it("should display 'No products available' when the listOfProducts is empty", async () => {
    // Mock Zustand store
    useZustandStore.mockReturnValue({ listOfProducts: [] });
    useActions.mockReturnValue({ fetchListOfProducts: jest.fn() });

    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    );

    // Wait for the message to appear
    await waitFor(() => {
      expect(screen.getByText("No products available")).toBeInTheDocument();
    });
  });

  it("should call fetchListOfProducts on component mount", () => {
    const fetchListOfProducts = jest.fn();

    // Mock Zustand store
    useZustandStore.mockReturnValue({ listOfProducts: [] });
    useActions.mockReturnValue({ fetchListOfProducts });

    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    );

    // Ensure the action is called
    expect(fetchListOfProducts).toHaveBeenCalledTimes(1);
  });
});
