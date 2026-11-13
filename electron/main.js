const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function create() {
  const w = new BrowserWindow({ width: 1100, height: 800, minWidth: 380, title: 'GoalPay Tracker', webPreferences: { contextIsolation: true } });
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
