'use strict';

/*
*   Cakebase, 2020
*   Author: Erwin Kulasic
*/

const fs = require('fs');
const util = require('util');

function read(path)
{
    return fs.readFileSync(path, { encoding: 'utf-8' });
}

function write(path, data)
{
    fs.writeFileSync(path, data, { encoding: 'utf-8' });
}

function isObject(data)
{
    if(data !== undefined || typeof data === 'object')
        return true;
    return false;
}

module.exports = path => {
    var Obj = JSON.parse(read(path));

    return {
        set: data => {
            if(isObject(data))
            {
                Obj.push(data);
                write(path, JSON.stringify(Obj));
            }
        },
        get: predicate => {
            return Obj.filter(predicate);
        },
        remove: data => {
            if(isObject(data))
            {
                Obj = Obj.filter(e => !data.includes(e));
                write(path, JSON.stringify(Obj));
            }
        },
        update: (predicate, data) => {
            var rows = Obj.filter(predicate);
            rows.forEach((r, i) => {
                Obj.forEach((o, i2) => {
                    if(util.isDeepStrictEqual(o, r))
                    {
                        Obj[i2] = Object.assign(rows[i], data);
                    }
                })
                write(path, JSON.stringify(Obj));
            });
        },
        getAll: () => {
            return Obj;
        },
        clear: () => {
            write(path, JSON.stringify([]));
        }
    }
};