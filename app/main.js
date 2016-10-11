import { app, BrowserWindow } from 'electron';

let mainWindow;
let splashWindow;

app.on('ready', () => startApp());
app.on('window-all-closed', () => app.quit());

app.on('activate', () => {
  if (mainWindow === null) {
    startApp();
  }
});

function startApp() {
  createSplashWindow();
  createMainWindow();
}

function createSplashWindow() {
  const width = 576;
  const height = 432;

  splashWindow = new BrowserWindow({
    width,
    height,
    minWidth: width,
    minHeight: height,
    maxWidth: width,
    maxHeight: height,
    resizable: false,
    frame: false,
    center: true
  });

  splashWindow.setMenu(null);
  splashWindow.loadURL(`file://${__dirname}/splash-screen.html`);
  splashWindow.webContents.openDevTools();

  splashWindow.on('closed', () => {
    splashWindow = null;
  });
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 854,
    show: false,
    center: true
  });

  mainWindow.setMenu(null);
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;

    // Closing main window is like closing entire app
    app.close();
  });
}
