import express, { Express, Request, Response } from "express";
import "dotenv/config";

function createServer() {
  const app: Express = express();

  app.get("/", (_: Request, res: Response) => {
    res.send(`File uploading system: Typescript + Express`);
  });

  app.use(
    `/${process.env.STORAGE_PATH}`,
    express.static(process.env.STORAGE_PATH)
  );

  app.use(
    express.json({ limit: "10mb" }),
    express.urlencoded({ limit: "10mb", extended: true })
  );

  return app;
}

const app = createServer();
export default app;
