const { readFile, writeFile, access } = require('node:fs/promises');


module.exports = function (path) {
    const write = async function (data) {
        await writeFile(path, JSON.stringify(data), { encoding: 'utf-8' });
    }

    const read = async function () {
        try {
            //https://github.com/erwinkulasic/Cakebase/issues/5#issuecomment-1285607764
            await access(path, 0)
        } catch (error) {
            await write([])
        } finally {
            const data = await readFile(path, { encoding: 'utf-8' });
            return data.length ? JSON.parse(data) : []
        }
    }

    return {
        async set(data) {
            await write(
                [...await read(), data]
            );
        },
        async get(predicate) {
            return (await read()).filter(predicate)
        },
        async update(predicate, data) {
            await write(
                (await read()).map(object => predicate(object) ? Object.assign(object, data) : object)
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