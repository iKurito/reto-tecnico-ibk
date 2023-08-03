const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        apiUrl: JSON.stringify(process.env.API_URL),
        showCommits: JSON.stringify(process.env.SHOW_COMMITS),
      },
    }),
  ],
};
