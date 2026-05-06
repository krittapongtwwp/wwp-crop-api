import dotenv from "dotenv"
dotenv.config()

import express from "express"
import app from "@/app.ts"

const PORT = Number(process.env.PORT) || 3000;

async function loadScalarExpressAPIReference(): Promise<typeof import('@scalar/express-api-reference')> {
	return new Function('return import("@scalar/express-api-reference")')() as Promise<
    typeof import('@scalar/express-api-reference')
  >
}
async function bootstrap(): Promise<void>{
	const { apiReference } = await loadScalarExpressAPIReference();

	app.use(
    '/docs',
    apiReference({
      url: '/openapi.json',
      theme: 'elysiajs',
      pageTitle: 'API Documentation'
    })
  )

	app.use((req: express.Request, res: express.Response) => {
    res.status(404).json({ message: `Not Found - ${req.url}` })
  })

	const server = app.listen(PORT, () => {
		console.log(
				`Server ${process.env.APP} is running on http://localhost:${PORT} 🚀 \nView API documentation at http://localhost:${PORT}/docs 📖`,
		);
	});

	const shutdown = (signal: string) => {
		console.log(`\n${signal} received. Shutting down gracefully...`);
		server.close(() => {
      console.log('Server closed.')
      process.exit(0)
    })
	};

	process.on("SIGTERM", () => shutdown("SIGTERM"));
	process.on("SIGINT", () => shutdown("SIGINT"));
}

bootstrap().catch((err) => {
    console.error(err);
    process.exit(1);
});