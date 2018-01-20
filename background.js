/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

browser.pageAction.onClicked.addListener(tab =>
	browser.storage.local.get({'url': 'about:blank'}).then(res =>
		browser.tabs.create({active: true, url: res.url})
	)
);

browser.tabs.onCreated.addListener(tab => browser.pageAction.show(tab.id));
browser.tabs.onUpdated.addListener(tabId => browser.pageAction.show(tabId));
browser.tabs.onReplaced.addListener(tabId => browser.pageAction.show(tabId));

browser.tabs.query({})
    .then(tabs => { for (tab of tabs) browser.pageAction.show(tab.id) })