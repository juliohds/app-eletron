const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');
function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1200,
    height: 1200,
    webPreferences: {
      nodeIntegration: true
    },
  })
  const iconPath = path.join(__dirname, 'assets/iconTemplate.png');
  
  tray = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)

  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)



