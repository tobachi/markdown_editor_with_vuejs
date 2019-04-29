'use strict';

// 必要なモジュールを読み込み
var app = require('app');
var BrowserWindow = require('browser-window');

// エラーをターミナルに出力
require('crash-reporter').start();

var mainWindow = null;

// アプリを閉じた時の処理
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// アプリが起動した時の処理
app.on('ready', function() {

  // アプリ起動時の横幅・高さを設定
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  });

  // アプリ本体を読み込み
  mainWindow.loadUrl('file://'+ __dirname +'/app/index.html');

  // アプリを閉じた時に初期化
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});