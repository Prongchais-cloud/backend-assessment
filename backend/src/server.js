import express from "express";
import { connectDB } from "./config/mongodb.js";
import { router as apiRoutes } from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use("/api", apiRoutes)

// Central Error Handle
app.use((err, req, res, next) => {
    return res.status(500).json({
        error: "Something went wrong with the server...",
        message: err.message,
    });
});

const PORT = 3001;

async function start() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🆗 Server is running on PORT:${PORT}`);
        })
    } catch (error) {
        console.error("❎ Failed to connect to Database: ", error.message);
        process.exit(1);
    }
}

start();