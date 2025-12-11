import express from "express";
import logger from "../logger.js";
import morgan from "morgan";
import cors from "cors";
import healthCheckRoute from "./routes/healthCheck.route.js"
import tasksRoute from "./routes/tasks.routes.js"

const app = express();
const morganFormat = ":method :url :status :response-time ms";

app.use(express.json());
app.use(cors(
  {
    origin:"http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization","Access-Control-Allow-Origin"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }
));
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);


app.use("/api/v1/healthCheck",healthCheckRoute)
app.use("/api/v1/tasks",tasksRoute)


export default app;
