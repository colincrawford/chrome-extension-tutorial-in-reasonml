let setStyle: (Dom.element, string, string) => unit = [%bs.raw
  {|
  function(element, styleKey, styleVal) {
    element.style[styleKey] = styleVal;
  }
|}
];

let setAttribute: (Dom.element, string, string) => unit = [%bs.raw
  {|
  function(element, attr, val) {
    element.setAttribute(attr, val);
  }
|}
];

let addEventListener: (Dom.element, string, Dom.event => unit) => unit = [%bs.raw
  {|
  function(element, eventName, listener) {
    element.addEventListener(eventName, listener);
  }
|}
];

let appendChild: (Dom.element, Dom.element) => unit = [%bs.raw
  {|
  function(element, child) {
    element.appendChild(child);
  }
|}
];