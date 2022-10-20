<div align="center">
    <img src="https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/.github/assets/header.jpg" width="800px"/>
</div>

<br>
<br>

<div align="center">

<img alt="TRAVIS" src="https://img.shields.io/travis/erwinkulasic/cakebase?color=000&style=flat-square">
<img alt="NPM" src="https://img.shields.io/npm/dw/cakebase?color=000&style=flat-square">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/erwinkulasic/cakebase?color=000&style=flat-square">
<img alt="NPM" src="https://img.shields.io/github/license/erwinkulasic/cakebase?color=000&style=flat-square">

<h4>Cakebase is an asynchronous json database that allows you to efficiently and easily edit, search or add objects.</h4>

</div>

<br>

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
const users = require('cakebase')('./users.json')

users
    .get(obj => obj.location === "Mars")
    .then(console.log)

```

<br>

### **Contributing**
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<br>

### **License**
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
