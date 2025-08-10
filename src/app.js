// preparing the backend server to handle requests, parse data, and deal with cookies and CORS.
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
// allow only for this domain
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
// Parses incoming requests with JSON payloads
app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
// Reads cookies from requests and lets you send cookies in responses
app.use(cookieParser())
export { app }