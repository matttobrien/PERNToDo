import React, { Fragment, useState } from "react";

const Input = () => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome!</h1>
      <p className="text-center">Make sure to get these done...</p>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input 
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default Input;
