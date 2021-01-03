// USING EXPRESS
// import libraries
import express from "express" // install express
import mongoose from "mongoose" // install mongoose database (talk with the database)
import cors from "cors" // install cors (prevent error CORS)

// import own modules
import routes from "./routes/routes.js"

// initialize the express app
const app = express()

// use body-parser
app.use(express.json)
app.use(express.urlencoded({ extended: false }))

// prevent CORS error
app.use(cors())
// go to this link to connect with mongodb "https://www.mongodb.com/cloud/atlas" go for free
// store the connection url in an .env file
const PORT = process.env.PORT || 5000 // (store in .env)

// connection url with mongodb
const CONNECTION_URL =
  "mongodh+srv://ronrix:ronrix1234@testcluster1.3u5e7.mongodb.net/<dbname>?retryWrites=true&w=majority"

// connect to the database url (passed args to make sure that there are no warnings in the console)
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, userUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message))

mongoose.set("useFindAndModify", false)
