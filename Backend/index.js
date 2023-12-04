import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

//variables
import { config } from "./src/settings/config.js";
import { startConnection } from "./src/settings/database.js";

import { authRouter } from "./src/routes/auth.routes.js";
import { commentRouter } from "./src/routes/comment.routes,js";
import { postRouter } from "./src/routes/post.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/user", authRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

app.listen(config.port, async () => {
  await startConnection({ uri: config.mongo, database: config.database });
  console.log("server on port htpp://localhost:" + config.port);
});
