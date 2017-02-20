var chalk = require('chalk');
var signBunny = require('sign-bunny');

var asciiArt = signBunny('Best NPM Package Ever');

console.log(chalk.blue(asciiArt));
