const express = require("express");
const mongoose = require("mongoose")

const app = express();


mongoose
.connect("mongodb://aarav:mydatabase@mongo-db:27017/?authSource=admin")
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