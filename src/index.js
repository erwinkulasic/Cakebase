const { readFile, writeFile } = require('node:fs/promises');

module.exports = function (path) {

    const write = async function (data) {
        await writeFile(path, JSON.stringify(data), { encoding: 'utf-8' });
    }

    const read = async function () {
        return JSON.parse(await readFile(path, { encoding: 'utf-8' }) || [])
    }

    return {
        async set(data) {
            await write(
                [...await read(), data]
            );
        },
        async get(predicate) {
            return await read().find(predicate)
        },
        async update(predicate, data) {
            await write(
                await read().map(object => predicate(object) ? Object.assign(object, data) : object)
            )
        },
        async remove(predicate) {
            await write(
                await read().filter(!predicate)
            )
        },
        async clear() {
            await write(
                []
            )
        }
    }
}