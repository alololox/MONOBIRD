import pkg from "./package.json";
import multiEntry from "rollup-plugin-multi-entry";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default [
  {
    input: ["index.js"],
    external: [
      "ms",
      "react",
      "react-dom",
      "prop-types",
      "@arcteryx/arcteryx-foundation-ui"
    ],
    output: [{ file: pkg.main, format: "es" }],
    plugins: [
      multiEntry(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
        presets: ["@babel/env"]
      })
    ]
  }
];
