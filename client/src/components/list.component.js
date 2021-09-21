import React, { Fragment, useEffect, useState } from "react";

const List = () => {
  const getToDos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getToDos();
  })
  return (
    <Fragment>
      <table className="table table-hover table-bordered mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  )
};

export default List;