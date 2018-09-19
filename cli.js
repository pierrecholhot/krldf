#!/usr/bin/env node

async function cli(opts) {
  const path = await require('.')(opts)
  process.exit(path instanceof Error ? 1 : 0)
}

cli(require('minimist')(process.argv.slice(2)))
