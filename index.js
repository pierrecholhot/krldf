const options = require('minimist')(process.argv.slice(2))
const capture = require('./lib/capture')

const defaults = {
  url: 'about:blank',
  delay: 3000,
  width: 1366,
  height: 768,
  path: 'result.pdf',
  landscape: false,
}

console.log(options);

capture({ ...defaults, ...options }, code => process.exit(code))
