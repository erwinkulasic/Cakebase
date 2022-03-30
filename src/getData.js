const { readFile, writeFile } = require('fs/promises');

const read = async (path) => {
    const result = await readFile(path, "utf-8");
    const items = result.length ? await JSON.parse(result) : [];

    return items;
}

const write = async (path, data) => {
    await writeFile(path, JSON.stringify(data), "utf8")
}

module.exports = {
    read,
    write
};