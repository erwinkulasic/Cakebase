<img src="https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/docs/assets/Cakebase-400.png" width="400px"/>

[![Build Status](https://travis-ci.com/erwinkulasic/Cakebase.svg?branch=master)](https://travis-ci.com/erwinkulasic/Cakebase)
![npm](https://img.shields.io/npm/dw/cakebase?color=success)
![GitHub issues](https://img.shields.io/github/issues/erwinkulasic/cakebase)
![GitHub](https://img.shields.io/github/license/erwinkulasic/cakebase?color=success)
![Discord](https://img.shields.io/discord/759458665060761610)


Cakebase is a lightweight json database for node, powerful.


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

//Update a row
Cakebase.update(e => e.id === "e1fe3...", { email: "..." });

//Get all rows
const rows = Cakebase.getAll();

//Clear the whole database
Cakebase.clear();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
