var Migrations = artifacts.require("./Migrations.sol");
//var Greeter = artifacts.require("./Greeter.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
 // deployer.deploy(Greeter);
};
