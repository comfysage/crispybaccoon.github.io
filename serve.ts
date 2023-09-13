import Server from "lume/core/server.ts";

const PORT = 8000;

const server = new Server({
  port: PORT,
  root: `${Deno.cwd()}/_site`,
});

server.start();

console.log(`Listening on http://localhost:${PORT}`);
