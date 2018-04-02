// ==UserScript==
// @name         Devrant April Fools 2018
// @namespace    https://devrant.com/
// @version      0.3
// @description  convert all scores to binary
// @author       7twin

// @match        https://devrant.com/feed/*
// @match        https://devrant.com/rants/*
// @match        https://devrant.com/users/*

// @match        https://devrant.io/feed/*
// @match        https://devrant.io/rants/*
// @match        https://devrant.io/users/*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(".user-score span,.profile-score").each(function(){
        $(this).html(($(this).html() >>> 0).toString(2));
    });
})();
