<div align="center">
    <img src="https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/.github/assets/header.jpg" width="800px"/>
</div>

<br>
<br>

<div align="center">

<img alt="TRAVIS" src="https://img.shields.io/travis/erwinkulasic/cakebase?&logo=travis&color=df8&&style=flat-square">
<img alt="NPM" src="https://img.shields.io/npm/dw/cakebase?color=000&logo=npm&style=flat-square">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/erwinkulasic/cakebase?color=000&logo=github&style=flat-square">
<img alt="NPM" src="https://img.shields.io/github/license/erwinkulasic/cakebase?color=000&style=flat-square">


</div>

<br>

<br>

### **Installation**


Use [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/) to install cakebase.

```bash
npm i cakebase
```


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

### **Limits**
Cakebase should only be used in small projects or test environments it is not performant enough to keep up with a real database.

<br>

### **License**
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
