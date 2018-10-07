let getChangeColorClickedValue: Dom.event => string = [%bs.raw
  {|
  function(event) {
    return event.target.value;
  }
|}
];

let setCurrentActiveWindowColor: (string, array(Chrome.Tabs.tab)) => unit =
  (color, tabs) =>
    if (Array.length(tabs) > 0) {
      let firstTabId = Chrome.Tabs.idGet(tabs[0]);
      let code = "document.body.style.backgroundColor = '" ++ color ++ "';";
      let scriptOptions = Chrome.Tabs.scriptOptions(~code);
      Chrome.Tabs.executeScript(firstTabId, scriptOptions);
    };

let handleChangeColorClicked: Dom.event => unit =
  event => {
    let clickedColor = getChangeColorClickedValue(event);
    let queryOptions =
      Chrome.Tabs.queryOptions(~active=true, ~currentWindow=true);
    Chrome.Tabs.query(
      queryOptions,
      setCurrentActiveWindowColor(clickedColor),
    );
  };

Chrome.Storage.Sync.get("color", data => {
  let color = Chrome.colorGet(data);
  let _ =
    Document.getElementById("changeColor")
    ->Element.setStyle("backgroundColor", color)
    ->Element.setAttribute("value", color)
    ->Element.addEventListener("click", handleChangeColorClicked);
  ();
});