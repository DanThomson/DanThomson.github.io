# Brief and *uninformed* overview of setting up `ruby` and `jekyll` on Archlinux
You should probably just read Arch's [documentation](https://wiki.archlinux.org/title/ruby).


## Install the ruby package
``` bash
yay -S ruby base-devel
# Optional: `irb-ruby` for enhanced ruby REPL
```
`base-devel` is used by [Jekyll](https://jekyllrb.com/docs/installation/other-linux/).

Help for the following env vars at [thinkerbot](https://gist.github.com/thinkerbot/668037).

Update the source of your environment variables to set these.
```
# On Arch `GEM_HOME` and `GEM_PATH` are:
# $HOME/.local/share/gem/ruby/3.0.0/

export GEM_HOME="$(ruby -e 'puts Gem.user_dir')"
export GEM_PATH=""

export PATH="$PATH:$GEM_HOME/bin"
```


## Next install ~~Jekyll~~ and Bundler gems for your user
*Do not install Jekyll* at least not at this stage.

You'll end up with a version of Jekyll which does not match the version required by Github Pages.
``` bash
# gem install jekyll bundler  # Don't do this!
gem install bundler           # Do this instead
```
[Source](https://jekyllrb.com/docs/installation/ubuntu/)
