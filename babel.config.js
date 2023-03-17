module.exports = function(api) {
  api.cache(true);

  const presets = ["next/babel", "@babel/preset-react"];
  const plugins = ["@babel/plugin-transform-modules-commonjs"];

  return {
    presets,
    plugins
  };
}