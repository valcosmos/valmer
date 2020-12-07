const { ipcRenderer } = require('electron');
window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('message', 'hello from render');
  ipcRenderer.on('reply', (event, arg) => {
    document.getElementById('message').innerHTML = arg;
    console.log(document.getElementById('message'));
  });
});
