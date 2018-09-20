#!/usr/bin/env node

const krldf = require('..')

const options = {
  url: 'https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4',
  filePath: 'addyosmani-the-cost-of-javascript-2018.pdf',
  captureDelay: 4000,
  viewportWidth: 2560,
  viewportHeight: 1440,
  paperFormat: 'A4',
  landscapeMode: true,
  printHeaderTemplate: (`
    <div style="font-family:'Nunito Sans','Trebuchet MS',sans-serif;color:#AAA;font-size:6px;text-align:center;width:100%">
      <span class="title"></span>
    </div>
  `),
  printFooterTemplate: (`
    <div style="font-family:'Nunito Sans','Trebuchet MS',sans-serif;color:#AAA;font-size:6px;text-align:center;width:100%">
      Page&nbsp;
      <span class="pageNumber"></span>&nbsp;
      of&nbsp;
      <span class="totalPages"></span>
    </div>
  `)
}

async function capture(opts) {
  try {
    const path = await krldf(opts)
    console.log('success callback')
    process.exit(0)
  } catch (err) {
    console.log('error callback')
    process.exit(1)
  }
}

capture(options)
