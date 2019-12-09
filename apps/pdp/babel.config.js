module.exports = {
  presets: [["@babel/preset-env"], "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-proposal-class-properties",
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }
  }
};
