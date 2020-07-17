---
title: "A Guide to Node.js Logging"
date: "2017-08-10"
featuredImage: './featured-image.jpg'
---

While you start growing in JavaScript one of the first things you will likely learn is a way to log things to the console using console.log. in case you seek on the way to debug JavaScript, you’ll locate loads of blog posts and StackOverflow articles pointing you to “really” console.log it. And as it’s the sort of not unusual exercise we even started having linter guidelines like no-console to ensure we don’t depart unintended log statements in our manufacturing code. but what if we surely need to log something intentionally to offer more facts?

# When Do You want to Log?

<img src="./image-2.jpg">

Now that we have discovered a bit approximately the underlying tech factor of logging, let’s talk a bit approximately extraordinary use instances in which you would possibly need to log something. commonly those use instances fall into one of the following classes:
- brief debugging of surprising behavior for the duration of development
- Browser-based totally logging for analytics or diagnostics
Logs for your server utility to log incoming requests, as well as any disasters that would have occurred
optionally available debug logs on your library to assist the person with issues
- The output of your CLI to print progress, affirmation messages or mistakes
- we’ll pass the first two on this weblog publish and will consciousness at the 3 Node.js primarily based ones. Follow for more at Nodejs Course


### Your Server utility Logs

There may be a variety of motives why you would possibly want to log matters in your server. Logging incoming requests as an example permit you to extract such things as information out of it, together with how many 404s customers are hitting, what the ones are probably or what person-Agent is getting used. and also you also want to recognize whilst stuff went wrong and why.
if you want to attempt out the matters following in this part of the publish, make certain to create a brand new challenge directory. Create an index.js in the undertaking directory for the code we’re going to use and run the following to initialize a mission and set up specific:
