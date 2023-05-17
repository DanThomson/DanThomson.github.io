# DanThomson.github.io


## important documentation for _config.yml
[Jekyll configuration](https://jekyllrb.com/docs/configuration/options/)



## Before running `bundle install`
``` bash
gem install github-pages  # So the required version of Jekyll is used
bundle add webrick        # Jekyll couldn't find webrick. This should probably be in the Gemfile. This should be verified.
```
[HOWTO github pages documentation](init_github_pages_with_jekyll.md)
[HOWTO install ruby](init_github_pages_with_jekyll.md)

## Run the site locally for development.
``` bash
bundle exec jekyll serve
```
