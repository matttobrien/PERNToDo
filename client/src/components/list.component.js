import React, { Fragment, useEffect, useState } from "react";

import Edit from "./edit.component";

const List = () => {
  const [todos, setTodos] = useState([]);
  const getToDos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  const deleteTodo = async (id) => {
    try {
      await fetch (`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getToDos();
  }, []);
  return (
    <Fragment>
      <div className="card mt-5">
        <div className="card-body">
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr key={todo.todo_id}>
                  <td>
                    {todo.description}
                  </td>
                  <td>
                    <Edit todo={todo} />
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default List;