// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';


var OnInstalled = /* module */[];

var Runtime = /* module */[/* OnInstalled */OnInstalled];

var Sync = /* module */[];

var Storage = /* module */[/* Sync */Sync];

var makeNewPageStateManager = (
    function() {
      return new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: "developer.chrome.com"}
      });
    }
    );

var makeNewShowPageAction = ( function() { return new chrome.declarativeContent.ShowPageAction() });

var OnPageChanged = /* module */[];

var DeclarativeContent = /* module */[
  /* makeNewPageStateManager */makeNewPageStateManager,
  /* makeNewShowPageAction */makeNewShowPageAction,
  /* OnPageChanged */OnPageChanged
];

exports.Runtime = Runtime;
exports.Storage = Storage;
exports.DeclarativeContent = DeclarativeContent;
/* makeNewPageStateManager Not a pure module */
