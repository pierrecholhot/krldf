const options = require('minimist')(process.argv.slice(2))
const capture = require('./lib/capture')

const defaults = {
  url: 'about:blank',
  delay: 3000,
  width: 1440,
  height: 1000,
  path: 'result.pdf',
}

capture({ ...defaults, ...options }, code => process.exit(code))
