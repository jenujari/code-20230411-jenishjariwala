// const sync_relations = require("./db/models/rel_sync.js");
const sync_relations = require("./db/models/rel_sync.js");
const server = require("./server.js");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

beforeAll(async () => {
  server.once("listening",async () => {
    await sync_relations();
  })
});

describe("Endpoints", () => {
  it("GET /cron should set health vitals for all users", async () => {
    // await sync_relations();
    const res = await requestWithSupertest.get("/cron");
    expect(res.status).toEqual(200);
  });

  it('GET /usershealth should show all users health vitals', async () => {
    await sync_relations();
    const res = await requestWithSupertest.get('/usershealth');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
  });
});
