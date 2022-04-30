import { app } from ".";
import swaggerUI from "swagger-ui-express"

import swaggerFile from "./swagger.json"

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running!"));
