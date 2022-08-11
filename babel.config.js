/* module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
}; */

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    // '@babel/plugin-transform-runtime',
  ],
};
