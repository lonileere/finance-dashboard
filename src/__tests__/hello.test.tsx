import { render, screen } from "@testing-library/react";

function Hello() {
  return <h1>Hello</h1>;
}

test("renders Hello", () => {
  render(<Hello />);
  expect(screen.getByRole("heading", { name: "Hello" })).toBeInTheDocument();
});
