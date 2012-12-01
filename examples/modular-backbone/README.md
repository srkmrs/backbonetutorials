# Organizing your application using Modules (require.js)

Unfortunately Backbone.js does not tell you how to organize your code, leaving many developers in the dark regarding how to load scripts and lay out their development environments.

This was quite a different decision to other JavaScript MVC frameworks who were more in favor of setting a development philosophy. Hopefully this tutorial will allow you to build a much more robust project with great separation of concerns between design and code.

This tutorial will get you started on combining <a href="http://backbonejs.org/" target="_blank">Backbone.js</a> with AMD (Asynchronous Module Definitions) through <a href="http://requirejs.org/" target="_blank">Require.js</a>. In addition to Require.js,  <a href="https://github.com/requirejs/text">Text.js</a> plays a significant role by loading the html templates and preparing them for the underscore templating process.   

# How to run r.js and optimize this example

$ node r.js -o build.js

see ([http://requirejs.org/docs/optimization.html](http://requirejs.org/docs/optimization.html)) to learn how to create build.js file and use node to run r.js

Once you're finished developing your application, you'll want to use r.js to minify and concatenate all the js files into one js file which will result in one http request instead of multiple ones for each js file in your project. If you look at index-prod.html vs index.html, you will notice there is a single minified/concatendated js file instead of the require pattern which you'll use as you develop. 

Thomas Davis - [@neutralthoughts](http://twitter.com/neutralthoughts) - Twitter

*   [@neutralthoughts](http://twitter.com/neutralthoughts) on twitter
*   GitHub - https://github.com/thomasdavis
*   thomasalwyndavis@gmail.com

**Projects:**

*   JavaScript Library CDN - http://cdnjs.com
*   Backbone.js Tutorials - http://backbonetutorials.com
*   Proposal Generation Start up - http://protosal.com
*   Technical Blog - http://thomasdavis.github.com
*   Quora - http://www.quora.com/Thomas-Davis
*   StackOverflow - http://stackoverflow.com/users/580675/thomas-davis

Love you mum!
<img alt="Clicky" width="1" height="1" src="//in.getclicky.com/66606907ns.gif" />