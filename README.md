# krldf

Saves a webpage as PDF using Chrome's <a href="https://github.com/GoogleChrome/puppeteer"><img src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" height="20" align="top" /> Puppeteer</a>


## Installation

    npm install pierrecholhot/krldf

## Usage

    krldf --url="<url>"


## Configuration

option | default | description
-------|---------|------------
**url** | about:blank | url of the page to be converted
**width** | 1440 | sets the width of the viewport
**height** | 1000 | sets the height of the viewport
**delay** | 3000 | number of ms to wait until capture
**path** | result.pdf | path and filename of resulting PDF
