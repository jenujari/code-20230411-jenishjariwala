const sync_relations = require("./db/models/rel_sync.js");
const server = require("./server.js");
const supertest = require("supertest");

const requestWithSupertest = supertest(server);

beforeAll(async () => {
  // sync models relation ships while app start listinging for first time.
  server.once("listening",async () => {
    await sync_relations();
  })
});

// Test suite for endpoints
describe("Endpoints", () => {

  // Test case for GET /cron endpoint
  it("GET /cron should set health vitals for all users", async () => {
    // Send a GET request to the /cron endpoint using Supertest
    const res = await requestWithSupertest.get("/cron");
    // Expect the response status code to be 200
    expect(res.status).toEqual(200);
  });

  // Test case for GET /usershealth endpoint
  it('GET /usershealth should show all users health vitals', async () => {
    // Call sync_relations function to ensure data is synced
    await sync_relations();
    // Send a GET request to the /usershealth endpoint using Supertest
    const res = await requestWithSupertest.get('/usershealth');
    // Expect the response status code to be 200
    expect(res.status).toEqual(200);
    // Expect the response type to contain 'json'
    expect(res.type).toEqual(expect.stringContaining('json'));
  });
});