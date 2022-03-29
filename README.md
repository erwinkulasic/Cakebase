<p align="center">
<img src="https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/docs/assets/cakebase.jpg" width="800px"/>


 <br>
    
![Travis (.org)](https://img.shields.io/travis/erwinkulasic/cakebase?color=9870B8&style=flat-square)
![npm](https://img.shields.io/npm/dw/cakebase?color=9870B8&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/erwinkulasic/cakebase?color=9870B8&style=flat-square)
![GitHub](https://img.shields.io/github/license/erwinkulasic/cakebase?color=9870B8&style=flat-square)
</p>

**Cakebase is a lightweight JSON database for nodejs, the goal of this project is to use a JSON file like a database. Since the new update some things have changed for example: require is no longer executed asynchronously or to save memory the array is no longer stored locally.**

**Cakebase has over 1.3 K downloads! I say thank you, there are some changes planned for the future, and therefore I need your suggestions, create an issue now.
Have a nice day.**


## Installation

Use [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/) to install cakebase.

```bash
npm i cakebase
```

## Usage

```javascript
//I recommend to use the async/await way.
const Cakebase = require('cakebase')("./database.json");

async function Something()
{
    //Add a row.
    await Cakebase.set({ id: 0, email: "..." });

    //Get rows that match the prediction
    const rows = await Cakebase.get(e => e.email === "...");

    //Delete rows that match the prediction.
    await Cakebase.remove(e => e.surname === "Doe");

    //Update rows that match the prediction.
    await Cakebase.update(e => e.email === "...", { username: "John" });

    //Delete all rows in the json file.
    await Cakebase.clear();
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
