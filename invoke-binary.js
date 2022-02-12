const process = require("process");
const childProcess = require("child_process");

function chooseBinary() {
  console.log(`Platform: ${process.platform}`);
  console.log(`Arch: ${process.arch}`);

  // if (platform === "linux" && arch === "x64") {
  //   return `main-linux-amd64-${VERSION}`;
  // }

  return "bin/golang-action";
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: "inherit" });
console.log(`Return: ${spawnSyncReturns}`);
