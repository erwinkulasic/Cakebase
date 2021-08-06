const util = require('util');

module.exports = {
    isObject: (value) => typeof value === 'object' ? true : false,
    containsArray: (array) => array.length ? JSON.parse(array) : [],
    isEqual: (a, b) => util.isDeepStrictEqual(a, b),
    createAsync: (cb) => new Promise(async (resolve, reject) => {
        try {
            resolve(await cb());
        } catch (err) {
            console.error(err);
        }
    })
};