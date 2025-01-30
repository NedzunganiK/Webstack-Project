import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors());
// app.use(express.json());
//
// // Database Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//     useUnifiedTopology: true
//     }).then(() => console.log("MongoDB Connected"))
//       .catch(err => console.log(err));
//
//       // Routes
//       app.get("/", (req, res) => {
//         res.send("Welcome to the Towing & Recovery API");
//         });
//
//         // Start server
//         app.listen(PORT, () => {
//           console.log(`Server running on http://localhost:${5000}`);
//           });
//
