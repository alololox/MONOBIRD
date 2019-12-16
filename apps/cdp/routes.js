const routes = require("next-routes")();

module.exports = routes;
routes.add("index", "/:market/:country/:language/c/:slug*");

