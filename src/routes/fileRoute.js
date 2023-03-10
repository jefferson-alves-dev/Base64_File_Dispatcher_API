const route = require('express').Router();
const path = require('path');

const {
  controllerMp3,
  controllerWav,
  controllerPng,
  controllerJpeg,
  controllerRandomImage,
  controllerIso,
  controllerZip,
  controller7z,
  controllerXml,
  controllerOds,
  controllerXls,
  controllerXlsx,
  controllerTxt,
  controllerCsv,
  controllerMp4,
  controllerOdt,
  controllerDoc,
  controllerDocx,
  controllerHtml,
  controllerPot,
  controllerOdp,
  controllerPttx,
  controllerPpsx,
  controllerPdf,
  controllerHtm,
  controllerGif,
  controllerBmp,
  controllerRtf,
  controllerOtt,
  controllerTtf,
  controllerWoff,
  controllerOtf,
  controllerEpub,
  controllerCss,
  controllerBat,
  controllerJs,
  controllerJson,
  controllerPhp,
  controllerSql,
  controllerYaml,
  controllerMegavideo,
} = require('../controllers/fileController');

route.get('/mp3', controllerMp3);
route.get('/wav', controllerWav);
route.get('/png', controllerPng);
route.get('/jpeg', controllerJpeg);
route.get('/image/random', controllerRandomImage);
route.get('/iso', controllerIso);
route.get('/zip', controllerZip);
route.get('/7z', controller7z);
route.get('/xml', controllerXml);
route.get('/ods', controllerOds);
route.get('/xls', controllerXls);
route.get('/xlsx', controllerXlsx);
route.get('/txt', controllerTxt);
route.get('/csv', controllerCsv);
route.get('/mp4', controllerMp4);
route.get('/odt', controllerOdt);
route.get('/doc', controllerDoc);
route.get('/docx', controllerDocx);
route.get('/html', controllerHtml);
route.get('/pot', controllerPot);
route.get('/odp', controllerOdp);
route.get('/pptx', controllerPttx);
route.get('/ppsx', controllerPpsx);
route.get('/pdf', controllerPdf);
route.get('/htm', controllerHtm);
route.get('/gif', controllerGif);
route.get('/bmp', controllerBmp);
route.get('/rtf', controllerRtf);
route.get('/ott', controllerOtt);
route.get('/ttf', controllerTtf);
route.get('/woff', controllerWoff);
route.get('/otf', controllerOtf);
route.get('/epub', controllerEpub);
route.get('/css', controllerCss);
route.get('/bat', controllerBat);
route.get('/js', controllerJs);
route.get('/json', controllerJson);
route.get('/php', controllerPhp);
route.get('/sql', controllerSql);
route.get('/yaml', controllerYaml);

route.post('/sendBase64', (req, res) => {
  const fs = require('fs');
  const mime = require('mime');

  const base64String = String(req.body.stringBase64);
  const extension = mime.getExtension(req.body.extension);
  const directorySaveFile = path.resolve(
    __dirname,
    '..',
    '..',
    'public',
    'uploads'
  );

  function convertAndSave(base64, directory) {
    const buffer = Buffer.from(base64, 'base64');
    const filename = `${Date.now()}.${extension}`;
    fs.writeFileSync(`${directory}/${filename}`, buffer);
  }

  convertAndSave(base64String, directorySaveFile);

  return res.status(201);
});

module.exports = route;
