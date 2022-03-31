const cakebase = require('cakebase')("./example.json");

async function Hello() {
    await cakebase.set({ Hello: 'World' });
}

Hello(); // Hello World!
