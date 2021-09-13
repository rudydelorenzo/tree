const fs = require('fs');
const path = require('path');

let level = 0;

function print(name) {
    process.stdout.write("|");
    for (let i = 0; i < level; i++) process.stdout.write("   ");
    process.stdout.write("|── ");
    process.stdout.write(`${name}\n`);
}

function scan(dirPath) {
    level++
    let items = fs.readdirSync(dirPath);
    //console.log(items)
    for (let i = 0; i<items.length; i++) {
        if (fs.statSync(path.join(dirPath, items[i])).isDirectory()) {
            print(`${items[i]}/`);
            scan(path.join(dirPath, items[i]));
        } else {
            print(items[i]);
        }
    }
    level--;

}

console.log("Welcome to Tree 🌳");



scan("/Users/rudydelorenzo/Documents/University of Alberta");