var page2 = $('#navcnt').find('a').eq(0).attr('href');

function save_links() {
var linksget = $('.r');
var links = [];
linksget.each(function() {
	links.push($(this).find('a').eq(0).attr('href'));
});
  chrome.storage.sync.set({
	'links' : links
	}, function() {
		console.log('saved');
  });
}


