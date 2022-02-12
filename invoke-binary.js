function chooseBinary() {
  console.log(`Platform: ${platform ?? ""}`);
  console.log(`Arch: ${arch ?? ""}`);
  console.log(`Version: ${VERSION ?? ""}`);

  // if (platform === "linux" && arch === "x64") {
  //   return `main-linux-amd64-${VERSION}`;
  // }

  return "bin/golang-action";
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: "inherit" });
