const express = require("express");
const next = require("next");
const log = require("./app/logger");
const router = require("./app/router");

// run export PORT=XYZW to set a port
const port = parseInt(process.env.PORT, 10) || 3000;

// setup app for nextjs SSR
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/api", router);

  // Handle any non-custom routes via the pages directory 
  // in typical next.js fashion
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    log.info(`Ready on http://localhost:${port}`);
  });
});
