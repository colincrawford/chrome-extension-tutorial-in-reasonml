let changeColor: Dom.element = Document.getElementById("changeColor");

let getChangeColorClickedValue: Dom.event => string = [%bs.raw
  {|
  function(event) {
    return event.target.value;
  }
|}
];

let handleChangeColorClicked: Dom.event => unit =
  event => {
    let clickedColor = getChangeColorClickedValue(event);
    let queryOptions = Js.Dict.empty();
    Js.Dict.set(queryOptions, "active", true);
    Js.Dict.set(queryOptions, "currentWindow", true);
    Chrome.Tabs.query(queryOptions, tabs =>
      if (Array.length(tabs) > 0) {
        let firstTabId = Chrome.Tabs.idGet(tabs[0]);
        let scriptOptions = Js.Dict.empty();
        Js.Dict.set(
          scriptOptions,
          "code",
          "document.body.style.backgroundColor = '" ++ clickedColor ++ "';",
        );
        Chrome.Tabs.executeScript(firstTabId, scriptOptions);
      }
    );
  };

Chrome.Storage.Sync.get("color", data => {
  let color = Chrome.colorGet(data);
  Element.setStyle(changeColor, "backgroundColor", color);
  Element.setAttribute(changeColor, "value", color);
  Element.addEventListener(changeColor, "click", handleChangeColorClicked);
});