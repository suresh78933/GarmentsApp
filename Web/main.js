const electron = require('electron');
const {app, BrowserWindow ,ipcMain,remote} = electron;
const path = require('path');
const url = require('url');
let win ;

function createWindow () {  

	win = new BrowserWindow([electron.screen.getPrimaryDisplay().size,{webPreferences:{ plugins:true }}]) 
	// load the dist folder from Angular
	win.loadURL(url.format({ pathname: path.join(__dirname, 'dist/GarmApp/index.html'), protocol: 'file:', slashes: true })) 
	// Open the DevTools optionally: 
	// win.webContents.openDevTools() 
	let windPrint=null;


    ipcMain.on('openPrintBill', () => {  		
  		windPrint = new BrowserWindow([electron.screen.getPrimaryDisplay().workAreaSize,{webPreferences:{	plugins:true}}]);
		windPrint.loadURL(url.format({ pathname: path.join(__dirname, 'dist/GarmApp/index.html'), protocol: 'file:', slashes: true }))      
    });
    ipcMain.on('printBill', () => {   		
        
        windPrint.webContents.print({silent: false, printBackground: false, deviceName: ''},function(){        	
			//localStorage
        	windPrint=null;
        })        
    })
    win.on('closed', () => { win = null }) 
} 

app.on('ready', createWindow) 
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit() } }) 
app.on('activate', () => { if (win === null) { createWindow() } })