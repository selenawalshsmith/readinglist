const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express(); //create express server called app
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
