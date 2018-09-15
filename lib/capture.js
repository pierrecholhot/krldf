const puppeteer = require('puppeteer')
const lag = require('delay')
const log = require('pretty-log')

async function capture({ url, delay, width, height, path, landscape }, callback) {
  try {
    log.debug(`🔥 Initializing new capture`)
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width, height })

    log.debug(`🤞 Fetching ${url}`)
    await page.goto(url, { waitUntil: 'networkidle2' })

    log.debug(`⏰ Waiting for ${delay}ms`)
    await lag(delay)

    log.debug(`📸 Capturing PDF`)
    await page.pdf({ path, landscape, format: 'A4' })

    log.success(`🍺 Got ${path}`)
    await browser.close()
    callback(0)

  } catch (err) {
    log.error(`❌ Failed with ${err}`)
    callback(1)
  }
}

module.exports = capture
