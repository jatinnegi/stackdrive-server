export declare global {
  namespace Express {
    interface Request {
      context: Context;
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      APP_PORT: number;
      APP_URL: string;
      CLIENT_URL: string;
      MONGODB_URI: string;
      REDIS_URI: string;
      REDIS_PASSWORD: string;
      REDIS_PORT: number;
      REDIS_TOKEN_EXPIRATION: number;
      JWT_SECRET: string;
      JWT_EXPIRATION: string;
      STORAGE_PATH: string;
      API_LOG_FILENAME: string;
    }
  }
}
