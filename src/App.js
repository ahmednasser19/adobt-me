import React from 'react';
import  ReactDOM from 'react-dom';
import Pet  from './Pet';
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
