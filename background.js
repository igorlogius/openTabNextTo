
//const temporary = browser.runtime.id.endsWith('@temporary-addon'); // debugging?
const manifest = browser.runtime.getManifest();
const extname = manifest.name;
const menu_title = "Open tab next to"

browser.menus.create({
  id: extname,
  title: menu_title,
  contexts: ["tab"]
});

browser.menus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === extname) {
		browser.tabs.create({
			index: (tab.index + 1)
		});
	}
});

