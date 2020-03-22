const { app, BrowserWindow, Notification } = require('electron');

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1200,
    height: 1200,
    webPreferences: {
      nodeIntegration: true
    },
  })

  let myNotification = new Notification({
    title: "Bem-vindo",
    body: "Salve quebrada"
  });

  myNotification.show();
  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)