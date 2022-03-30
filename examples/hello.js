const cakebase = require('cakebase')("./example.json");

for(let i = 0; i < 10; i++) 
    await cakebase.set({ Hello: 'World', id: i });

const results = await cakebase.get(e => e.Hello === 'World');

console.log(results);
