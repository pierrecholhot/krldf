# krldf

Saves a webpage as PDF using Chrome's Puppeteer.


## Install

```shell
npm install pierrecholhot/krldf
```


## Usage

```javascript
const krldf = require('krldf')

krldf({ url: 'https://www.google.com/' })
```

#### with promises

Example in [`examples/node-promises.js`](./examples/node-promises.js)

#### with async/await

Example in [`examples/node-async.js`](./examples/node-async.js)


### CLI

Example in [`examples/cli.sh`](./examples/cli.sh)

```shell
./node_modules/krldf/cli.js --url="https://www.google.com/"
```

#### or via [npm global install](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)

```shell
krldf --url="https://www.google.com/"
```

#### or via [npx](https://www.npmjs.com/package/npx)

```shell
npx krldf --url="https://www.google.com/"
```


## Options

### url

**Type** : `string` <br />
**Default** : `about:blank` <br />
**Description** : URL of the page to be converted. <br />The url should include scheme, e.g. `https://`. <br />

### filePath

**Type** : `string` <br />
**Default** : `result.pdf` <br />
**Description** : The file path to save the PDF to. <br />If `filePath` is a relative path, then it is resolved relative to current working directory.

### captureDelay

**Type** : `number` <br />
**Default** : `2000` <br />
**Description** : Number of `ms` to wait after navigation succeeded. <br />Useful when waiting for authentication services.

### captureWhen

**Type** : `string` <br />
**Default** : `networkidle0` <br />
**Description** : When to consider navigation succeeded. More on [`page.goTo({ waitUntil })`](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagegotourl-options).

  - `load` consider navigation to be finished when the `load` event is fired.
  - `domcontentloaded` consider navigation to be finished when the `DOMContentLoaded` event is fired.
  - `networkidle0` consider navigation to be finished when there are no more than 0 network connections for at least `500` ms.
  - `networkidle2` consider navigation to be finished when there are no more than 2 network connections for at least `500` ms.

### viewportWidth

**Type** : `number` <br />
**Default** : `2560` <br />
**Description** : Width of the capture viewport.

### viewportHeight

**Type** : `number` <br />
**Default** : `1440` <br />
**Description** : Height of the capture viewport.

### paperFormat

**Type** : `string` <br />
**Default** : `A4` <br />
**Options** : `Letter`, `Legal`, `Tabloid`, `Ledger`, `A0`, `A1`, `A2`, `A3`, `A4`, `A5`, `A6`

### landscapeMode

**Type** : `boolean` <br />
**Default** : `false` <br />
**Description** : Enable paper landscape orientation.

### printHeaderTemplate <br />printFooterTemplate

**Type** : `string` <br />
**Default** : *`(empty strings)`* <br />
**Description** : HTML templates for the print header and print footer. <br />Should be valid HTML markup with following classes used to inject printing values into them :

  - `date` formatted print date
  - `title` document title
  - `url` document location
  - `pageNumber` current page number
  - `totalPages` total pages in the document

### browserArgs

**Type** : `array` <br />
**Default** : `[]` <br />
**Description** : Additional arguments to pass to the browser instance. <br />The list of Chromium flags can be found [here](https://peter.sh/experiments/chromium-command-line-switches/).
