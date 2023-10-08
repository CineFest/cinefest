declare module "~/env.mjs" {
  interface Environment {
    MONGODB_URL: string;
    // Add other properties as needed
  }

  const env: Environment;
  export = env;
}
