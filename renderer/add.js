const { ipcRenderer } = require('electron');
const { $ } = require('./helper');
$('select-music').addEventListener('click', () => {
  ipcRenderer.send('open-music-file');
  // alert('aaa')
});
