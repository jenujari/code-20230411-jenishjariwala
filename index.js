const server = require("./server");
const sync_relations = require("./db/models/rel_sync");
const dbConn = require("./dbConn");

const port = 5000;

const server_instance = server.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

server_instance.once("listening",async() => {
  await dbConn.testConn();
  await sync_relations();
});