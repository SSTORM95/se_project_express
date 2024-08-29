const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3001 } = process.env;
mongoose.connect('mongodb://127.0.0.1:27017/wtwr_db');

const app = express();
