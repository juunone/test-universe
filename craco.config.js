// craco.config.js
const emotionPresetOptions = {
  presets: [
    "@emotion/babel-preset-css-prop",
    {
      autoLabel: process.env.NODE_ENV !== "production",
      labelFormat: "[local]",
      useBuiltIns: false,
      throwIfNamespace: true,
      sourceMap: true
    }
  ]
};

const emotionBabelPreset = require("@emotion/babel-preset-css-prop").default(
  undefined,
  emotionPresetOptions
);

module.exports = {
  babel: {
    plugins: [...emotionBabelPreset.plugins]
  }
};
