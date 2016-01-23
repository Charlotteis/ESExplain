# ESExplain

:sparkles: Explaining new JavaScript concepts with fun &amp; friendly examples! :sparkles:

![Code of Conduct](https://img.shields.io/badge/%E2%88%9A-Code%20of%20Conduct-orange.svg) ![MIT](https://img.shields.io/badge/license-MIT-blue.svg)

## What is this?

ESExplain is a website containing articles about the features coming to the JavaScript (ECMAScript) language.

## How is this different from other resources out there?

Sometimes learning resources (books, videos, articles) aren't very accessible in their explanations.
I ([@charlotteis][@charlotteis]) don't find `foo` `bar` `baz` examples very helpful to my learning :no_good:.

There are so many ways we can illustrate programming concepts that are more interesting than using a `Car` to explain Object Oriented Programming. Check out this [awesome video][good parts] from [@brnnbrn][@brnnbrn] on making JavaScript learning ~fun~.

ESExplain attempts to make ES2015 onwards an approachable set of concepts, with simple language, emoji and a sprinkling of cake references.

## How do I get involved?

Notice a bug :bug:, want to implement a new feature for the website, or help write an article for it? Check out the [contributing][contributing] guide!

## Working with this project

This project uses [Jekyll][Jekyll], a static site generator, and is served by GitHub Pages.

It uses [Sass][Sass] to write CSS.

It uses JavaScript to do some interactivity, and serve some awesome emoji using [Twemoji] :sparkling_heart:.

### Requirements

* Have [Ruby][Ruby] installed
* Have the [Bundler][Bundler] gem installed

### Running the project locally

* Fork this repository (click the Fork button on the GitHub toolbar)
* Download your forked version locally `git clone git@github.com:Charlotteis/ESExplain.git`
* Go to the repository on your machine `cd ESExplain`
* Install Ruby dependencies with `bundle install`
* Run the website with `jekyll serve --watch --buildurl=''`
* Go to `localhost:4000` in your browser and play with the code! :computer:

#### Notes

* Use `--watch` :eyes: so Jekyll updates the website locally every time you make a change to a file
* Use `--baseurl=''` so URLs are built correctly (GitHub Pages does things a little differently on the live version)

[@charlotteis]: https://twitter.com/charlotteis
[good parts]: https://www.youtube.com/watch?v=2ypYniQa7_o
[@brnnbrn]: https://twitter.com/brnnbrn
[contributing]: CONTRIBUTING.md
[Jekyll]: https://jekyllrb.com/
[Sass]: http://sass-lang.com/
[Twemoji]: https://github.com/twitter/twemoji 
[Ruby]: https://www.ruby-lang.org/en/
[Bundler]: http://bundler.io/

