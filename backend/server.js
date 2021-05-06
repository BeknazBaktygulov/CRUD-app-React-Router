const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());


app.listen(4000, () => {
    console.log('Server is running on port 4000')
})