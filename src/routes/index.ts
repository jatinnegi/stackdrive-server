import { Request, Response, Router } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

import { auth } from "./auth";
import { files } from "./files";

const router = Router();

router.get("/health-check", (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: ReasonPhrases.OK });
});

const routes: {
  [key: string]: (router: Router) => void;
} = { auth, files };

for (const route in routes) {
  routes[route](router);
}

export { router };
