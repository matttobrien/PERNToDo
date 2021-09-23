import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a className="navbar-brand" href="#">Pern Todo List</a>
        </div>
      </nav>
    );
  }
}