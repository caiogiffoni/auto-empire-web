import express from "express";
import "express-async-errors";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";

let cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

appRoutes(app);

app.use(errorMiddleware);

app.listen(3000);
