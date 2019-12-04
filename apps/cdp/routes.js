const routes = require("next-routes")();

module.exports = routes;
routes.add("index", "/c/:slug*");
