const { app, BrowserWindow, screen } = require("electron");

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const win = new BrowserWindow({
        width: 180,
        height: 180,
        frame: false,
        transparent: true,
        backgroundColor: "#00000000",
        alwaysOnTop: true,
        resizable: false,
        hasShadow: false,
        webPreferences: {
            preload: __dirname + "/preload.js"
        }
    });

    win.setPosition(width - 180, height - 180);

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);