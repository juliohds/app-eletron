const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    icon: __dirname + '/assets/icons/png/zoe_icon.png'
  })

  win.setIcon(__dirname + '/assets/icons/png/zoe_icon.png')


  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)