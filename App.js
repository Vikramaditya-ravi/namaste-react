const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "headings" },
      "Hello world from the React !"
    ),
    React.createElement(
      "h1",
      { id: "headings" },
      "Hello world from the React !"
    ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
