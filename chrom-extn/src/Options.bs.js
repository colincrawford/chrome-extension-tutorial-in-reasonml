// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");

var page = ( document.getElementById('buttonDiv') );

var kButtonColors = /* array */[
  "#3aa757",
  "#e8453c",
  "#f9bb2d",
  "#4688f1"
];

var setBackgroundColor = (
    function(button, color) {
      button.style.backgroundColor = color;
    }
  );

$$Array.iter((function (color) {
        var button = ( document.createElement('button') );
        Curry._2(setBackgroundColor, button, color);
        button.addEventListener("click", (function () {
                var params = { };
                params["color"] = color;
                chrome.storage.sync.set(params, (function () {
                        console.log("color is " + color);
                        return /* () */0;
                      }));
                return /* () */0;
              }));
        return page.appendChild(button);
      }), kButtonColors);

exports.page = page;
exports.kButtonColors = kButtonColors;
exports.setBackgroundColor = setBackgroundColor;
/* page Not a pure module */