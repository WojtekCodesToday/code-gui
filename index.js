import * as fs from 'node:fs/promises';
//import { mkdir } from 'node:fs/promises';
//import { readFile } from 'node:fs/promises';
//import { access, constants } from 'node:fs'
async function loadDir(direct) {var min = "";for (let hash_0 = 0; hash_0 < direct.length; hash_0++) {min = min + "-";}try{var uiArray = [];const dir = await fs.opendir(direct);console.log("#-- "+direct);uiArray.push("#-- "+direct);for await(const dirent of dir) console.log("| "+dirent.name);uiArray.push("| "+direct.name);console.log("#---"+min);uiArray.push("#---"+min);return uiArray;} catch (err) {console.log("   .");console.log("  / \\");console.log(" / | \\ Cannot open! Reason: "+err);console.log("/__.__\\")}};
async function loadDirArr(dire) {for(let i = 0;i<dire.length; i++) {loadDir(dire[i])}};
loadDir("C:/")