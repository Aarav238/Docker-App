const express = require("express");

const app = express();

app.get("/",(req,res)  => {
    res.send(
        "<h2>Hello guys</h2>"
    )

})



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})



//right side: port where we want to send the traffic
//left side : traffic coming from outside world