// ==UserScript==
// @name         Spotify Font Family Fix
// @namespace    https://iimn.net/
// @version      2024-03-09
// @description  undefined
// @author       fox20431
// @match        https://open.spotify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建一个新的样式元素
    var style = document.createElement('style');
    style.type = 'text/css';

    // 定义你的自定义样式
    var customStyles = `
        :root {
            --fallback-fonts: sans-serif;
        }
    `;

    // 添加自定义样式到样式元素
    if (style.styleSheet) {
        style.styleSheet.cssText = customStyles;
    } else {
        style.appendChild(document.createTextNode(customStyles));
    }

    // 将样式元素添加到页面头部
    document.head.appendChild(style);
})();
