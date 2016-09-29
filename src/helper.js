export function loadPluginFromUrl(url) {
  var script = document.createElement('script');
  script.setAttribute('src', url);
  document.head.appendChild(script);
}

export function isSamePlugins(p1, p2) {
  if (p1.length != p2.length) {
      return false;
    }
    var isSame = true;
    p1.forEach(x => {
      if (p2.find(y => y.name === x.name)) {
      } else {
        isSame = false;
      }
    });
    return isSame;
}