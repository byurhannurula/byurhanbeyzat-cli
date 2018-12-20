#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const data = require('./data');
const options = require('./options');

const newline = '\n';

const output = `
  ${data.name} @ ${data.handle} ${newline}
  ${data.title} ${newline}
  ${data.webLabel} ${data.webUrl}
  ${data.githubLabel} ${data.githubUrl}
  ${data.twitterLabel} ${data.twitterUrl}
  ${data.linkedinLabel} ${data.linkedinUrl}
  ${data.instagramLabel} ${data.instagramUrl}
`;

console.log(chalk.white(boxen(output, options)));
