import app from "./app.js";
import { PORT } from "./config/envVariables.js";

app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
});