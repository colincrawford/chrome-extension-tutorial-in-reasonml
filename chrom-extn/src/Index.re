/*
 ReactDOMRe.renderToElementWithId(<Component1 message="Hello!" />, "index1");

 ReactDOMRe.renderToElementWithId(<Component2 greeting="Hello!" />, "index2");
 */
let extensionData = Chrome.storageData(~color="green");

Chrome.Runtime.OnInstalled.addListener(() =>
  Chrome.Storage.Sync.set(extensionData, () => Js.log(extensionData))
);

let pageUrl =
  Chrome.DeclarativeContent.host(~hostEquals="developer.chrome.com");

let pageStateMatcherParams = Chrome.DeclarativeContent.page(~pageUrl);

let rules = [|
  Chrome.DeclarativeContent.OnPageChanged.rule(
    ~conditions=[|
      Chrome.DeclarativeContent.pageStateMatcher(pageStateMatcherParams),
    |],
    ~actions=[|Chrome.DeclarativeContent.showPageAction()|],
  ),
|];

Chrome.DeclarativeContent.OnPageChanged.removeRules(Js.undefined, () =>
  Chrome.DeclarativeContent.OnPageChanged.addRules(rules)
);