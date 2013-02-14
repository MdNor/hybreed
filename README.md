[![Build Status](https://secure.travis-ci.org/MdNor/hybreed.png)](http://travis-ci.org/MdNor/hybreed)

Fork of [DuckDuckGoog by Mike Crittenden](https://github.com/mikecrittenden/duckduckgoog)

![image](http://i.imgur.com/rABuj.png)

Localization
---

This is localized version using Google Malaysia as default search engine

live demo : [http://www.hybreed.co.cc](http://www.hybreed.co.cc)


How To Use
---

If you need to change the default search engine, just change this line on app.js
	
	https://encrypted.google.com/search?q=

with your preferred search engine, for example to use Bing

	www.bing.com/search?q=

You can also change DuckDuckGo !bang with Blekko slashtag, just change this

	if (query.match(/![A-Za-z0-9]+/)) {
      console.log('Queried DuckDuckGo');
      res.redirect('https://duckduckgo.com?q=' + encQuery);
    }

with

	if (query.match(/\/[A-Za-z0-9]+/)) {
      console.log('Queried Blekko');
      res.redirect('https://blekko.com/ws/' + query);
    }


How To Deploy
---

The simplest is by using Heroku. 

1. Register new account with Heroku if you don't have one

2. Follow this [Getting Started](https://devcenter.heroku.com/articles/quickstart) guide

3. Continue with [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/nodejs)


