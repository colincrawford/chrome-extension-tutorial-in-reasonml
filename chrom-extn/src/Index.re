/*
 ReactDOMRe.renderToElementWithId(<Component1 message="Hello!" />, "index1");

 ReactDOMRe.renderToElementWithId(<Component2 greeting="Hello!" />, "index2");
 */
let myMap = Js.Dict.empty();
Js.Dict.set(myMap, "color", "green");
Chrome.Runtime.OnInstalled.addListener(() =>
  Chrome.Storage.Sync.set(myMap, () => Js.log(myMap))
);

let rules: Js.Dict.t(array(Chrome.DeclarativeContent.onPageChangedRule)) =
  Js.Dict.empty();

Js.Dict.set(
  rules,
  "conditions",
  [|Chrome.DeclarativeContent.makeNewPageStateManager()|],
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