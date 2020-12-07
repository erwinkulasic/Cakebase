/*
*   Cakebase, 2020
*   Author: Erwin Kulasic
*/

const { read, write, readAsync, writeAsync } = require('./CakeFS'),
    { createAsync, isEqual } = require('./CakeUtils');

/**
 * @example ... = require('cakebase')('./database.json');
 * @param {string} path Path to json file.
 */
module.exports = path => {
    var table = read(path);

    return {
        set: data => {
            table.push(data);
            write(path, table);
        },
        get: predicate => table.filter(predicate),
        remove: data => {
            table = table.filter(e => !data.includes(e));
            write(path, table);
        },
        update: (predicate, data) => {
            var rows = table.filter(predicate);
            for (var j = 0; j < table.length; j++) {
                for (var i = 0; i < rows.length; i++) {
                    if (isEqual(table[j], rows[i])) {
                        table[j] = Object.assign(rows[i], data);
                        break;
                    }
                }
            }
            write(path, table);
        },
        getAll: () => table,
        clear: () => {
            table = [];
            write(path, []);
        }
    };
}

/**
 * @example (async () => {
 *      ... = await require('cakebase').Async('./database.json');
 * })();
 * @param {string} path Path to json file.
 */
module.exports.Async = async path => {
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
