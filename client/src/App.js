import React, { Fragment } from 'react';
import './App.css';

import NavBar from './components/navbar.component';
import Input from './components/input.component';
import List from './components/list.component';

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Input />
        <List />
      </div>
    </Fragment>
  );
};

export default App;
