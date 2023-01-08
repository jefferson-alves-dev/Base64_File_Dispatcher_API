const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const { convertFileToBase64 } = require('../utils/utils');

exports.controllerMp3 = (req, res) => {
  const base64 = convertFileToBase64('mp3', 'mp3.mp3');
  if (!base64) {
    res.status(500).json({
      message:
        'An error occurred while generating the base64 of the mp3 file. Try again.',
    });
    return;
  }
  res.json({ base64String: base64 });
};

exports.controllerWav = (req, res) => {
  const base64 = convertFileToBase64('wav', 'wav.wav');
  if (!base64) {
    res.status(500).json({
      message:
        'An error occurred while generating the base64 of the wav file. Try again.',
    });
    return;
  }
  res.json({ base64String: base64 });
};

exports.controllerPng = (req, res) => {
  const imgWidth = Number(req.query.width) ? Number(req.query.width) : 600;
  const imgHeight = Number(req.query.height) ? Number(req.query.height) : 600;
  const text = !req.query.text
    ? 'Heeey 🖐! Sou um PNG'
    : String(req.query.text);
  const imageName = uuid.v4();
  if (text.length > 20) {
    res.status(400).json({
      error: true,
      message: `A maximum of 20 characters is allowed for the text. Your text has ${text.length} characters.`,
    });
    return;
  }
  if (imgWidth > 600) {
    res.status(400).json({
      error: true,
      message: 'The maximum allowed size is 600px',
    });
    return;
  }
  if (imgHeight > 600) {
    res.status(400).json({
      error: true,
      message: 'The maximum allowed height is 600px',
    });
    return;
  }
  try {
    const Canvas = require('canvas');

    // Create a new canvas with the desired width and height
    const canvas = Canvas.createCanvas(imgWidth, imgHeight);

    // Get the canvas context, which is used to draw on the canvas
    const ctx = canvas.getContext('2d');

    // Set the font size and text alignment
    ctx.font = '48px sans-serif';
    ctx.textAlign = 'center';

    // Set the fill style to black
    ctx.fillStyle = '#0e5ba2';

    // Draw the text in the center of the canvas
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Save the canvas to an image file

    const out = fs.createWriteStream(
      path.resolve(
        __dirname,
        '..',
        '..',
        'public',
        'files',
        'png',
        `${imageName}.png`
      )
    );
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    // out.on('finish', () => console.log('The PNG file was created.'));
    setTimeout(() => {
      const base64 = convertFileToBase64('png', `${imageName}.png`);
      fs.unlink(
        path.resolve(
          __dirname,
          '..',
          '..',
          'public',
          'files',
          'png',
          `${imageName}.png`
        ),
        (error) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );
      res.json({ base64String: base64 });
    }, 2000);
  } catch (error) {
    console.log(error);
    return;
  }
};

exports.controllerJpeg = (req, res) => {
  const imgWidth = Number(req.query.width) ? Number(req.query.width) : 600;
  const imgHeight = Number(req.query.height) ? Number(req.query.height) : 600;
  const text = !req.query.text
    ? 'Heey 🖐! Sou um JPEG'
    : String(req.query.text);
  const imageName = uuid.v4();
  if (text.length > 20) {
    res.status(400).json({
      error: true,
      message: `A maximum of 20 characters is allowed for the text. Your text has ${text.length} characters.`,
    });
    return;
  }
  if (imgWidth > 600) {
    res.status(400).json({
      error: true,
      message: 'The maximum allowed size is 600px',
    });
    return;
  }
  if (imgHeight > 600) {
    res.status(400).json({
      error: true,
      message: 'The maximum allowed height is 600px',
    });
    return;
  }
  try {
    const Canvas = require('canvas');

    // Create a new canvas with the desired width and height
    const canvas = Canvas.createCanvas(imgWidth, imgHeight);

    // Get the canvas context, which is used to draw on the canvas
    const ctx = canvas.getContext('2d');

    // Set the font size and text alignment
    ctx.font = '48px sans-serif';
    ctx.textAlign = 'center';

    // Set the fill style to black
    ctx.fillStyle = '#ffffff';

    // Draw the text in the center of the canvas
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Save the canvas to an image file

    const out = fs.createWriteStream(
      path.resolve(
        __dirname,
        '..',
        '..',
        'public',
        'files',
        'jpeg',
        `${imageName}.jpeg`
      )
    );
    const stream = canvas.createJPEGStream();
    stream.pipe(out);
    // out.on('finish', () => console.log('The PNG file was created.'));
    setTimeout(() => {
      const base64 = convertFileToBase64('jpeg', `${imageName}.jpeg`);
      fs.unlink(
        path.resolve(
          __dirname,
          '..',
          '..',
          'public',
          'files',
          'jpeg',
          `${imageName}.jpeg`
        ),
        (error) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );
      res.json({ base64String: base64 });
    }, 2000);
  } catch (error) {
    console.log(error);
    return;
  }
};

exports.controllerRandomImage = (req, res) => {
  res
    .status(500)
    .json({ error: true, message: 'This endpoint is under maintenance.' });
};

exports.controllerIso = (req, res) => {
  const base64 = convertFileToBase64('iso', 'iso.iso');
  res.json({ base64String: base64 });
};

exports.controllerZip = (req, res) => {
  const base64 = convertFileToBase64('zip', 'zip.zip');
  res.json({ base64String: base64 });
};

exports.controller7z = (req, res) => {
  const base64 = convertFileToBase64('7z', '7z.7z');
  res.json({ base64String: base64 });
};

exports.controllerXml = (req, res) => {
  const base64 = convertFileToBase64('xml', 'xml.xml');
  res.json({ base64String: base64 });
};

