const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mailRoutes = require('./routes/mailRoutes');
require('dotenv').config();

const app = express();
const port = 4200;

app.use(cors({ origin: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use('/mail', mailRoutes);

app.listen(port, () => {
  console.log(`listening on port:${port}`);
});
