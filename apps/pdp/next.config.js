const withTM = require("next-transpile-modules");

let config = {
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
};

config = withTM({
  ...config,
  transpileModules: ["monobird-test-components"]
});
module.exports = config;
