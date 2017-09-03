// ==UserScript==
// @name         reddit newsfixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove salon et alia from reddit
// @author       You
// @match        https://www.reddit.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

const BAD_DOMAINS = [
    "salon.com",
    "buzzfeed.com",
];

function isBadDomain(domNode) {
    return BAD_DOMAINS.some(domain => domNode.innerText.includes(domain));
}

(function() {
    'use strict';
  $(document).ready(function() {
      $(".thing").toArray()
          .filter(isBadDomain)
          .forEach(domNode => domNode.remove());
  });
})();
