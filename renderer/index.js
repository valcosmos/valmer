const { ipcRenderer } = require('electron');
const { $ } = require('./helper');
$('add-music-button').addEventListener('click', () => {
  ipcRenderer.send('add-music-window');
});
