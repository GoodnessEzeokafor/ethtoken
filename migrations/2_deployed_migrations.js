const Migrations = artifacts.require("./Elesarr.sol");
const TokenSale = artifacts.require("./ElesarrTokenSale.sol")
module.exports = function(deployer) {
  deployer.deploy(Migrations, 2000000, "GoodyToken", "GT").then(function(){
    return    deployer.deploy(TokenSale, Migrations.address,1000000000000000)
  }) 

};
