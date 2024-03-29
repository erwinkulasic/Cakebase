<div align="center">
    <img src="https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/.github/assets/header.png" width="800px"/>
</div>

<br>
<br>

<div align="center">

<img alt="NPM" src="https://img.shields.io/npm/dm/cakebase?color=8D6BFB&labelColor=8D6BFB&logo=npm&logoColor=white&label=">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/erwinkulasic/cakebase?color=8D6BFB&labelColor=8D6BFB&logo=github&label=">


</div>

<br>

<br>

### **Installation**


Use [npm](https://www.npmjs.com/), [yarn](https://classic.yarnpkg.com/en/) or [pnpm](https://pnpm.io/) to install cakebase.

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

<div align="center">

[![Cakebase Logo](https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/.github/assets/banner.png)](https://github.com/erwinkulasic/Cakebase/wiki)

</div>

<br>

### **Contributing**
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<br>

### **Limits**
Cakebase should only be used in small projects or test environments, as it is not performant enough to keep up with a real database.

<br>

### **License**
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
