const express = require('express');
const dotenv = require("dotenv");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();



// getting the server port
const port = process.env.PORT;



app.use(cors());
//to pass the data coming from incoming request to req.body
app.use(express.json());



//connecting to the mongodb
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@mern-todo-cluster.gt96f.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
       
    }
).then(() => {
    console.log('Database connected');
});
 

// Api routes 
app.use("/tasks", require("./routes/tasks.router.js"));



// starting the server 
app.listen(port, () =>

    console.log('Server is running on port : ' + port)

);


 


