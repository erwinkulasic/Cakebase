<p align="center">
<img src="https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/docs/assets/Cakebase-header.png" width="800px"/>


![Travis (.org)](https://img.shields.io/travis/erwinkulasic/cakebase?color=9870B8&style=flat-square)
![npm](https://img.shields.io/npm/dw/cakebase?color=9870B8&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/erwinkulasic/cakebase?color=9870B8&style=flat-square)
![GitHub](https://img.shields.io/github/license/erwinkulasic/cakebase?color=9870B8&style=flat-square)
![Discord](https://img.shields.io/discord/759458665060761610?color=9870B8&style=flat-square)
</p>

Cakebase is a lightweight json database for node.js


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
//I recommend to use the async/await way.
(async () => {
    //inital
    const Cakebase = await require('cakebase')("./database.json");

    //Create a new row
    await Cakebase.set({ id: 0, email: "..." });

    //Get rows
    const rows = await Cakebase.get(e => e.email === "...");

    //...
})();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
