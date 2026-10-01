import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders step 1 of the form", () => {
  render(<App />);
  expect(screen.getByText(/Step 1: Personal Information/i)).toBeInTheDocument();
});
