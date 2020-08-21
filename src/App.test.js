import React from "react";
// import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import SocnetwoApp from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<SocnetApp />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SocnetwoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
