'use strict';

// 必要なモジュールを読み込み
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const fs = require("fs");

let mainWindow;

// アプリを閉じた時の処理
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// アプリが起動した時の処理
app.on('ready', () => {

  // アプリ起動時の横幅・高さを設定
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 800
  });

  // アプリ本体を読み込み
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/app/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  // アプリを閉じた時に初期化
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});