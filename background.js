
//const temporary = browser.runtime.id.endsWith('@temporary-addon'); // debugging?
const manifest = browser.runtime.getManifest();
const extname = manifest.name;

browser.menus.create({
  id: extname,
  title: "Open new tab next to current",
  contexts: ["tab"]
});

browser.menus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId == extname) {
		browser.tabs.create({
			index: (tab.index + 1)
		});
	}
});

