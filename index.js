const express = require('express');
const { getSlackName } = require('./controllers/indexController')
const router = express.Router();


const dotenv = require('dotenv');
dotenv.config()

const app = express();

app.use(express.json())
app.use('/api', getSlackName)

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})