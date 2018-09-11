const puppeteer = require('puppeteer')
const argv = require('minimist')(process.argv.slice(2))

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

console.log(`\n[krldf] Initialized`);

(async() => {
  const url = argv.url || 'about:blank'
  const width = argv.width || 1440
  const height = argv.height || 1000
  const delay = argv.delay || 3000
  const result = argv.result || 'result.pdf'

  console.log(`\n[krldf] Working on ${url}`);

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width, height })
  await page.goto(url, { waitUntil: 'networkidle2' })
  await timeout(delay)
  await page.pdf({ path: result })
  browser.close()

  console.log(`\n[krldf] Generated ${result}`);
})()
