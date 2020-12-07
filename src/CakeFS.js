const fs = require('fs'),
    o = { encoding: 'utf-8' },
    { containsArray } = require('./CakeUtils');

module.exports = { 
    read: path => containsArray(fs.readFileSync(path, o)),
    readAsync: async path => await containsArray(await fs.promises.readFile(path, o)),
    write: (path, data) => fs.writeFileSync(path, JSON.stringify(data), o),
    writeAsync: async (path, data) =>  await fs.promises.writeFile(path, JSON.stringify(data), o)
};