const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    description: 'add note',
    handler: () => console.log('adding a note')
});

console.log(yargs.argv)