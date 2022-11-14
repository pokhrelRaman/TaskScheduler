const express = require("express");
const app  = express();
const port = 3000;
const connectdb = require('./db/connect');
require('dotenv').config();
app.use(express.json());

//middleware

const tasks = require('./routes/tasks')



app.get("/hello",(req,res)=> {
        res.send("Task manager app");
}
)

app.use('/api/v1/tasks',tasks)

const start = async () => 
{
        try
        {
                await connectdb(process.env.MONGO_URI);
                app.listen(port,console.log(`Server is listening on port ${port}`));
        }
        catch(err){console.log(error)}
}

start();