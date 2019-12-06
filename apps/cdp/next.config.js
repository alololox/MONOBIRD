module.exports = {
  assetPrefix: process.env.ASSET_PREFIX || "",
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
};
