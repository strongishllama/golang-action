const process = require("process");
const childProcess = require("child_process");

let binaryPath = `${__dirname}/bin/golang-action-${process.platform}-`;

if (process.platform === "linux" && process.arch === "x64") {
  binaryPath += "amd64";
} else {
  console.error(`Unsupported platform: ${process.platform} or architecture: ${process.arch}`);
}

console.log(`Executing binary at: ${binaryPath}`);

const spawnSyncReturns = childProcess.spawnSync(binaryPath, { stdio: "inherit" });

console.log(JSON.stringify(spawnSyncReturns));

if (spawnSyncReturns.status !== 0) {
  process.exit(1);
}
