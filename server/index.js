const express = require("express");
const cors = require("cors");

const pool = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    // $1 allows dynaaic insertion
    await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
    res.status(200).send();
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/todos", async (req, res) => {
  try {
    const allToDos = await pool.query("SELECT * FROM todo");
    res.json(allToDos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const toDo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(toDo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description }= req.body;
    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
    res.status(200).send();
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.status(200).send();
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});