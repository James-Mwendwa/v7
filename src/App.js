const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Moon",
      animal: "Cat",
      breed: "whatever",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havana",
    }),
    React.createElement(Pet, {
      name: "Dirty",
      animal: "Pig",
      breed: "White",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
