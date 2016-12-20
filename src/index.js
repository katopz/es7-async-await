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