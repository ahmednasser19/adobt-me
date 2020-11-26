import React from 'react';
import  ReactDOM from 'react-dom';
import Pet  from './Pet';
import SearchParams from './SearchParams';
const App = () => {

  return(
    <div>
      <h1 id="something importan">Adopt me!</h1>
      <SearchParams/>
    </div>
  )
};
ReactDOM.render((<App/>), document.getElementById("root"));
