const { app, BrowserWindow } = require('electron');

app.on('ready', function() {
  console.log('app reeeeeeeead');
  let window = new BrowserWindow({width: 800, height: 600});
  window.loadFile('./index.html');
  window.webContents.openDevTools();

  window.on('closed', function() {
    window = null;
  });
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});