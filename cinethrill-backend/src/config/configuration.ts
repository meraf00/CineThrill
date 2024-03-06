import z from 'zod';

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

export interface CineThrillConfiguration {
  port: number;
  database: DatabaseConfig;
  jwt: JwtConfig;
}

const envSchema = z.object({
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.string().transform((val) => parseInt(val, 10)),
  PORT: z.string().transform((val) => parseInt(val, 10)),
  JWT_SECRET: z.string(),
  JWT_EXPIRATION: z.string(),
});

export default () => {
  const env = process.env;

  const parsedEnv = envSchema.parse(env);

  return {
    port: parsedEnv.PORT || 3000,
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
  };
};
