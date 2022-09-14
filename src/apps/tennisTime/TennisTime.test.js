import { screen, render } from "@testing-library/react";

import TennisTime from "./TennisTime";
test("renders tennis time in text", () => {

  // Arrage - setup the test
  render(<TennisTime/>);

  // Act - run the test

  // Assert - verify the test
  screen.getByText(/tennis time/i)

});
