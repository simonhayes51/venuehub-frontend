import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");

const app = express();

app.use(express.static(distDir, {
  index: "index.html",
  setHeaders(res, filePath) {
    if (filePath.endsWith(".html")) res.setHeader("Cache-Control", "no-cache");
    else res.setHeader("Cache-Control", "public, max-age=604800, immutable");
  }
}));

app.get("*", (_req, res) => res.sendFile(path.join(distDir, "index.html")));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`✅ Serving dist on :${port}`));
