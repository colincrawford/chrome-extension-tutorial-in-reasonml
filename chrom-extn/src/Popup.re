type changeColor;
let changeColor: changeColor = [%bs.raw
  {| document.getElementById('changeColor') |}
];

let updateChangeColor: (Js.Dict.t(string), changeColor) => unit = [%bs.raw
  {|
  function(data, changeColor) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
    changeColor.onclick = function(element) {
      let color = element.target.value;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
      })
    }
  }
  |}
];

Chrome.Storage.Sync.get("color", data =>
  updateChangeColor(data, changeColor)
);