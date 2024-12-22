#!/usr/bin/env node

"use strict";

const { Command } = require("commander");


const program = new Command();

program
    .version('1.0.0')
    .description('Sample CLI with options and arguments followed by commands with their own arguments and options')

program
    .argument('[pattern...]', 'Glob filename patterns', ['**/*[Oo]utline.yaml'])
    .option('-s, --sidebarsFilename <filePath>', 'Filename and path of sidebars filename', 'sidebars.js',
    .option('--templates <path>', 'Path to templates folder', 'templates')
    .action((pattern, options) => {})
    .configureHelp({
        sortCommands: true,
        sortOptions: true,
        helpWidth: 200,
        globalOptions: true
    })

program
    .command('generate')
    .alias('g')
    .description('Generate CLI Markdown')
    .option('--config <filename>', 'Configuration file', 'schema.json')
    .argument('<filename>', 'Name of file to generate', 'README.md')
    .action((filename, options) => {
        console.log('Generating CLI Markdown...');
    });

program.parse();