exports.controllerOds = (req, res) => {
  const base64 = convertFileToBase64('ods', 'ods.ods');
  res.json({ fileType: '.ods', base64String: base64 });
};

exports.controllerXls = (req, res) => {
  const base64 = convertFileToBase64('xls', 'xls.xls');
  res.json({ fileType: '.xls', base64String: base64 });
};

exports.controllerXlsx = (req, res) => {
  const base64 = convertFileToBase64('xlsx', 'xlsx.xlsx');
  res.json({ fileType: '.xlsx', base64String: base64 });
};

exports.controllerTxt = (req, res) => {
  const base64 = convertFileToBase64('txt', 'txt.txt');
  res.json({ fileType: '.txt', base64String: base64 });
};

exports.controllerCsv = (req, res) => {
  const base64 = convertFileToBase64('csv', 'csv.csv');
  res.json({ fileType: '.csv', base64String: base64 });
};

exports.controllerMp4 = (req, res) => {
  const base64 = convertFileToBase64('mp4', 'mp4.mp4');
  res.json({ fileType: '.mp4', base64String: base64 });
};

exports.controllerOdt = (req, res) => {
  const base64 = convertFileToBase64('odt', 'odt.odt');
  res.json({ fileType: '.odt', base64String: base64 });
};

exports.controllerDoc = (req, res) => {
  const base64 = convertFileToBase64('doc', 'doc.doc');
  res.json({ fileType: '.doc', base64String: base64 });
};

exports.controllerDocx = (req, res) => {
  const base64 = convertFileToBase64('docx', 'docx.docx');
  res.json({ fileType: '.docx', base64String: base64 });
};

exports.controllerHtml = (req, res) => {
  const base64 = convertFileToBase64('html', 'html.html');
  res.json({ fileType: '.html', base64String: base64 });
};

exports.controllerPot = (req, res) => {
  const base64 = convertFileToBase64('pot', 'pot.pot');
  res.json({ fileType: '.pot', base64String: base64 });
};

exports.controllerOdp = (req, res) => {
  const base64 = convertFileToBase64('odp', 'odp.odp');
  res.json({ fileType: '.odp', base64String: base64 });
};

exports.controllerPttx = (req, res) => {
  const base64 = convertFileToBase64('pptx', 'pptx.pptx');
  res.json({ fileType: '.pptx', base64String: base64 });
};

exports.controllerPpsx = (req, res) => {
  const base64 = convertFileToBase64('ppsx', 'ppsx.ppsx');
  res.json({ fileType: '.ppsx', base64String: base64 });
};

exports.controllerPdf = (req, res) => {
  const base64 = convertFileToBase64('pdf', 'pdf.pdf');
  res.json({ fileType: '.pdf', base64String: base64 });
};

exports.controllerHtm = (req, res) => {
  const base64 = convertFileToBase64('htm', 'htm.htm');
  res.json({ fileType: '.htm', base64String: base64 });
};

exports.controllerGif = (req, res) => {
  const base64 = convertFileToBase64('gif', 'gif.gif');
  res.json({ fileType: '.gif', base64String: base64 });
};

exports.controllerBmp = (req, res) => {
  const base64 = convertFileToBase64('bmp', 'bmp.bmp');
  res.json({ fileType: '.bmp', base64String: base64 });
};

exports.controllerRtf = (req, res) => {
  const base64 = convertFileToBase64('rtf', 'rtf.rtf');
  res.json({ fileType: '.rtf', base64String: base64 });
};

exports.controllerOtt = (req, res) => {
  const base64 = convertFileToBase64('ott', 'ott.ott');
  res.json({ fileType: '.ott', base64String: base64 });
};

exports.controllerTtf = (req, res) => {
  const base64 = convertFileToBase64('ttf', 'ttf.ttf');
  res.json({ fileType: '.ttf', base64String: base64 });
};

exports.controllerWoff = (req, res) => {
  const base64 = convertFileToBase64('woff', 'woff.woff');
  res.json({ fileType: '.woff', base64String: base64 });
};

exports.controllerOtf = (req, res) => {
  const base64 = convertFileToBase64('otf', 'otf.otf');
  res.json({ fileType: '.otf', base64String: base64 });
};

exports.controllerEpub = (req, res) => {
  const base64 = convertFileToBase64('epub', 'epub.epub');
  res.json({ fileType: '.epub', base64String: base64 });
};

exports.controllerCss = (req, res) => {
  const base64 = convertFileToBase64('css', 'css.css');
  res.json({ fileType: '.css', base64String: base64 });
};

exports.controllerBat = (req, res) => {
  const base64 = convertFileToBase64('bat', 'bat.bat');
  res.json({ fileType: '.bat', base64String: base64 });
};

exports.controllerJs = (req, res) => {
  const base64 = convertFileToBase64('js', 'js.js');
  res.json({ fileType: '.js', base64String: base64 });
};

exports.controllerJson = (req, res) => {
  const base64 = convertFileToBase64('json', 'json.json');
  res.json({ fileType: '.json', base64String: base64 });
};

exports.controllerPhp = (req, res) => {
  const base64 = convertFileToBase64('php', 'php.php');
  res.json({ fileType: '.php', base64String: base64 });
};

exports.controllerSql = (req, res) => {
  const base64 = convertFileToBase64('sql', 'sql.sql');
  res.json({ fileType: '.sql', base64String: base64 });
};

exports.controllerYaml = (req, res) => {
  const base64 = convertFileToBase64('yaml', 'yaml.yaml');
  res.json({ fileType: '.yaml', base64String: base64 });
};
