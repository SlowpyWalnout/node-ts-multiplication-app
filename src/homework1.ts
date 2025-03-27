import * as fs from 'fs';
import * as path from 'path';

const number: number = 5;
const header: string = '====================='
const outputFilePath = path.join(__dirname, '../outputs/table-5.txt');

let output = `${header}\n`;
output+= `Table of ${number}\n`;
output+= `${header}\n`;

for (let index = 0; index <= 10; index++) {
    output += `${number} x ${index} = ${number*index}`;
}
fs.mkdirSync(path.dirname(outputFilePath),{recursive: true});
fs.writeFileSync(outputFilePath, output, 'utf8');

console.log(`Multiplication table saved to ${outputFilePath}`);