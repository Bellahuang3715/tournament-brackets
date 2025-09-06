import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.js",
    external: [/^react($|\/)/, /^react-dom($|\/)/],
    plugins: [
      peerDepsExternal(),
      resolve({ extensions: [".mjs", ".js", ".jsx", ".json"] }),
      commonjs(),
      postcss({
        modules: true,     // import stylesheet.module.css and use `styles.*`
        extract: true,     // emits dist/style.css
        minimize: true,
      }),
      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".jsx", ".mjs"],
        exclude: /node_modules/,
        presets: [["@babel/preset-react", { runtime: "automatic" }]],
      }),
    ],
    output: [
      // ESM code-split directory (needed for React.lazy chunks)
      { dir: "dist/esm", format: "esm", sourcemap: true },

      // CJS single file: inline all dynamic imports here
      {
        file: "dist/index.cjs",
        format: "cjs",
        sourcemap: true,
        exports: "named",
        inlineDynamicImports: true,
      },
    ],
  },
];
