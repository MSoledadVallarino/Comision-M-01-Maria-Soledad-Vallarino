import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";


const app = express();


app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

const port = 3000

app.listen(port, () => {
  console.log(`server on port htpp://localhost:${port}`);
});