#!/usr/bin/env bash

../cli.js \
  --url="https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e" \
  --filePath="addyosmani-the-cost-of-javascript-2017.pdf" \
  --captureDelay=4000 \
  --viewportWidth=2560 \
  --viewportHeight=1440 \
  --paperFormat=A4 \
  --landscapeMode \
  --printHeaderTemplate="<div style='font-family:\"Nunito Sans\",\"Trebuchet MS\",sans-serif;color:#AAA;font-size:6px;text-align:center;width:100%'><span class='title'></span></div>" \
  --printFooterTemplate="<div style='font-family:\"Nunito Sans\",\"Trebuchet MS\",sans-serif;color:#AAA;font-size:6px;text-align:center;width:100%'>Page&nbsp;<span class='pageNumber'></span>&nbsp;of&nbsp;<span class='totalPages'></span></div>"
