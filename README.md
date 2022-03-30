<p align="center">
    <img src="https://raw.githubusercontent.com/erwinkulasic/Cakebase/master/docs/assets/cakebase-header.jpg" width="800px"/>
</p>

<br>

<p align="center">

![Travis (.org)](https://img.shields.io/travis/erwinkulasic/cakebase?color=9870B8&style=flat-square)
![npm](https://img.shields.io/npm/dw/cakebase?color=9870B8&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/erwinkulasic/cakebase?color=9870B8&style=flat-square)
![GitHub](https://img.shields.io/github/license/erwinkulasic/cakebase?color=9870B8&style=flat-square)

</p>

<br>



### **Getting started**


Use [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/) to install cakebase.

```bash
npm i cakebase
```

After the installation you can create a json file and start immediately.

<br>

### **Usage**



Now you can import cakebase there are two ways to do this.

<br>

```javascript
const users = require('cakebase')("./users.json");
```
<br>

```javascript
const table = require('cakebase');

const users = table("./users.json");
const log = table("./log.json");
```

<br>

Add an object to json file.

```javascript
await users.set({ id: 0, username: "John", email: "test@something.com" });
```

<br>

Retrieve objects from json file

```javascript
const user = await users.get(obj => obj.username === "John");
```

<br>

update objects in json file

```javascript
await users.update(obj => obj.username === "John", { location: "Mars" });
```
<br>

remove objects in json file

```javascript
await users.remove(obj => obj.location === "earth");
```

<br>

clear all objects in json file

```javascript
await users.clear();
```

<br>

### **Contributing**
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<br>
### **License**
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
