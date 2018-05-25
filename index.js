chrome.storage.local.get(['os'], function (items) {
  var os = items? items.os:false;
  var url = 'change_android.js';
  if (!os) {
    injectjs(url);
  } else {
    url = 'change_' + os + '.js';
    injectjs(url);
  }
});
function injectjs(url) {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL(url);
  s.onload = function () {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}
