---
---
# Add commandline completion to your command

For this explanation assume your new command is named `sc`,
and `sc` is on your path. We'll also assume you are
replicating the completion of an existing command named
`systemctl`.

Reference:

* [using-the-bash-autocompletion-of-another-command](https://stackoverflow.com/questions/38936716/using-the-bash-autocompletion-of-another-command)

* [what-package-is-responsible-for-bash-completion-for-systemd-systemctl-on-ubuntu](https://askubuntu.com/questions/1044209/what-package-is-responsible-for-bash-completion-for-systemd-systemctl-on-ubuntu)

* [Programmable-Completion-Builtins](https://www.gnu.org/software/bash/manual/html_node/Programmable-Completion-Builtins.html)

* [wayback bash_completion pt1](https://web.archive.org/web/20190328055722/https://debian-administration.org/article/316/An_introduction_to_bash_completion_part_1)
  [wayback bash_completion pt2](https://web.archive.org/web/20140405211529/http://www.debian-administration.org/article/317/An_introduction_to_bash_completion_part_2)

* [configure-bash-auto-completion-tab-completion-on-linux](https://faun.pub/configure-bash-auto-completion-tab-completion-on-linux-db0d9310818b)

* [bash-programmable-completion-tutorial](https://iridakos.com/programming/2018/03/01/bash-programmable-completion-tutorial)

* [creating-bash-completion-script](https://opensource.com/article/18/3/creating-bash-completion-script)


### First find out where to put your custom completion script.
This presumes you've installed `bash-completion`.
``` bash
pkg-config bash-completion --variable compatdir
# On my machine (2023-05-18) that is
/etc/bash_completion.d
```


### Second find out if `systemctl` has a custom completion script.
``` bash
$ complete -p systemctl
```
There are two categories of output from `complete -p <cmd>` The
first tells us the obvious, that there is nothing special about
`systemctl`, and it is completed with bash's default completion.
``` bash
bash: complete: systemctl: no completion specification
```
If this happens check to see if [bash_completion](shorts/bash_completion_setup.md) is being sourced.

The second category of output looks like this:
``` bash
$ complete -p systemctl
complete -F _systemctl systemctl
```
This tells us that bash uses a function named `_systemctl` when
completing the command `systemctl`.


### Third find the `_systemctl` function.
I could tell you a lot about `find` and `grep`, but that would
just waste your time with learning. Instead, just look in
`/etc/share/bash_completion/completions`. There I see a file
`systemctl`, and inside it the function `_systemctl` is defined.


### Fourth create your custom completion file in the directory for custom completions, `/etc/bash_completion.d/`.
``` bash
cat > /etc/bash_completion.d/sc << EndOfFile
#! /usr/bin/env dash
# completion for sc


source /usr/share/bash-completion/completions/systemctl

complete -F _systemctl sc
EndOfFile
```


### Fifth test it or don't. Either way this tutorial is done.
*You may have to source your new completion file before testing.*
