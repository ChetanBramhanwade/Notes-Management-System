const express = require('express');
const Connection = require('./database/db.js')
// const UserModel = require('./models/Users');
const dotenv = require('dotenv');  
const Router = require('./router.js')
var bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);

// Connection();
app.use(Router);

const port = 8000;

app.listen(port, (err) => {
    console.log(`server is running on ${port}`);
})