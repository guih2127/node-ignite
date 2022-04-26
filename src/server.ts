import express from "express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import swaggerUI from "swagger-ui-express";
import "./database";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

app.listen(3333, () => console.log("Server is running"));
