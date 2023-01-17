const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const fsFunctions = require('./fs-functions');
const fileManager = require('./file-manager');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    );

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
    if (mainWindow === null) createWindow();
});

const {ipcRenderer} = require("electron");

// profile-button event listener
document.getElementById("profile-button").addEventListener("click", () => {
    ipcRenderer.send("profile-button-clicked");
});

// new-chat-button event listener
document.getElementById("new-chat-button").addEventListener("click", () => {
    ipcRenderer.send("new-chat-button-clicked");
});

// clear-chats-button event listener
document.getElementById("clear-chats-button").addEventListener("click", () => {
    ipcRenderer.send("clear-chats-button-clicked");
});

// dark-mode-button event listener
document.getElementById("dark-mode-button").addEventListener("click", () => {
    ipcRenderer.send("dark-mode-button-clicked");
});

// send-chat-button event listener
document.getElementById("send-chat-button").addEventListener("click", () => {
    ipcRenderer.send("send-chat-button-clicked");
});

// rename-chat-button event listener
document.querySelectorAll("#rename-chat-button").forEach(renameButton => {
    renameButton.addEventListener("click", () => {
        ipcRenderer.send("rename-chat-button-clicked", renameButton.parentElement.parentElement.querySelector(".chat-history-item-name").innerText);
    });
});

// delete-chat-button event listener
document.querySelectorAll("#delete-chat-button").forEach(deleteButton => {
    deleteButton.addEventListener("click", () => {
        ipcRenderer.send("delete-chat-button-clicked", deleteButton.parentElement.parentElement.querySelector(".chat-history-item-name").innerText);
    });
});
const {ipcRenderer} = require("electron");

// create-file-button event listener
document.getElementById("create-file-button").addEventListener("click", () => {
    ipcRenderer.send("create-file-button-clicked");
});

// save-file-button event listener
document.getElementById("save-file-button").addEventListener("click", () => {
    ipcRenderer.send("save-file-button-clicked");
});

// delete-file-button event listener
document.getElementById("delete-file-button").addEventListener("click", () => {
    ipcRenderer.send("delete-file-button-clicked");
});

