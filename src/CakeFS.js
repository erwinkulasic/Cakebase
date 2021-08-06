const fs = require('fs'),
    o = { encoding: 'utf-8' },
    { containsArray } = require('./CakeUtils');

module.exports = { 
    readAsync: async path => await containsArray(await fs.promises.readFile(path, o)),
    writeAsync: async (path, data) =>  await fs.promises.writeFile(path, JSON.stringify(data), o)
};