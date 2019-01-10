const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const morgan = require('morgan')

const dataRouter = require('./routes/data')

mongoose.connect(
  'mongodb://localhost/DataAPI',
  { useNewUrlParser: true },
);

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use('/data',dataRouter);

app.listen(8082, () => console.log('DataAPI Now Running On localhost:8082'));