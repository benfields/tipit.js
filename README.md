tipit.js
========

A small jQuery plugin letting you hover-activated tootips to your site.

========

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
