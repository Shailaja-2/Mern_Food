// import app from "./app.js";

// app.listen(process.env.PORT, ()=>{
//     console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
// });


import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.log("❌ Some error occurred while connecting to database:", err));

app.listen(process.env.PORT, () => {
    console.log(`🚀 SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
