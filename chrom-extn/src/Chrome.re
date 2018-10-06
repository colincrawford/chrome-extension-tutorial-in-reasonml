/* data model for data my extension is storing */
[@bs.deriving abstract]
type storageData = {color: string};

module Runtime = {
  module OnInstalled = {
    [@bs.val] [@bs.scope ("chrome", "runtime", "onInstalled")]
    external addListener: (unit => unit) => unit = "addListener";
  };
};

module Storage = {
  module Sync = {
    [@bs.val] [@bs.scope ("chrome", "storage", "sync")]
    external set: (storageData, unit => unit) => unit = "set";

    [@bs.val] [@bs.scope ("chrome", "storage", "sync")]
    external get: (string, storageData => unit) => unit = "get";
  };
};

module DeclarativeContent = {
  type onPageChangedRule;

  let makeNewPageStateManager: string => onPageChangedRule = [%bs.raw
    {|
    function(hostEquals) {
      return new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals}
      });
    }
    |}
  ];

  let makeNewShowPageAction: unit => onPageChangedRule = [%bs.raw
    {| function() { return new chrome.declarativeContent.ShowPageAction() }|}
  ];

  module OnPageChanged = {
    [@bs.val] [@bs.scope ("chrome", "declarativeContent", "onPageChanged")]
    external removeRules:
      (Js.Undefined.t(Js.Dict.t(string)), unit => unit) => unit =
      "removeRules";

    [@bs.val] [@bs.scope ("chrome", "declarativeContent", "onPageChanged")]
    external addRules: array(Js.Dict.t(array(onPageChangedRule))) => unit =
      "addRules";
  };
};

module Tabs = {
  [@bs.deriving abstract]
  type tab = {id: int};

  [@bs.val] [@bs.scope ("chrome", "tabs")]
  external query: (Js.Dict.t(bool), array(tab) => unit) => unit = "query";

  [@bs.val] [@bs.scope ("chrome", "tabs")]
  external executeScript: (int, Js.Dict.t(string)) => unit = "executeScript";
};