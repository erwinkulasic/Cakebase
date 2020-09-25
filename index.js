'use strict';

/*
*   Cakebase, 2020
*   Author: Erwin Kulasic
*/

const fs = require('fs');

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
            if(isObject(data))
            {
                var index = Obj.findIndex(predicate);
                Object.assign(Obj[index], data);
                write(path, JSON.stringify(Obj));
            }
        },
        getAll: () => {
            return Obj;
        },
        clear: () => {
            write(path, JSON.stringify([]));
        }
    }
};