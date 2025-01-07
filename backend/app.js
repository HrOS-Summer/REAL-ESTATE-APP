import express from "express";

import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);



const PORT = 8800;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);    
})