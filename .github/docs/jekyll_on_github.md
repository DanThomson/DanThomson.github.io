# Start a new Github page within an existing repository
[Github Source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

[Another Github Source](https://docs.github.com/en/pages/quickstart)


## **NOTE!** The directions linked in the GitHub documentation are missing a step
Instead use [Jekyllrb's directions](https://jekyllrb.com/docs/)

The warning at the bottom of "Jekyllrb's directions" is particularly important.
> If you are using Ruby version 3.0.0 or higher, step 5 may fail. You may fix it by adding `webrick` to your dependencies:


## Github recommends putting your page source in a separate branch
***Note if this is your first use of Jekyll, you'll need to install it with, `gem install jekyll`.***
``` bash
# Create a new branch, with no history or contents, called gh-pages, and switch to the gh-pages branch.
git checkout --orphan gh-pages

# Remove the contents from your default branch from the working directory.
git rm -rf .

# Create a Jekyll site in the current directory.
jekyll new --skip-bundle .
```


## Customize the default configuration
[Jekyll Configuration](https://jekyllrb.com/docs/configuration/options/)

### Update the `Gemfile` Jekyll created

#### Replace `GITHUB-PAGES-VERSION` with the version listed for `github-pages` on the [github pages dependencies](https://pages.github.com/versions/)
``` Gemfile
gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
```

### Update the bundle by installing gems

#### Before running `bundle install`
***If you installed Jekyll, uninstall it (`gem uninstall jekyll`), so `github-pages` can install the version it uses***

These two lines were missing from the directions I started with. Life was hard.
``` bash
bundle add webrick
gem install github-pages
```

#### Bundle will use the `Gemfile` when you execute:
``` bash
bundle install
```

### Edit `_config.yml`

#### Github recommends updating the following
``` yaml
# _config.yml
domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
```

#### You'll probably also want to change the [theme](https://pages.github.com/themes/)

Prefix one of the following with `jekyll-theme-`

architect, cayman, dinky, hacker, leap-day, merlot, midnight, minimal, modernist, primer, slate, tactile, time-machine
``` yaml
# _config.yml
theme: jekyll-theme-midnight
```
More information about themes at [Github](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).


## Run the site locally
[Github Source](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
``` bash
bundle exec jekyll serve
# Or for update on changes:
bundle exec jekyll serve --livereload
```


## After creating a commit you'll need to add a remote location
I think this is required because of the `--orphan` option used above.
``` bash
git remote add origin https://github.com/USER/REPOSITORY.git
```


## Eventually you'll have to update
``` bash
bundle update github-pages
```
