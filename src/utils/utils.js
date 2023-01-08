const fs = require('fs');
const base64js = require('base64-js');
const path = require('path');

exports.convertFileToBase64 = (folderName, fileName) => {
  try {
    // Read PDF file as a byte array
    const fileReading = fs.readFileSync(
      path.resolve(
        __dirname,
        '..',
        '..',
        'public',
        'files',
        String(folderName),
        String(fileName)
      )
    );

    // Convert fileReading to base64 string
    const base64 = base64js.fromByteArray(fileReading);
    return base64;
  } catch (error) {
    console.log(error);
    return false;
  }
};
