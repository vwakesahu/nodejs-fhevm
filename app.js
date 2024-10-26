const { createInstance } = require("fhevmjs");

let fhevmInstance = null;

const createFhevmInstance = async () => {
  if (!fhevmInstance) {
    fhevmInstance = await createInstance({
      chainId: 21097,
      networkUrl: "https://validator.rivest.inco.org/",
      gatewayUrl: "https://gateway.rivest.inco.org/",
      aclAddress: "0x2Fb4341027eb1d2aD8B5D9708187df8633cAFA92",
    });
  }
  return fhevmInstance;
};

const getFhevmInstance = async () => {
  if (!fhevmInstance) {
    fhevmInstance = await createFhevmInstance();
  }
  return fhevmInstance;
};

const main = async () => {
  try {
    const instance = await getFhevmInstance();
    console.log("FHEVM Instance created:", instance);
  } catch (error) {
    console.error("Error initializing FHEVM:", error);
  }
};

main();
