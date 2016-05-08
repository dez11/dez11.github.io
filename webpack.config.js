module.exports = {
  // 入出力設定
  // entry: "./src/app.js",     // ビルド起点のファイル
  output: {
    // path: __dirname + '/dist',
    // path: './dist',      ★これはエラー
    filename: "app.js"
  },

  // 開発ツール設定
  //devtool: 'source-map',

  // 監視設定
  watch: true,

  // 変換設定（メイン）
  module: {
    loaders: [
      {
        test: /\.js$/,            // ビルド対象
        exclude: /node_modules/,  // ビルド対象外
        loader:"babel-loader",    // 適用するloader
        query: {                  // es2015の設定
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  }
};