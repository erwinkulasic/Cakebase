/*
*
*   Cakebase, 2021
*   Author: Erwin Kulasic
*   This project is under the MIT License.
*   
*/
const fs = require('fs/promises');

const CakebaseHandler = async (root, handle, overwrite = false) => {
    const response = await fs.readFile(root, "utf-8");
    let items = response.length ? await JSON.parse(response) : [];
    const value = await handle(items);
    await fs.writeFile(root, JSON.stringify(overwrite ? value : items), "utf8");
    return value;
}

const CakebaseProvider = (root) => {
    return {
        set: async (data) => await CakebaseHandler(root, e => e.push(data)),
        get: async (predicate) => await CakebaseHandler(root, async e => await e.filter(predicate)),
        remove: async (predicate) => await CakebaseHandler(root, async e => await e.filter(i => !predicate(i)), true),
        clear: async () => await CakebaseHandler(root, e => e = []),
        update: async (predicate, data) => await CakebaseHandler(root, async e => await e.map(i => predicate(i) ? Object.assign(i, data) : i))
    };
}

module.exports = root => CakebaseProvider(root);