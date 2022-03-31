const { read, write } = require('./getData');

const processJson = async (root, callback) => {
    const objectArr = await read(root);

    const itemsPerOperation = 100;
    var operations = [];

    const estimateOperations = objectArr.length / itemsPerOperation;

    for (let i = 0; i < estimateOperations; i++) {
        operations.push(() => callback(objectArr.slice(i * itemsPerOperation, i * itemsPerOperation + itemsPerOperation)));
    }

    const results = await Promise.all(operations.map(ops => ops()));

    return results.reduce((acc, val) => acc.concat(val), []);
}

const CakebaseInstance = (root) => ({

    async set(data) {
        let items = await read(root);
        items.push(data);

        await write(root, items);
    },

    get: async (predicate) => await processJson(root, e => e.filter(predicate)),

    async update(predicate, data) {
        const result = await processJson(root, e => e.map(i => predicate(i) ? Object.assign(i, data) : i));
        await write(root, result);
    },

    async remove(predicate) {
        const result = await processJson(root, e => e.filter(i => !predicate(i)));
        await write(root, result);
    },

    clear: async () => await write(root, []),

});


module.exports = CakebaseInstance;