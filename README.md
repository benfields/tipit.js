tipit.js
========

A small jQuery plugin letting you add hover-activated tooltips to your website.

---

### How to use

it's easy to use, just add the <code>tipit</code> file to your websites directory. now you can include the plugin in your page. add this code to the <code>head</code> tag of you webpages main html file.


```html

<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="tipit/tipit.css">
<script type="text/javascript" src="tipit/tipit.js"></script>
```

great! now we just need to add a small piece of JavaScript towards the bottom of you html file. Idealy, this would go right before the closing <code>body</code> tag.

```html
<script>
$(document).ready(function() {
     $('.tip').tipit();
});
</script>
```

that's it. You've included the tipit plugin in your site, now whenever you want yo use it, refer to the code below.

```html
<span class="tip" data-tip="This is the Tool Tip Text">

<!-- whatever is added here will activate the tooltip when a user mouses over it on your page. -->

</span>
```

### Sharing is Caring

this code is licensed under the MIT license which can be found in the LICENSE file in the root of this repo, as well as my personal license, which can be found at the end of this file (README.md)

---

The MIT License (MIT)

Copyright (c) 2013-2015 Ben Fields

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

