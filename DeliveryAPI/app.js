const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const clientRoute = require('./routes/client')
const dataRoute = require('./routes/data')
const morgan = require('morgan')
const manegementRoute = require('./routes/manegement')


app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use('/client',clientRoute);
app.use('/data',dataRoute);
app.use('/manegement',manegementRoute);
app.listen(8081, () => console.log('DeliveryAPI Now Running On localhost:8081'));