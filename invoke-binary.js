const process = require("process");
const childProcess = require("child_process");

const binaryPath = `${__dirname}/bin/golang-action-${process.platform}-${process.arch}`;
console.log(`Executing binary at: ${binaryPath}`);

const spawnSyncReturns = childProcess.spawnSync(binaryPath, { stdio: "inherit" });

console.log(JSON.stringify(spawnSyncReturns));
