const express = require("express")
const cors = require("cors")

const pool = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.post("/todos", async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(5000, () => {
  console.log("server has started on port 5000")
})