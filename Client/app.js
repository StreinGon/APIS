const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const morgan = require('morgan')
const eventRouter = require('./routes/events');
const adRouter = require('./routes/advertisment');

app.use(cors());
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use('/event',eventRouter);
app.use('/advertisment',adRouter);
app.listen(8083, () => console.log('ClientSDK Now Running On localhost:8083'));