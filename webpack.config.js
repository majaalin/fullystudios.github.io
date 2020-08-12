const path = require("path");

module.exports = {
  mode: "production",
  watch: false,
  entry: {
    app: path.join(__dirname, 'src/_js', 'app'),
    news_svenskaskolan: path.join(__dirname, 'src/_js', 'news/svenskaskolan'),
    'first-news-flash': path.join(__dirname, 'src/_js', 'news/first-news-flash.js'),
    'summer-2018': path.join(__dirname, 'src/_js', 'news/summer-2018.js'),
    'qgroup': path.join(__dirname, 'src/_js', 'cases/qgroup.js'),
    loadinghero: path.join(__dirname, 'src/_js', 'components/Loadinghero'),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "src/assets/bundles"),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
};
