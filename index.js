const express = require("express");
const mongoose = require("mongoose");
const {MONGO_USER , MONGO_PASSWORD ,  MONGO_PORT , MONGO_IP} = require("./config/config.js")

const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

mongoose
.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(() => console.log("successfully connected"))
.catch((e) => console.log(e))

app.get("/",(req,res)  => {
    res.send(
        "<h2>Hello guys </h2>"
    )

})



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})



//right side: port where we want to send the traffic
//left side : traffic coming from outside world