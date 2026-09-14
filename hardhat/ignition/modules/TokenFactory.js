const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenFactoryModule", (m) => {
  const tokenFactory = m.contract("TokenFactory");

  return { tokenFactory };
});
