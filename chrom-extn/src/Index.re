/*
 ReactDOMRe.renderToElementWithId(<Component1 message="Hello!" />, "index1");

 ReactDOMRe.renderToElementWithId(<Component2 greeting="Hello!" />, "index2");
 */
let extensionData = Chrome.storageData(~color="green");

Chrome.Runtime.OnInstalled.addListener(() =>
  Chrome.Storage.Sync.set(extensionData, () => Js.log(extensionData))
);

let rules: Js.Dict.t(array(Chrome.DeclarativeContent.onPageChangedRule)) =
  Js.Dict.empty();

Js.Dict.set(
  rules,
  "conditions",
  [|
    Chrome.DeclarativeContent.makeNewPageStateManager("developer.chrome.com"),
  |],
);

Js.Dict.set(
  rules,
  "actions",
  [|Chrome.DeclarativeContent.makeNewShowPageAction()|],
);

let rulesArr = [|rules|];

Chrome.DeclarativeContent.OnPageChanged.removeRules(Js.undefined, () =>
  Chrome.DeclarativeContent.OnPageChanged.addRules(rulesArr)
);