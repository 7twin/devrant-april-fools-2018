// ==UserScript==
// @name         Devrant April Fools 2018
// @namespace    https://devrant.com/
// @version      0.1
// @description  convert all scores to binary
// @author       7twin
// @match        https://devrant.com/feed/*
// @match        https://devrant.com/rants/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(".user-score span").each(function(){
        $(this).html(($(this).html() >>> 0).toString(2));
    });
})();
