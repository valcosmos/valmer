const { ipcRenderer } = require('electron');

document.getElementById('add-music-button').addEventListener('click', () => {
  ipcRenderer.send('add-music-window');
});
