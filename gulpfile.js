var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    webserver = require('gulp-webserver');

// 定数定義
const SRC = './src',
      DEST = './dist';

// js変換タスク
gulp.task('webpack', () => {
  gulp.src(`${SRC}/*.js`)
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(DEST));
});

// Webサーバ
gulp.task('webserver', () => {
  gulp.src(DEST)      // Webサーバーのルートディレクトリ
    .pipe(webserver({
      livereload: true, // ライブラリロードの有効化
      open: true        // タスク実行と同時にページを開く
    }));
});

// gulpコマンドの実行タスク
gulp.task('default', ['webpack', 'webserver']);
