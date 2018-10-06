module Runtime = {
  module OnInstalled = {
    [@bs.val] [@bs.scope ("chrome", "runtime", "onInstalled")]
    external addListener: (unit => unit) => unit = "addListener";
  };
};

module Storage = {
  module Sync = {
    [@bs.val] [@bs.scope ("chrome", "storage", "sync")]
    external set: (Js.Dict.t(string), unit => unit) => unit = "set";

    [@bs.val] [@bs.scope ("chrome", "storage", "sync")]
    external get: (string, Js.Dict.t(string) => unit) => unit = "get";
  };
};

module DeclarativeContent = {
  type pageStateManager;
  type showPageAction;
  type onPageChangedRule =
    | PageStateManager(pageStateManager)
    | ShowPageAction(showPageAction);

  let makeNewPageStateManager: unit => onPageChangedRule = [%bs.raw
    {|
    function() {
      return new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: "developer.chrome.com"}
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