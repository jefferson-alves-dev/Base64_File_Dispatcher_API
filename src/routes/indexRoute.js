const route = require('express').Router();
const fs = require('fs');

route.get('/', (req, res) => {
  console.log(process.env);
  // fs.writeFileSync('./teste.json', String(JSON.stringify(process)), { encoding: 'utf-8' });
  res.json({ message: 'index' });
});

route.get('/types', (req, res) => {
  res.json({
    types: [
      'mp3',
      'wav',
      'png',
      'jpeg',
      'iso',
      'zip',
      '7z',
      'xml',
      'ods',
      'xls',
      'xlsx',
      'txt',
      'csv',
      'mp4',
      'odt',
      'doc',
      'docx',
      'html',
      'pot',
      'odp',
      'pptx',
      'ppsx',
      'pdf',
      'htm',
      'gif',
      'bmp',
      'rtf',
      'ott',
      'ttf',
      'woff',
      'otf',
      'epub',
      'css',
      'bat',
      'js',
      'json',
      'php',
      'sql',
      'yaml',
    ],
  });
});

module.exports = route;
