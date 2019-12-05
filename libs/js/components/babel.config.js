module.exports = {
  presets: [["@babel/preset-env"], "@babel/preset-react"],
  sourceType: "unambiguous",
  env: {
    test: {
      presets: [["@babel/preset-env"], "@babel/preset-react"],
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }
  }
};

console.log("hello");
