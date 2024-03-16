
var _browser = chrome;
var GA_TRACKING_ID = 'UA-112771980-1';


// Helpers

function uuidv4 () {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}


// New tab

function openNewTab (url) {
  _browser.tabs.create({
    url: url
  });
}


// Context Menu

_browser.contextMenus.create({
  id: "verify-link",
  title: 'Bingle Proxy',
  contexts: ["link"]
});

_browser.contextMenus.onClicked.addListener(function(info, tab) {
  var url = 'https://www.bingle.pw/' + info.linkUrl + '&submit=1';
  openNewTab(url);
});



// Toolbar button

_browser.browserAction.onClicked.addListener(function () {
  openNewTab('https://www.bingle.pw');
});
