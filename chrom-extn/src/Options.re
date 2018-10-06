let page = [%bs.raw {| document.getElementById('buttonDiv') |}];

let kButtonColors = [|"#3aa757", "#e8453c", "#f9bb2d", "#4688f1"|];

let setBackgroundColor = [%bs.raw
  {|
    function(button, color) {
      button.style.backgroundColor = color;
    }
  |}
];

Array.iter(
  color => {
    let button = [%bs.raw {| document.createElement('button') |}];
    setBackgroundColor(button, color);
    button##addEventListener("click", () => {
      let params = Js.Dict.empty();
      Js.Dict.set(params, "color", color);
      Chrome.Storage.Sync.set(params, () => Js.log("color is " ++ color));
    });
    page##appendChild(button);
  },
  kButtonColors,
);