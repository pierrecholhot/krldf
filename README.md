# krldf

Saves a webpage as PDF using Chrome's <a href="https://github.com/GoogleChrome/puppeteer"><img src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" height="20" align="top" /> Puppeteer</a>

## Install

```shell
npm install pierrecholhot/krldf
```

## Usage

```javascript
const krldf = require('krldf')

krldf({ url: 'https://www.google.com/' })
```

#### with async/await callback

```javascript
const krldf = require('krldf')

async function capture(opts) {
  const path = await krldf(opts)
  console.log(path ? 'success' : 'failure')
}

capture({ url: 'https://www.google.com/' })
```

## CLI

```shell
./node_modules/krldf/cli.js --url="https://www.google.com/"
```

#### or via [npx](https://www.npmjs.com/package/npx)

```shell
npx krldf --url="https://www.google.com/"
```

#### or via global install

```shell
npm install -g pierrecholhot/krldf
```
```shell
krldf --url="https://www.google.com/"
```


## Options

### url

  Type: `string`

  Default: `about:blank`

  ⚙️ URL of the page to be converted. The url should include scheme, e.g. `https://`

### delay

  Type: `number`

  Default: `3000`

  ⚙️ Number of `ms` to wait before capture. Useful when waiting for authentication services

### width

  Type: `number`

  Default: `1366`

  ⚙️ Width of the capture viewport

### height

  Type: `number`

  Default: `768`

  ⚙️ Height of the capture viewport

### path

  Type: `string`

  Default: `result.pdf`

  ⚙️ The file path to save the PDF to. If path is a relative path, then it is resolved relative to current working directory.

### landscape

  Type: `boolean`

  Default: `false`

  ⚙️ Enable paper landscape orientation

### headerTemplate

  Type: `string`

  Default: ` `

  ⚙️ HTML template for the print header. Should be valid HTML markup with following classes used to inject printing values into them:

  - `date` formatted print date
  - `title` document title
  - `url` document location
  - `pageNumber` current page number
  - `totalPages` total pages in the document

### footerTemplate

  Type: `string`

  Default: ` `

  ⚙️ HTML template for the print footer. Should be valid HTML markup with following classes used to inject printing values into them:

  - `date` formatted print date
  - `title` document title
  - `url` document location
  - `pageNumber` current page number
  - `totalPages` total pages in the document
