# DanThomson.github.io source

## This is the source for [my github page](https://DanThomson.github.io).
## The information contained here is for the author's own use.
## Everything on this page should be considered and untested work in progress.

## Installation require for local development of GitHub Pages.
NOTE! The directions linked in the GitHub documentation is missing some steps.
[More Complete directions](https://jekyllrb.com/docs/)
The warning at the bottom are particularly important.

"If you are using Ruby version 3.0.0 or higher, step 5 may fail. You may fix it by adding webrick to your dependencies: `bundle add webrick`"


[Jekyll configuration](https://jekyllrb.com/docs/configuration/options/)
[HOWTO github pages](init_github_pages_with_jekyll.md)
[HOWTO install ruby](install_ruby_and_jekyll.md)



### Before running `bundle install`
``` bash
bundle add webrick
gem install github-pages
```



### Run the site locally.
``` bash
bundle exec jekyll serve

# Or for update on changes:
bundle exec jekyll serve --livereload
```



### Eventually you'll have to update
``` bash
bundle update github-pages
```
