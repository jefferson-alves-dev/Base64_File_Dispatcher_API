const fs = require('fs');
const base64js = require('base64-js');
const path = require('path');

exports.convertFileToBase64 = async (folderName, fileName) => {
  // Read PDF file as a byte array
  const readFile = new Promise((resolve, reject) => {
    try {
      const read = fs.readFileSync(
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
      const base64 = base64js.fromByteArray(read);
      resolve(base64);
    } catch (error) {
      console.log(console.error);
      reject(false);
    }
  });
  return readFile;
};
