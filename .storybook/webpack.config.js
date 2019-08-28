// 1. import default from the plugin module
const createStyledComponentsTransformer = require("typescript-plugin-styled-components")
  .default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: "./.storybook/tsconfig.json",
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer]
          })
        }
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
