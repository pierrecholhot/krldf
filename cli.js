#!/usr/bin/env node

async function cli(opts) {
  const path = await require('.')(opts)
  process.exit(path ? 0 : 1)
}

cli(require('minimist')(process.argv.slice(2)))
