'use strict';

/*
*   Cakebase, 2020
*   Author: Erwin Kulasic
*/

const fs = require('fs');
const util = require('util');

function read(path) {
    const response = fs.readFileSync(path, { encoding: 'utf-8' });
    return response.length ? JSON.parse(response) : [];
}

function write(path, data) {
    fs.writeFileSync(path, JSON.stringify(data), { encoding: 'utf-8' });
}

module.exports = path => {
    var base = read(path);

    return {
        set: data => {
            base.push(data);
            write(path, base);
        },
        get: predicate => {
            return base.filter(predicate);
        },
        remove: data => {
            base = base.filter(e => !data.includes(e));
            write(path, base);
        },
        update: (predicate, data) => {
            var rows = base.filter(predicate);
            for (var i = 0; i < rows.length; i++) {
                for (var j = 0; j < base.length; j++) {
                    if (util.isDeepStrictEqual(base[j], rows[i])) {
                        base[j] = Object.assign(rows[i], data);
                    }
                }
                write(path, base);
            }
        },
        getAll: () => {
            return base;
        },
        clear: () => {
            base = [];
            write(path, []);
        }
    }
};