
// Because this file is specified as the `main` in package.json
// this file will be the entry point for Electron App
// when `npm start` is called.

const { app, BrowserWindow } = require('electron');

app.on('ready', function() {
  console.log('Electron has started');
  // Launch a window and load index.html
  let window = new BrowserWindow({width: 800, height: 600});
  window.loadFile('./index.html');

  window.on('closed', function() {
    window = null;
  });

  // For Development Only
  window.webContents.openDevTools();
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});