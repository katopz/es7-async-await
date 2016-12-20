# es7-async-await
Kick start for ES7 async/await

![screen shot 2016-12-20 at 17 09 01](https://cloud.githubusercontent.com/assets/97060/21346592/9276c690-c6d7-11e6-9a96-b7193a2be1f9.png)

# Code
```js
import "babel-polyfill";

(async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/katopz/es7-async-await/master/README.md');
        const data = await response.text();
        document.write(`<pre>${data}</pre>`);
    } catch (e) {
        document.write(e);
    }
})();
```

# Dev
```shell
npm run dev
```
# Build
```shell
npm run build
```
