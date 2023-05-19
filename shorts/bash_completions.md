# Add commandline completion to your command

For this explanation assume your new command is named `sc`,
and `sc` is on your path. We'll also assume you are
replicating the completion of an existing command named
`systemctl`.

Reference:

* [what-package-is-responsible-for-bash-completion-for-systemd-systemctl-on-ubuntu](https://askubuntu.com/questions/1044209/what-package-is-responsible-for-bash-completion-for-systemd-systemctl-on-ubuntu)

* [Programmable-Completion-Builtins](https://www.gnu.org/software/bash/manual/html_node/Programmable-Completion-Builtins.html)


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
# There are two categories of output from complete -p <cmd>
# The first tells us the obvious, that there is nothing special
# about sample_is_too_long_to_type, and it is completed with
# bash's default completion
bash: complete: systemctl: no completion specification
# If this happens check to see if [bash_completion](shorts/bash_completion_setup.md) is being source.

# The second category of output looks like this:
$ complete -p systemctl
complete -F _systemctl systemctl
```
This tells us that bash uses a function named `_systemctl` when completing the command `systemctl`.


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
