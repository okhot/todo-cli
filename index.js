#! /usr/bin/env node

import { Command } from 'commander';
const program = new Command();
import list from './command/list.js'


program.command('list')
.description("List all the current TODO's")
.action(list)

program.parse()