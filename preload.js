const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('cPruefungApp', {
  platform: process.platform,
  version: '1.0.0'
});
