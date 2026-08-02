const { after, before, test } = require("node:test");
const assert = require("node:assert/strict");
const { once } = require("node:events");

process.env.EMAIL_USER = "";
process.env.EMAIL_PASS = "";

const app = require("./index");

let server;
let baseUrl;

before(async () => {
  server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("health endpoint returns JSON with hardened headers", async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.status, "ok");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(
    response.headers.get("x-robots-tag"),
    "noindex, nofollow, noarchive",
  );
  assert.equal(response.headers.get("x-powered-by"), null);
});

test("unknown API routes return a JSON 404", async () => {
  const response = await fetch(`${baseUrl}/api/not-a-route`);
  const body = await response.json();

  assert.equal(response.status, 404);
  assert.equal(body.message, "Route not found");
});

test("contact endpoint rejects invalid fields before mail delivery", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: "Test",
      lastName: "User",
      email: "not-an-email",
      message: "Hello",
    }),
  });

  assert.equal(response.status, 400);
});

test("contact endpoint fails closed when SMTP is not configured", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      message: "This request must not send email during tests.",
    }),
  });

  assert.equal(response.status, 503);
});

test("oversized JSON bodies return 413 without a stack trace", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "x".repeat(17 * 1024) }),
  });
  const body = await response.json();

  assert.equal(response.status, 413);
  assert.deepEqual(body, {
    status: "error",
    message: "Request body is too large",
  });
});
