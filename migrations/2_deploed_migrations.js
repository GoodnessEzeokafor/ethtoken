const Migrations = artifacts.require("./Elesarr.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations, 2000000, "GoodyToken", "GT");
};
