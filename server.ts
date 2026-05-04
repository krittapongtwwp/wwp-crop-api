import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { createApp } from "./server/app.ts";

console.log('SERVER_TS_LOADED_V102');

async function startServer() {
  const app = await createApp();
  const PORT = 3000;

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use((req, res, next) => {
      console.log(`VITE_MIDDLEWARE_HIT: ${req.url}`);
      next();
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SERVER_RUNNING_UNIQUE_V99_ON_PORT_${PORT}`);
  });
}

startServer().catch(err => {
  console.error('SERVER_START_ERROR:', err);
  process.exit(1);
});
