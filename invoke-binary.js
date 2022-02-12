const process = require("process");
const childProcess = require("child_process");

console.log(`Platform: ${process.platform}`);
console.log(`Arch: ${process.arch}`);

const spawnSyncReturns = childProcess.spawnSync(`${__dirname}/bin/golang-action`, { stdio: "inherit" });

console.log(JSON.stringify(spawnSyncReturns));
