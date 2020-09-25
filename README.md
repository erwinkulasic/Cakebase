# Cakebase

[![Build Status](https://travis-ci.com/erwinkulasic/Cakebase.svg?branch=master)](https://travis-ci.com/erwinkulasic/Cakebase)
![npm](https://img.shields.io/npm/dw/cakebase?color=success)

Cakebase is a lightweight json database for node, powerful.


## Installation

Use the [npm](https://www.npmjs.com/) to install cakebase.

```bash
npm i cakebase
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
