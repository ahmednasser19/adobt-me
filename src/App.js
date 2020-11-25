import React from 'react';
import  ReactDOM from 'react-dom';
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};



const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna ",
      animal: "Dog",
      breed: "Havanse",
    }),
    React.createElement(Pet, {
      name: "Pepper ",
      animal: "brid",
      breed: "Cokatiel",
    }),
    React.createElement(Pet, {
      name: "Donik ",
      animal: "Cat",
      breed: "Mixed",
    }), 
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
