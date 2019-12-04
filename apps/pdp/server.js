const express = require("express");
const next = require("next");
const cookiesMiddleware = require("universal-cookie-express");
const compression = require("compression");
const routes = require("./routes");

const nextApp = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(nextApp);
const app = express();

let port = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  express()
    .use(cookiesMiddleware())
    .use(compression())
    .use(handler)
    .listen(port);

  console.log(`Server running at http://127.0.0.1:${port}/`);
});

module.exports = app;
