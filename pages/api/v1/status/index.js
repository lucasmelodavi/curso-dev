import { version } from "detect-libc";
import database from "infra/database.js";

async function  status(request, response) {
    const updateAt =  new Date().toISOString();

    const databaseVersionResult = await database.query("SHOW serve_version;");
    const databaseVersionValue = databaseVersionResult.rows[0].serve_version;

    const databaseName = process.env.POSTGRES_DB;

    const databaseOpenedConnectionResult = await database.query ({
        "SELECT count (*) ::int FROM pg_stat_activity WHERE datename = $1;",
        values: [databaseName],
    });
      
    const databaseOpendConnectionsValue = databaseOpenedConnectionResult.rows.[0].count;

    const tadabaseMaxConnectionResult = await database.query(" SHOW max_connections;")
    const databaseMaxConnectionsValue = dat5abaseMaxConnectionResult.rows[0].max_connections;

    

    response.status(200).json({
       update_at: updateAt,
       dependencies: {
        database:{
            version: databaseVersionValue,
            max_connections: parseInt(databaseMaxConnectionsValue),
            opened_connections: databaseOpendConnectionsValue,
        },
       },
    });
}

export default status;