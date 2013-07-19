tipit.js
========

A small jQuery plugin letting you add hover-activated tootips to your website.
            {
         }   }   {
        {   {  }  }
         }   }{  {
        {  }{  }  }                   _ 
       ( }{ }{  { )                  | |                  
     .- { { }  { }} -.               | |     ___     __     __    ___
    (  ( } { } { } }  )              | |    / _ \    \ \   / /   / _ \ 
    |`-..________ ..-'|           _  | |   | (_) \    \ \_/ /   | (_) \ 
    |                 |          / \_/ /    \___\_\    \___/     \___\_\ 
    |                 ;--.       \____/
    |                (__  \            _____           _       _
    |                 | )  )          / ____|         (_)     | |
    |                 |/  /          | (___   ___ _ __ _ _ __ | |_
    |                 (  /            \___ \ / __| '__| | '_ \| __|
    |                 |/              ____) | (__| |  | | |_) | |_
    |                 |              |_____/ \___|_|  |_| .__/ \__|
     `-.._________..-'                                  | |
                                                        |_|


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

that's it. You've included the tipit plugin in your site, now whenever you want yo use it, refer to the code below.

```html
<span class="tip" data-tip="This is the Tool Tip Text">

<!-- whatever is added here will activate the tooltip when a user mouses over it on your page. -->

</span>
```

### Sharing is Caring

this code is licensed under the MIT license which can be found in the LICENSE file in the root of this repo, a well as my personal license, which can be found at the end of this file (README.md)

========

### My License

The resources found here can be used freely in personal and commercial projects if integrated and built upon. If using this code, I expect that you let your users know that the source is available on GitHub, and tell them how to find it. This can be done in the form of a link. 

Please do not create templates based on my code unless you are granted permission by me first. You are not allowed to take my work “as-is” and sell it, but feel free redistribute it for free. If you want to publish or sell extensions or ports (including WordPress plugins) out of my work, please contact me and ask for permission first. I'd like to see what’s being done and evaluate each request. 

Please, respect the licenses of the resources (audio, video, images, or external links) that might be found through out. If you write about some of my work I would like you to credit me.

##### Summarized, write about it, integrate it, make it your own, but don’t copy and paste my work and sell it or claim that it’s yours.
