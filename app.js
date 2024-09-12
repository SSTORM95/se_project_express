const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes/index");
const { login, createUser } = require('./controllers/users');
const cors = require("cors");

const app = express();



const { PORT = 3001 } = process.env;
mongoose.connect('mongodb://127.0.0.1:27017/wtwr_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());

app.use(cors());
app.use("/", routes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});