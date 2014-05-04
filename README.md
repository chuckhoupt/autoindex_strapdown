Autoindex-Strapdown Intro
--------------------------

[Autoindex-Strapdown] enhances Apache's [mod_autoindex] directory listings with
[Markdown] README and HEADER files rendered by [Strapdown.js]. Setup GitHub-like
directory documentation with just Apache!

[Before/After Pics]

### Quick Start

**Simply copy the following into a directory's .htaccess file. Then add a README.md and enjoy:**

<pre style="overflow: auto; white-space: pre; word-wrap: normal;">
<code class="prettyprint"># Standard mod_autoindex directives
Options Indexes
IndexOptions FancyIndexing HTMLTable SuppressRules SuppressIcon SuppressDescription

# Autoindex-Strapdown setup
AddType text/plain .md
HeaderName HEADER.md
ReadmeName README.md
IndexHeadInsert "&lt;script>conf = {theme: 'bootstrap', title: ''};&lt;/script> \
&lt;script>document.addEventListener('DOMContentLoaded', function() { var b = document.body, xmp, strapdown; b.style.display = 'none'; if (conf.title) document.title += ' - ' + conf.title; strapdown = document.createElement('script'); strapdown.setAttribute('src', conf.strapdown ? conf.strapdown : 'http://strapdownjs.com/v/0.2/strapdown.js'); xmp = document.createElement('xmp'), xmp.setAttribute('theme', conf.theme); for (var c=b.children, i=0; i < c.length; i++) { var e = c[i], t = (e.nodeName == 'PRE' && e.children.length == 0) ? e.innerText : e.outerHTML; xmp.innerHTML += t + '\n\n'; } while (b.lastChild) { b.removeChild(b.lastChild); } b.appendChild(xmp); b.appendChild(strapdown); });&lt;/script>&lt;style>table img {margin: 0;}&lt;/style>"
</code></pre>

Customize by setting the `theme` or `title` configuration parameter on the first line of
the `IndexHeadInsert` directive. For example:

`IndexHeadInsert "<script>conf = {theme: 'cyborg', title: 'My Robot Pics'};</script> \`

See the list of [themes available from Strapdown.js][Strapdown.js].

### Adding Icons

Autoindex_strapdown includes a small set of file icons from Bootstap's Glyphicon set.
To setup, download autoindex_strapdown and install it somewhere on your site. Then
use the following for the Standard mod_autoindex directives in your .htaccess file.
Adjust the `/icons/` paths as necessary.

```
# Standard mod_autoindex directive with Icons
Options Indexes
IndexOptions FancyIndexing HTMLTable SuppressRules IconsAreLinks SuppressDescription

DefaultIcon /icons/glyphicon-file.svg
AddIcon /icons/blank.svg ^^BLANKICON^^
AddIcon /icons/glyphicon-folder-open.svg ^^DIRECTORY^^
AddIcon /icons/glyphicon-circle-arrow-up.svg ..
AddIconByType (TXT,/icons/glyphicon-file.svg) text/*
AddIconByType (IMG,/icons/glyphicon-picture.svg) image/*
AddIconByType (SND,/icons/glyphicon-music.svg) audio/*
AddIconByType (VID,/icons/glyphicon-film.svg) video/*

```

### Background

Since time immemorial, the Apache web server has had the ability to serve up directory
listings (indexes), optionally augmented with text or HTML read-me and header files.

GitHub partially emulates Apache's auto-indexes with READMEs, but enhances it by adding
Markdown formatting -- the prefect compromise between plain text and HTML.

In a sense, Autoindex-Strapdown is an attempt to backport GitHub's enhanced emulation of
Apache mod_autoindex back to Apache.

[Autoindex-Strapdown]: http://autoindex-strapdown.habilis.net
[mod_autoindex]: http://httpd.apache.org/docs/2.2/mod/mod_autoindex.html
[Markdown]: https://daringfireball.net/projects/markdown/
[Strapdown.js]: http://strapdownjs.com
