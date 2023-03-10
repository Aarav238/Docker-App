const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session")
const redis = require("redis")
const cors = require("cors")

let RedisStore = require("connect-redis")(session)



const {MONGO_USER , MONGO_PASSWORD ,  MONGO_PORT , MONGO_IP, REDIS_URL, REDIS_PORT, SESSION_SECRET} = require("./config/config.js")

let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
})


const postRouter = require("./routes/postRoutes.js")
const userRouter = require("./routes/userRoutes")

const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = () => {
    mongoose
.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(() => console.log("successfully connected"))
.catch((e) => {
    console.log(e)
    setTimeout(connectWithRetry, 5000)


})

}

connectWithRetry();
app.enable("trust proxy")
app.use(cors({}))

app.use(session({
    store: new RedisStore({client : redisClient}),
    secret: SESSION_SECRET,
    cookie: {
       secure: false,
       resave: false,
       saveUninitialized: false,
       httpOnly: true,
       maxAge: 60000,
    },
}))

app.use(express.json);



app.get("/",(req,res)  => {
    res.send(
        "<h2>Hello guys </h2>"
    )

})

app.use("/posts", postRouter)
app.use("/users",userRouter)



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})



//right side: port where we want to send the traffic
//left side : traffic coming from outside world