document.addEventListener('DOMContentLoaded', function() {
	var b = document.body, xmp, strapdown;
	
	// Hide the page while eviscerating it.
	b.style.display = 'none';
	
	// Set the title, if not empty.
	if (conf.title) document.title += ' - ' + conf.title;

	// Create a script element to fetch Strapdown.js.
	strapdown = document.createElement('script');
	strapdown.setAttribute('src', conf.strapdown ? conf.strapdown : 'http://strapdownjs.com/v/0.2/strapdown.js');

	// Create an XMP element for Strapdown.js to process.
	xmp = document.createElement('xmp'),
	xmp.setAttribute('theme', conf.theme);

	// Loop through the body elements, accumulating text or HTML in the XMP.
	// Mod_autoindex includes the HEADER/README as childless PRE-blocks, so they
	// are accumulated as text. All other elements are accumulated as HTML.
	// 
	// The reason to make the distinction between PRE-blocks with and without children
	// is because mod_autoindex's FancyIndexing option generates the index inside a PRE.
	// The FancyIndex PRE-blocks have many child elements, but HEADER/README PRE-blocks
	// will have no child elements.
	for (var c=b.children, i=0; i < c.length; i++) {
		var e = c[i],
			t = (e.nodeName == 'PRE' && e.children.length == 0) ? e.innerText : e.outerHTML;
		xmp.innerHTML += t + '\n\n';
	}
	
	// Now that everything is copied into the XMP, clear the body.
	while (b.lastChild) { b.removeChild(b.lastChild); }
	
	// Insert the XMP and load Strapdown.js to render it.
	b.appendChild(xmp);
	b.appendChild(strapdown);
});
