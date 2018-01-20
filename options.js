browser.storage.local.get({'url': 'about:blank'}).then(res =>
	document.getElementById('url').value = res.url
)
document.getElementById('url').onchange = () =>
	browser.storage.local.set({url: document.getElementById('url').value})