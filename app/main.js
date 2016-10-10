import { app, BrowserWindow } from 'electron';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1280, height: 854 });

  mainWindow.setMenu(null);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
