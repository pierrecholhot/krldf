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

Default usage with [npx](https://www.npmjs.com/package/npx) :

```shell
npm install pierrecholhot/krldf
```
```shell
npx krldf --url="https://www.google.com/"
```

Or via global install :

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

  ⚙️ Url of the page to be converted

### width

  Type: `number`

  Default: `1440`

  ⚙️ Sets the width of the viewport

### height

  Type: `number`

  Default: `1000`

  ⚙️ Sets the height of the viewport

### delay

  Type: `number`

  Default: `3000`

  ⚙️ Number of ms to wait until capture

### path

  Type: `string`

  Default: `result.pdf`

  ⚙️ Path and filename of resulting PDF

### landscape

  Type: `boolean`

  Default: `null`

  ⚙️ Enable landscape mode
