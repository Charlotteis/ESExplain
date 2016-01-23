---
layout: page
title: Frequently Asked Questions
permalink: /faq/
---

### What is ECMAScript?

ECMAScript is what is more commonly known as 'JavaScript'. The term 'JavaScript'
is a trademarked name and thus ECMAScript is actually its' official name.

For the community, 'JavaScript' is the popular term.
We'll use 'JavaScript' to refer to the programming language, and 'ECMAScript'
to refer to the language standardisation.

### What is ECMAScript 2015?

ES2015 for short (which used to be known as ES6) is the newest update
to the ECMAScript standard. It defines new features and updates to the language.

It is named ES2015 as the intention is to have ES2016, ES2017 and so forth.
Previous to ES2015; the last formalised ES standard was in 2009 (ES5). Instead
of waiting really long periods between updates to the standard, the TC39 (the
group that works on the ES standards) are trying a yearly approach. This
should mean more regular additions to the language! You can follow the progress
[here][tc39].

### Do I _have_ to use the new features?

Nope! ES2015 is not a completely new version of the language. It is instead
~additions~ to the language, adding in new things and taking nothing away.
If we took away a lot of the older features from JavaScript and replaced
them with newer ones, a lot of websites would break! Although only
allowing people to work with newer improved features would be awesome,
we also don't want to break the web completely.

### Can I use the new features in all browsers?

Not yet. There are many different browsers and they don't all work in the same way.
The teams behind them decide which features to implement first, and thus
there will be disparity between browsers before they are feature complete. Take
a look at each browsers [implementation progress].

Also, the features are only likely to appear in browser updates.
Not everyone has a browser like Chrome that continuously updates, particularly in
more enterprisey corporate worlds. If you have to support older browsers,
ES2015 isn't going to be something you can use straight out of the box.

### But I really want to use these features!

No problem! Many people ~are~ using ES2015 right now, using a transpiler
which takes their ES2015 code and converts it into ES5 (older) code
so it can run on all websites. Although it means you're not really 
using these new features, you're getting used to writing them for when
you can.

An example of a transpiler is [Babel][Babel], Babel is extra cool in that you
can try out code [in the browser][in browser] on their website.

### How can I submit a post to ESExplain?

Thanks so much for wanting to contribute! Check out the [CONTRIBUTING][CONTRIBUTING]
guide on the GitHub repository for this project.

### How can I learn JavaScript?

Don't know how to work with JavaScript yet? Here are some resources for getting started:

* [JavaScript.com][JavaScript.com]: an interactive tutorial
* [JavaScript for Cats][Cats]: an online book
* [Free Code Camp][Free Code Camp]: an interactive tutorial
* [Eloquent JavaScript][Eloquent]: an online book

[tc39]: https://github.com/tc39/ecma262#ecmascript
[progress]: https://kangax.github.io/compat-table/es6/
[Babel]: http://babeljs.io/
[in browser]: http://babeljs.io/repl/
[CONTRIBUTING]: https://github.com/Charlotteis/ESExplain/blob/gh-pages/CONTRIBUTING.md
[JavaScript.com]: https://www.javascript.com/
[Cats]: http://jsforcats.com/
[Free Code Camp]: http://freecodecamp.com
[Eloquent]: http://eloquentjavascript.net/
