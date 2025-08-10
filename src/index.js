import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})
// DB Connection
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed", error);
})



