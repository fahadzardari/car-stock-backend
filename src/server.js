import { log } from "console";
import app from "./app.js";
import { PORT } from "./config/envVariables.js";

app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
});