const fs = require('fs');

const fileManager = {
    createFile: (fileName, data) => {
        // Create the file in the 'data' directory, using the fileName and data provided
        fs.writeFile(`./data/${fileName}`, data, (err) => {
            if (err) throw err;
        });
    },
    createFolder: (folderName) => {
        // Create a new folder in the 'data' directory
        fs.mkdir(`./data/${folderName}`, { recursive: true }, (err) => {
            if (err) throw err;
        });
    },
    moveFile: (fileName, source, destination) => {
        // Move the file from the source folder to the destination folder
        fs.rename(`./data/${source}/${fileName}`, `./data/${destination}/${fileName}`, (err) => {
            if (err) throw err;
        });
    }
};

module.exports = fileManager;
