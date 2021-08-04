# Blockchain Ethereum Contract

* Truffle Framework used to create an Ethereum app using Javascript and Solidity.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/blockchain-ethereum-contract?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/blockchain-ethereum-contract?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/blockchain-ethereum-contract?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/blockchain-ethereum-contract?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Python Charts](#zap-angular-python-charts)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:flashlight: Testing](#flashlight-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Ethereum blockchain app is written in Solidity language, similar to javascript
* The app is a simple todo list with title & description strings, integer id & date fields and a boolean 'done' field
* Truffle suite includes Ganache, required to run the tests

## :camera: Screenshots

![Example screenshot](./img/ganache.png)

## :signal_strength: Technologies

* [Truffle Suite](https://www.trufflesuite.com/) tools for smart contracts
* [Ganache](https://www.trufflesuite.com/ganache) framework to run Ethereum blockchain apps
* [Ethereum](https://ethereum.org/en/dapps/) decentralised app (DApps)
* [Solidity v0.8.6](https://docs.soliditylang.org/en/v0.8.6/) a curly-bracket language, object-oriented, high-level language for implementing smart contracts
* [Javascript testing](https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript) using the [Mocha framework](https://mochajs.org/) and the [Chai assertion library](https://www.chaijs.com/)
* [Node.js v14.17.0](https://nodejs.org/en/) JavaScript runtime built on Chrome's V8 JavaScript engine.
* [lite-server v2.6](https://www.npmjs.com/package/lite-server) node server
* [Bootstrap v5](https://www.npmjs.com/package/bootstrap/v/5.0.0-alpha1) frontend framework

## :floppy_disk: Setup

* `truffle console` to start Truffle command prompt
* `truffle migrate --network development` to compile app
* `truffle test` to run tests - Ganache has to be running for it to work

## :flashlight: Testing

* tba

## :computer: Code Examples

* `contracts/TasksContract.sol` extract - In order to make events stand out with regards to regular function calls, emit TaskCreated(var1, var2...) as opposed to just EventName() is used to "call" the TaskCreated function.

```solidity
function createTask(string memory _title, string memory _description) public {
  taskCounter++;
  tasks[taskCounter] = Task(taskCounter, _title, _description, false, block.timestamp);
  emit TaskCreated(taskCounter, _title, _description, false, block.timestamp);
}
```

## :cool: Features

* tba

## :clipboard: Status & To-Do List
* In work
* To-Do: complete app

## :clap: Inspiration

* [Fazt Code: Solidity & Javascript App - Ethereum Aplicacion Decentralizada](https://www.youtube.com/watch?v=FAMWIoKvfRs&t=76s) in Spanish
* [Aniket: ‘emit’ keyword in Solidity](https://aniketengg.medium.com/emit-keyword-in-solidity-242a679b0e1a)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
