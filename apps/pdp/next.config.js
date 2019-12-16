const withTM = require("next-transpile-modules");

let config = {
  assetPrefix: process.env.ASSET_PREFIX || "",
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
