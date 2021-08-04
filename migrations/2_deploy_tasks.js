const TasksContact = artifacts.require("TasksContract.sol");

module.exports = function (deployer) {
  deployer.deploy(TasksContact);
}