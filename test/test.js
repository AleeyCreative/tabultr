const renderer = require("../src/renderer");
const data = require("./data");
const fs = require("fs");

function main() {
    let markup = renderer(data);
    fs.writeFileSync("./index.html", markup);
}

main();
