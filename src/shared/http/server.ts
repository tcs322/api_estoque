import express from "express";
import cors from "cors";
import routes from "./routes";

const PORT = 3500;

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
