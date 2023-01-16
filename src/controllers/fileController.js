const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const { convertFileToBase64 } = require('../utils/utils');

exports.controllerMp3 = async (req, res) => {
  const base64 = await convertFileToBase64('mp3', 'mp3.mp3');
  if (!base64) {
    res.status(500).json({
      message:
        'An error occurred while generating the base64 of the mp3 file. Try again.',
    });
    return;
  }
  res.json({ fileType: '.mp3', base64String: base64 });
};

exports.controllerWav = async (req, res) => {
  const base64 = await convertFileToBase64('wav', 'wav.wav');
  if (!base64) {
    res.status(500).json({
      message:
        'An error occurred while generating the base64 of the wav file. Try again.',
    });
    return;
  }
  res.json({ fileType: '.wav', base64String: base64 });
};

exports.controllerPng = async (req, res) => {
  const base64 = await convertFileToBase64('png', 'png.png');
  res.json({ fileType: '.png', base64String: base64 });
};

exports.controllerJpeg = async (req, res) => {
  const base64 = await convertFileToBase64('jpeg', 'jpeg.jpeg');
  res.json({ fileType: '.jpeg', base64String: base64 });
};

exports.controllerRandomImage = async (req, res) => {
  res
    .status(500)
    .json({ error: true, message: 'This endpoint is under maintenance.' });
};

exports.controllerIso = async (req, res) => {
  const base64 = await convertFileToBase64('iso', 'iso.iso');
  res.json({ fileType: '.iso', base64String: base64 });
};

exports.controllerZip = async (req, res) => {
  const base64 = await convertFileToBase64('zip', 'zip.zip');
  res.json({ fileType: '.zip', base64String: base64 });
};

exports.controller7z = async (req, res) => {
  const base64 = await convertFileToBase64('7z', '7z.7z');
  res.json({ fileType: '.7z', base64String: base64 });
};

exports.controllerXml = async (req, res) => {
  const base64 = await convertFileToBase64('xml', 'xml.xml');
  res.json({ fileType: '.xml', base64String: base64 });
};

exports.controllerOds = async (req, res) => {
  const base64 = await convertFileToBase64('ods', 'ods.ods');
  res.json({ fileType: '.ods', base64String: base64 });
};

exports.controllerXls = async (req, res) => {
  const base64 = await convertFileToBase64('xls', 'xls.xls');
  res.json({ fileType: '.xls', base64String: base64 });
};

exports.controllerXlsx = async (req, res) => {
  const base64 = await convertFileToBase64('xlsx', 'xlsx.xlsx');
  res.json({ fileType: '.xlsx', base64String: base64 });
};

exports.controllerTxt = async (req, res) => {
  const base64 = await convertFileToBase64('txt', 'txt.txt');
  res.json({ fileType: '.txt', base64String: base64 });
};

exports.controllerCsv = async (req, res) => {
  const base64 = await convertFileToBase64('csv', 'csv.csv');
  res.json({ fileType: '.csv', base64String: base64 });
};

exports.controllerMp4 = async (req, res) => {
  const base64 = await convertFileToBase64('mp4', 'mp4.mp4');
  res.json({ fileType: '.mp4', base64String: base64 });
};

exports.controllerOdt = async (req, res) => {
  const base64 = await convertFileToBase64('odt', 'odt.odt');
  res.json({ fileType: '.odt', base64String: base64 });
};

exports.controllerDoc = async (req, res) => {
  const base64 = await convertFileToBase64('doc', 'doc.doc');
  res.json({ fileType: '.doc', base64String: base64 });
};

exports.controllerDocx = async (req, res) => {
  const base64 = await convertFileToBase64('docx', 'docx.docx');
  res.json({ fileType: '.docx', base64String: base64 });
};

exports.controllerHtml = async (req, res) => {
  const base64 = await convertFileToBase64('html', 'html.html');
  res.json({ fileType: '.html', base64String: base64 });
};

