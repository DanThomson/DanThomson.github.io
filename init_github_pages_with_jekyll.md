
If you are creating docs for a codebase Github recommends putting them in a separate branch.
``` bash
$ git checkout --orphan gh-pages
# Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
$ git rm -rf .
# Removes the contents from your default branch from the working directory

# Create a Jekyll site in the current directory
jekyll new --skip-bundle .
```

Update the `Gemfile` Jekyll created.
    There may already be a line which begins `gem "github-pages"`. Edit that line.
    ``` Gemfile
    gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
    ```
    Replace `GITHUB-PAGES-VERSION` with the version listed for `github-pages` on
    [github pages dependencies](https://pages.github.com/versions/)


Bundle will use the `Gemfile` when you execute:
``` bash
bundle install
```


Edit `_config.yml`. Github recommends updating the following:
``` yaml
domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
```

You'll probably also want to change the [theme](https://pages.github.com/themes/).
jekyll-swiss 1.0.0
jekyll-theme-architect 0.2.0
jekyll-theme-cayman 0.2.0
jekyll-theme-dinky 0.2.0
jekyll-theme-hacker 0.2.0
jekyll-theme-leap-day 0.2.0
jekyll-theme-merlot 0.2.0
jekyll-theme-midnight 0.2.0
jekyll-theme-minimal 0.2.0
jekyll-theme-modernist 0.2.0
jekyll-theme-primer 0.6.0
jekyll-theme-slate 0.2.0
jekyll-theme-tactile 0.2.0
jekyll-theme-time-machine 0.2.0
`pages-themes/cayman@v0.2.0`, `pages-themes/midnight@v0.2.0`, `pages-themes/dinky@v0.2.0`, `pages-themes/hacker@v0.2.0`, `pages-themes/modernist@v0.2.0`, and `pages-themes/tactile@v0.2.0`
`minima`
``` yaml
theme: pages-themes/midnight@v0.2.0
```


After creating a commit you'll need to add a remote location. I
think this is required because of the `--orphan` option.
`git remote add origin https://github.com/USER/REPOSITORY.git`


maybe add this to Gemfile
faraday-retry



bundle exec jekyll serve
