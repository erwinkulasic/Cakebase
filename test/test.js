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

    describe('#set()', function () {

        it('should insert 100 items', async function () {
            for (let i = 0; i < 100; i++) {
                await data.set({ i, hello: `world-${i}` });
            }
        })
    })

    describe('#get()', function () {

        it('should get first element', async function () {
            const firstElement = await data.get(e => e.i === 0)
            deepEqual(firstElement[0], { i: 0, hello: "world-0" });
        })

        it('should get last element', async function () {
            const lastElement = await data.get(e => e.i === 99)
            deepEqual(lastElement[0], { i: 99, hello: "world-99" });
        })

        it('should get all 100 elements', async function () {
            for (let i = 0; i < 100; i++) {
                const lastElement = await data.get(e => e.i === i)
                deepEqual(lastElement[0], { i: i, hello: `world-${i}` });
            }
        })
    })

    describe('#update()', function () {

        it('should update all 100 elements', async function () {
            for (let i = 0; i < 100; i++) {
                await data.update(e => e.i === i, { location: (Math.random() > 0.5) > .5 ? 'Mars' : 'Earth' });
            }
        })

        it('should have all locations', async function () {
            let itemsWithLocations = await data.get(e => e.location === 'Mars' || e.location === 'Earth')
            equal(itemsWithLocations.length, 100);
        })
    })

    describe('#remove()', function () {

        it('should remove all elements with Mars', async function () {
            await data.remove(e => e.location === 'Mars')
        })

        it('should doesnt\'t have any item with location: Mars', async function () {
            const mars = await data.get(e => e.location === 'Mars')
            equal(mars.length, 0);
        })
    })

    describe('#clear()', function () {

        it('should remove all elements', async function () {
            await data.clear();
        })

        it('should doesnt\'t have any element', async function () {
            const rows = await data.get(e => e);
            equal(rows.length, 0);
        })
    })
})
