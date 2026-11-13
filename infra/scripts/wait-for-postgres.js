const { exec } = require("node:child_process")

function checkPostgres(){
    process.stdout.write(".");
    exec ("docker exec postgres-dev pg_isready --host localhost", handleReturn);

    function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
        checkPostgres();
            return;
        }
        
        console.log(" 🟢 Postgres está pronto e aceitando conexões!")
    }

}

console.log("\n\n🔴Esperando Postgres aceitar conexães");
checkPostgres();