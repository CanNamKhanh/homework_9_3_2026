import express from "express";
import indexRoute from "./routes/index.route";
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRoute);
app.listen(PORT, () => {
    console.log(`Start server: http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map