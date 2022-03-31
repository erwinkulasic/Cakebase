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

Cakebase is an asynchronous fast json database that allows you to efficiently and easily edit, search or add objects.
This project has been optimized and improved with some updates for 2 years now. Cakebase is currently only available in Nodejs.

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



Now you can import Cakebase to your project. 


This is the easiest way to use Cakebase 
```javascript
const users = require('cakebase')("./users.json");
```
<br>

You can also use Cakebase with multiple json files

```javascript
const table = require('cakebase');

const users = table("./users.json");
const log = table("./log.json");
```

<br>

add an object to the json file

```javascript
await users.set({ id: 0, username: "John", email: "test@something.com" });
```

<br>

Retrieve for objects in the json file

```javascript
const user = await users.get(obj => obj.username === "John");
```

<br>

update objects in the json file

```javascript
await users.update(obj => obj.username === "John", { location: "Mars" });
```
<br>

remove objects in the json file

```javascript
await users.remove(obj => obj.location === "earth");
```

<br>

Delete all objects in the json file

```javascript
await users.clear();
```

<br>

### **Contributing**
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<br>

### **License**
[MIT](https://github.com/erwinkulasic/Cakebase/blob/master/LICENSE)
