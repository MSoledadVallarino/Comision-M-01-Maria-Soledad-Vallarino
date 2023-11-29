import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

//variables
import { config } from "./src/settings/config.js";
import { startConnection } from "./src/settings/database.js";

import { postRouter } from "./src/routes/post.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());

//routes

app.listen(config.port, async () => {
  await startConnection({ mongo: config.mongo, database: config.database });
  console.log("server on port htpp://localhost:" + config.port);
});
