const cakebase = require('../src/index');
const fs = require('node:fs');
const { deepEqual, equal } = require('node:assert');

describe('cakebase-testing', function () {
    let data = null;

    before(function () {
        data = cakebase('./test/test.json');
    })

    after(() => {
        data = null;
        fs.unlinkSync('./test/test.json');
    })

    describe('#cakebase', function () {
        it('creates file when none exists', function (done) {
            if (fs.existsSync('./test/test.json')) {
                done();
            }
        })
    })

    describe('#set()', function () {

        it('insert 100 objects', async function () {
            let arr = [];

            for (let i = 0; i < 100; i++) {
                arr.push({ i, hello: `world-${i}` })
            }

            await data.set(arr);
        })

        it('insert 1 items', async function () {
            await data.set({ i: 100, hello: `world-100` });
        })
    })

    describe('#get()', function () {

        it('get first element', async function () {
            const firstElement = await data.get(e => e.i === 0)
            deepEqual(firstElement[0], { i: 0, hello: "world-0" });
        })

        it('get last element', async function () {
            const lastElement = await data.get(e => e.i === 99)
            deepEqual(lastElement[0], { i: 99, hello: "world-99" });
        })

        it('get all 100 elements', async function () {
            for (let i = 0; i < 100; i++) {
                const lastElement = await data.get(e => e.i === i)
                deepEqual(lastElement[0], { i: i, hello: `world-${i}` });
            }
        })
    })

    describe('#update()', function () {

        it('update all 100 elements', async function () {
            for (let i = 0; i < 100; i++) {
                await data.update(e => e.i === i, { location: (Math.random() > 0.5) > .5 ? 'Mars' : 'Earth' });
            }
        })

        it('have all locations', async function () {
            let itemsWithLocations = await data.get(e => e.location === 'Mars' || e.location === 'Earth')
            equal(itemsWithLocations.length, 100);
        })
    })

    describe('#remove()', function () {

        it('remove all elements with Mars', async function () {
            await data.remove(e => e.location === 'Mars')
        })

        it('doesnt\'t have any item with location: Mars', async function () {
            const mars = await data.get(e => e.location === 'Mars')
            equal(mars.length, 0);
        })
    })

    describe('#clear()', function () {

        it('remove all elements', async function () {
            await data.clear();
        })

        it('doesn t have any element', async function () {
            const rows = await data.get(e => e);
            equal(rows.length, 0);
        })
    })
})