exports.controllerPot = async (req, res) => {
  const base64 = await convertFileToBase64('pot', 'pot.pot');
  res.json({ fileType: '.pot', base64String: base64 });
};

exports.controllerOdp = async (req, res) => {
  const base64 = await convertFileToBase64('odp', 'odp.odp');
  res.json({ fileType: '.odp', base64String: base64 });
};

exports.controllerPttx = async (req, res) => {
  const base64 = await convertFileToBase64('pptx', 'pptx.pptx');
  res.json({ fileType: '.pptx', base64String: base64 });
};

exports.controllerPpsx = async (req, res) => {
  const base64 = await convertFileToBase64('ppsx', 'ppsx.ppsx');
  res.json({ fileType: '.ppsx', base64String: base64 });
};

exports.controllerPdf = async (req, res) => {
  const base64 = await convertFileToBase64('pdf', 'pdf.pdf');
  res.json({ fileType: '.pdf', base64String: base64 });
};

exports.controllerHtm = async (req, res) => {
  const base64 = await convertFileToBase64('htm', 'htm.htm');
  res.json({ fileType: '.htm', base64String: base64 });
};

exports.controllerGif = async (req, res) => {
  const base64 = await convertFileToBase64('gif', 'gif.gif');
  res.json({ fileType: '.gif', base64String: base64 });
};

exports.controllerBmp = async (req, res) => {
  const base64 = await convertFileToBase64('bmp', 'bmp.bmp');
  res.json({ fileType: '.bmp', base64String: base64 });
};

exports.controllerRtf = async (req, res) => {
  const base64 = await convertFileToBase64('rtf', 'rtf.rtf');
  res.json({ fileType: '.rtf', base64String: base64 });
};

exports.controllerOtt = async (req, res) => {
  const base64 = await convertFileToBase64('ott', 'ott.ott');
  res.json({ fileType: '.ott', base64String: base64 });
};

exports.controllerTtf = async (req, res) => {
  const base64 = await convertFileToBase64('ttf', 'ttf.ttf');
  res.json({ fileType: '.ttf', base64String: base64 });
};

exports.controllerWoff = async (req, res) => {
  const base64 = await convertFileToBase64('woff', 'woff.woff');
  res.json({ fileType: '.woff', base64String: base64 });
};

exports.controllerOtf = async (req, res) => {
  const base64 = await convertFileToBase64('otf', 'otf.otf');
  res.json({ fileType: '.otf', base64String: base64 });
};

exports.controllerEpub = async (req, res) => {
  const base64 = await convertFileToBase64('epub', 'epub.epub');
  res.json({ fileType: '.epub', base64String: base64 });
};

exports.controllerCss = async (req, res) => {
  const base64 = await convertFileToBase64('css', 'css.css');
  res.json({ fileType: '.css', base64String: base64 });
};

exports.controllerBat = async (req, res) => {
  const base64 = await convertFileToBase64('bat', 'bat.bat');
  res.json({ fileType: '.bat', base64String: base64 });
};

exports.controllerJs = async (req, res) => {
  const base64 = await convertFileToBase64('js', 'js.js');
  res.json({ fileType: '.js', base64String: base64 });
};

exports.controllerJson = async (req, res) => {
  const base64 = await convertFileToBase64('json', 'json.json');
  res.json({ fileType: '.json', base64String: base64 });
};

exports.controllerPhp = async (req, res) => {
  const base64 = await convertFileToBase64('php', 'php.php');
  res.json({ fileType: '.php', base64String: base64 });
};

exports.controllerSql = async (req, res) => {
  const base64 = await convertFileToBase64('sql', 'sql.sql');
  res.json({ fileType: '.sql', base64String: base64 });
};

exports.controllerYaml = async (req, res) => {
  const base64 = await convertFileToBase64('yaml', 'yaml.yaml');
  res.json({ fileType: '.yaml', base64String: base64 });
};
