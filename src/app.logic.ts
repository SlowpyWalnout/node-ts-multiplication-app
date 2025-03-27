import fs from 'fs';
import { yarg } from './plugins/yargs.plugin';

const {b:base, l:limit, s:displayTable} = yarg;

let outputMessage = '';
const headerMessage = `
===================================
        Tabla del ${base}
===================================\n
`;

outputMessage = headerMessage + outputMessage;

if (displayTable) {console.log(outputMessage)};

const outputPath = `outputs`
fs.mkdirSync(outputPath, {recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('file created');