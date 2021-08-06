/*
*   Cakebase, 2020
*   Author: Erwin Kulasic
*/

const { readAsync, writeAsync } = require('./CakeFS'),
    { createAsync, isEqual } = require('./CakeUtils');

/**
 * @example (async () => {
 *      ... = await require('cakebase').Async('./database.json');
 * })();
 * @param {string} path Path to json file.
 */
module.exports= async path => {
    var table = await readAsync(path);

    return {
        set: data => createAsync(async () => {
            await table.push(data);
            await writeAsync(path, table);
        }),
        get: predicate => createAsync(async () => await table.filter(predicate)),
        remove: data => createAsync(async () => {
            table = await table.filter(e => !data.includes(e));
            await writeAsync(path, table);
        }),
        update: (predicate, data) => createAsync(async () => {
            var rows = await table.filter(predicate);
            for (var j = 0; j < table.length; j++) {
                for (var i = 0; i < rows.length; i++) {
                    if (isEqual(table[j], rows[i])) {
                        table[j] = await Object.assign(rows[i], data);
                        break;
                    }
                }
            }
            await writeAsync(path, table);
        }),
        getAll: () => createAsync(async () => await table),
        clear: () => createAsync(async () => {
            table = [];
            await writeAsync(path, []);
        })
    };
};
