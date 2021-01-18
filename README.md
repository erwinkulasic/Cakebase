<img src="https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/docs/assets/Cakebase-400.png" width="400px"/>

![Travis (.org)](https://img.shields.io/travis/erwinkulasic/cakebase?color=violet)
![npm](https://img.shields.io/npm/dw/cakebase?color=violet)
![GitHub issues](https://img.shields.io/github/issues/erwinkulasic/cakebase?color=violet)
![GitHub](https://img.shields.io/github/license/erwinkulasic/cakebase?color=violet)
![Discord](https://img.shields.io/discord/759458665060761610?color=violet)


Cakebase is a lightweight json database for node, powerful.

WARNING:

In the next update the synchronous function will be removed and the current version will be deprecated.

## Installation

Use [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/) to install cakebase.

```bash
npm i cakebase
```

```bash
yarn add cakebase
```

## Usage

```javascript
//inital
const Cakebase = require('cakebase')("./database.json");

//Create a new row
Cakebase.set({ id: 0, email: "..." });

//Get rows
const rows = Cakebase.get(e => e.email === "...");

//Remove rows
Cakebase.remove(rows);

//Update rows
Cakebase.update(e => e.id === "e1fe3...", { email: "..." });

//Get all rows
const rows = Cakebase.getAll();

//Clear the whole database
Cakebase.clear();
```

## Asynchronous Usage

You have two ways to use them asynchronously.

```javascript
//I recommend to use the async/await way.
(async () => {
    //inital
    const Cakebase = await require('cakebase').Async("./database.json");

    //Create a new row
    await Cakebase.set({ id: 0, email: "..." });

    //Get rows
    const rows = await Cakebase.get(e => e.email === "...");

    //...
})();

//The Promise way
require('cakebase').Async("./database.json").then(Cakebase => {
    //Create a new row
    Cakebase.set({ id: 0, email: "..." }).then(() => {

        //Get rows
        Cakebase.get(e => e.email === "...").then(console.log);
    });

    //...
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
