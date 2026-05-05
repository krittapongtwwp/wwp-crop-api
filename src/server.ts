import { createApp } from "@/app.ts";

async function startServer() {
  const app = await createApp();
  const PORT = Number(process.env.PORT) || 3000;

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SERVER_RUNNING_ON_PORT_${PORT}`);
  });
}

startServer().catch(err => {
  console.error('SERVER_START_ERROR:', err);
  process.exit(1);
});
