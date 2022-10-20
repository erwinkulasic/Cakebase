<div align="center">
    <img src="https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/docs/assets/cakebase-header.jpg" width="800px"/>
</div>

<br>
<br>

<div align="center">
<h1>Cakebase</h1>

<img alt="TRAVIS" src="https://img.shields.io/travis/erwinkulasic/cakebase?color=9870B8&style=flat-square">
<img alt="NPM" src="https://img.shields.io/npm/dw/cakebase?color=9870B8&style=flat-square">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/erwinkulasic/cakebase?color=9870B8&style=flat-square">
<img alt="NPM" src="https://img.shields.io/github/license/erwinkulasic/cakebase?color=9870B8&style=flat-square">

</div>

<br>

Cakebase is an asynchronous json database that allows you to efficiently and easily edit, search or add objects.

<br>

Here are a few [examples](https://github.com/erwinkulasic/Cakebase/tree/master/examples)

<br>

### **Getting started**


Use [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/) to install cakebase.

```bash
npm i cakebase
```

After the installation you can create a json file and start immediately.

<br>

### **Usage**


```javascript
const table = require('cakebase');
const users = table("./users.json");

async function createUser(id, username, email) {
    await users.set({ id, username, email });
}

async function findUserById(id) {
    return await users.get(obj => obj.id === id);
}

async function updateUserByName(name, changes) {
    await users.update(obj => obj.username === name, changes);
}

//remove user by location
users
    .remove(obj => obj.location === "earth")
    .then(() => {})


```

<br>

### **Contributing**
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<br>

### **License**
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
