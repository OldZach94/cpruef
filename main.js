const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

// Daten bewusst neben der App speichern, damit die Anwendung im OP portable nutzbar bleibt.
function configurePortableDataPath() {
  const baseDir = app.isPackaged ? path.dirname(app.getPath('exe')) : __dirname;
  const dataDir = path.join(baseDir, 'daten');
  try {
    fs.mkdirSync(dataDir, { recursive: true });
    app.setPath('userData', dataDir);
  } catch (error) {
    console.error('Konnte portablen Datenordner nicht anlegen:', error);
  }
}

configurePortableDataPath();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1180,
    minHeight: 760,
    title: 'C-Prüfung',
    backgroundColor: '#eef7fb',
    icon: path.join(__dirname, 'assets', 'c-pruefung.ico'),
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'app', 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize();
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
