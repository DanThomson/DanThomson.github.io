Brief and *uninformed* overview of setting up `ruby` and `jekyll` on Archlinux.

You should probably just read Arch's [documentation](https://wiki.archlinux.org/title/ruby)


``` bash
yay -S ruby base-devel
# Optional: `irb-ruby` for enhanced ruby REPL
```


Help for the following env vars at [thinkerbot](https://gist.github.com/thinkerbot/668037).


Update the source of your environment variables to set these.
```
export GEM_HOME="$(ruby -e 'puts Gem.user_dir')"
export PATH="$PATH:$GEM_HOME/bin"
```


``` kruft
# Setup GEM_PATH env var.
#   The following may be good, but this has not been confirmed.
# export GEM_PATH="$HOME/.local/share/gem/ruby/3.0.0/"
```


Next install jekyll and bundler gems for your user.
``` bash
gem install jekyll bundler
```
