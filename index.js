const puppeteer = require('puppeteer')
const delay = require('delay')
const log = require('pretty-log')


const defaults = {
  url: 'about:blank',
  filePath: 'result.pdf',
  captureDelay: 2000,
  captureWhen: 'networkidle0',
  viewportWidth: 2560,
  viewportHeight: 1440,
  paperFormat: 'A4',
  landscapeMode: false,
  printHeaderTemplate: '',
  printFooterTemplate: '',
  browserArgs: [],
}

async function krldf(options) {
  const {
    url,
    filePath,
    captureDelay,
    captureWhen,
    viewportWidth,
    viewportHeight,
    paperFormat,
    landscapeMode,
    printHeaderTemplate,
    printFooterTemplate,
    browserArgs,
  } = { ...defaults, ...options }

  try {
    const hasHeader = printHeaderTemplate && printHeaderTemplate.length
    const hasFooter = printFooterTemplate && printFooterTemplate.length

    log.debug(`🔥 Initializing new capture`)
    const browser = await puppeteer.launch({ args: browserArgs })
    const page = await browser.newPage()
    await page.setViewport({
      width: viewportWidth,
      height: viewportHeight,
    })

    log.debug(`🤞 Fetching ${url}`)
    await page.goto(url, {
      waitUntil: captureWhen
    })

    log.debug(`⏰ Waiting for ${captureDelay}ms`)
    await delay(captureDelay)

    log.debug(`📸 Capturing PDF`)
    await page.pdf({
      path: filePath,
      format: paperFormat,
      landscape: landscapeMode,
      headerTemplate: printHeaderTemplate,
      footerTemplate: printFooterTemplate,
      displayHeaderFooter: hasHeader || hasFooter,
    })
    await browser.close()

    log.success(`🍺 Got ${filePath}`)
    return filePath
  } catch (err) {
    log.error(`❌ Failed with ${err}`)
    throw err
  }
}

module.exports = krldf
