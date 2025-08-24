import {app, BrowserWindow} from "electron/main";
import path from "path";

function createWindow() {
	const window = new BrowserWindow({
		width: 900,
		height: 700,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			webviewTag: true
		}

	})

	window.loadURL("https://nitify-frontend.vercel.app/signin");
}


app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
