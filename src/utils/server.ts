import express, { Express, Request, Response } from "express";
import fileUpload from "express-fileupload";
import "dotenv/config";
import "@/infrastructure/logger";

import {
  corsMiddleware,
  authMiddleware,
  notFoundMiddleware,
} from "@/middlewares";
import { router } from "@/routes";

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
    express.urlencoded({ limit: "10mb", extended: true }),
    fileUpload(),
    corsMiddleware,
    authMiddleware,
    router,
    notFoundMiddleware
  );

  return app;
}

const app = createServer();
export default app;
