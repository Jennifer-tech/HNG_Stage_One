const express = require('express');
const router = require('./routes/indexRoute')

const dotenv = require('dotenv');
dotenv.config()

const app = express();

app.use(express.json())
app.use('/api/v1', router)

// mongoose.connect(process.env.MONGODB_URI_offline, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     family: 4
// })
// .then(() => {
//     console.log("DB Connected")
// })
// .catch((err) => {
//     console.log("There is an issue trying to connect toyour database")
// })

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})