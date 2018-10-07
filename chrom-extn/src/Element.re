let setStyle: (Dom.element, string, string) => Dom.element = [%bs.raw
  {|
  function(element, styleKey, styleVal) {
    element.style[styleKey] = styleVal;
    return element;
  }
|}
];

let setAttribute: (Dom.element, string, string) => Dom.element = [%bs.raw
  {|
  function(element, attr, val) {
    element.setAttribute(attr, val);
    return element;
  }
|}
];

let addEventListener: (Dom.element, string, Dom.event => unit) => Dom.element = [%bs.raw
  {|
  function(element, eventName, listener) {
    element.addEventListener(eventName, listener);
    return element;
  }
|}
];

let appendChild: (Dom.element, Dom.element) => Dom.element = [%bs.raw
  {|
  function(element, child) {
    element.appendChild(child);
    return element;
  }
|}
];