import { z } from 'zod';

export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
}

export interface JwtConfig {
  secret: string;
  expiration: string;
}

export interface CloundinaryConfig {
  name: string;
  apiKey: string;
  apiSecret: string;
  folder: string;
}

export interface CineThrillConfiguration {
  port: number;
  database: DatabaseConfig;
  jwt: JwtConfig;
}

const envSchema = z
  .object({
    //   Server
    PORT: z.string().transform((val) => parseInt(val, 10)),

    //   Database
    DATABASE_USERNAME: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_NAME: z.string(),
    DATABASE_HOST: z.string(),
    DATABASE_PORT: z.string().transform((val) => parseInt(val, 10)),

    //   JWT
    JWT_SECRET: z.string(),
    JWT_EXPIRATION: z.string(),

    //   Cloundinary
    CLOUDINARY_NAME: z.string(),
    CLOUDINARY_API_KEY: z.string(),
    CLOUDINARY_API_SECRET: z.string(),
    CLOUDINARY_FOLDER: z.string(),
  })
  .required();

export default () => {
  const env = process.env;

  const parsedEnv = envSchema.parse(env);

  return {
    port: parsedEnv.PORT,
    database: {
      username: parsedEnv.DATABASE_USERNAME,
      password: parsedEnv.DATABASE_PASSWORD,
      database: parsedEnv.DATABASE_NAME,
      host: parsedEnv.DATABASE_HOST,
      port: parsedEnv.DATABASE_PORT,
    },
    jwt: {
      secret: parsedEnv.JWT_SECRET,
      expiration: parsedEnv.JWT_EXPIRATION,
    },
    cloudinary: {
      name: parsedEnv.CLOUDINARY_NAME,
      apiKey: parsedEnv.CLOUDINARY_API_KEY,
      apiSecret: parsedEnv.CLOUDINARY_API_SECRET,
      folder: parsedEnv.CLOUDINARY_FOLDER,
    },
  };
};
