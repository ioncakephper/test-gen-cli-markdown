#!/usr/bin/env node

"use strict";

const { Command } = require("commander");


const program = new Command();

program
    .version('1.0.0')
    .description('Generate CLI Markdown')

program
    .command('generate')
    .alias('g')
    .description('Generate CLI Markdown')
    .action(() => {
        console.log('Generating CLI Markdown...');
    });

program.parse();

