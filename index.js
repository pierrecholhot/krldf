const puppeteer = require('puppeteer')
const lag = require('delay')
const log = require('pretty-log')


const defaults = {
  url: 'about:blank',
  delay: 3000,
  width: 2560,
  height: 1440,
  path: 'result.pdf',
  landscape: false,
  headerTemplate: '',
  footerTemplate: '',
  browserArgs: [],
}

async function krldf(options) {
  const {
    url,
    delay,
    width,
    height,
    path,
    landscape,
    headerTemplate,
    footerTemplate,
    browserArgs,
  } = { ...defaults, ...options }

  try {
    const pdfOptions = {
      path,
      landscape,
      format: 'A4',
      displayHeaderFooter: true,
      headerTemplate,
      footerTemplate
    }

    log.debug(`🔥 Initializing new capture`)
    const browser = await puppeteer.launch({ args: browserArgs })
    const page = await browser.newPage()
    await page.setViewport({ width, height })

    log.debug(`🤞 Fetching ${url}`)
    await page.goto(url, { waitUntil: 'networkidle2' })

    log.debug(`⏰ Waiting for ${delay}ms`)
    await lag(delay)

    log.debug(`📸 Capturing PDF`)
    await page.pdf(pdfOptions)

    log.success(`🍺 Got ${path}`)
    await browser.close()
    return path
  } catch (err) {
    log.error(`❌ Failed with ${err}`)
    return null
  }
}

module.exports = krldf
