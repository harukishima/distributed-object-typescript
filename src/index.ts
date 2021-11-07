import { CFraction } from './Client/CFraction.js';

const ps1 = new CFraction();
const ps2 = new CFraction(2, 4);
ps2.RutGon();

console.log(`${ps1.TuSo.toString()}/${ps1.MauSo.toString()}`);
console.log(`${ps2.TuSo.toString()}/${ps2.MauSo.toString()}`);
