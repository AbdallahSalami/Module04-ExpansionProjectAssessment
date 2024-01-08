// installed node packages express and boyd parser and mysql
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
// import userRouter from "./routes/userRoute";
// import productRouter from "./routes/productRoute";

const app = express();

//middleware
app.use(cors(corOptions));

app.use(express.json())



// app usages
app.use("/user" );
app.use("/product" ) 
//app connection


app.listen (process.env.PORT ,()=>{
    console.log("server listening on port",process.env.PORT);
})
