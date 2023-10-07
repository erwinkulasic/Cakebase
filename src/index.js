const fs = require('node:fs');

module.exports = function (path) {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]', { encoding: 'utf-8' });
    }

    async function write(data) {
        await fs.promises.writeFile(path, JSON.stringify(data), { encoding: 'utf-8' });
    }

    async function read() {
        const data = await fs.promises.readFile(path, { encoding: 'utf-8' });
        return data.length ? JSON.parse(data) : [];
    }

    return {
        async set(data) {
            await write(
                [...await read(), ...Array.isArray(data) ? data : [data]]
            )
        },
        async get(predicate) {
            return (await read()).filter(predicate)
        },
        async update(predicate, data) {
            await write(
                (await read()).map(object => predicate(object) ? { ...object, ...data } : object)
            )
        },
        async remove(predicate) {
            await write(
                (await read()).filter(object => !predicate(object))
            )
        },
        async clear() {
            await write(
                []
            )
        }
    }
}