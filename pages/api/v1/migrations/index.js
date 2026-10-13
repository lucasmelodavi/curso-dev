import MigrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migrations(request, response){
  if (request.method !== "GET" && request.method !== "POST") {
    return response.status(405).json({
      error: `Method "${request.method}" not allowed`,
    });
  }
  
  let dbClient;

  try {
    dbClient = await database.getNewClient();

    const migrations = await MigrationRunner({
      dbClient,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
      dryRun: request.method ==="GET",
    });

    if(request.method === "POST" && migrations.length > 0) {
      return response.status(201).json(migrations);
    }
    return response.status(200).json(migrations);
  }finally{
    await dbClient?.end();
  }

}