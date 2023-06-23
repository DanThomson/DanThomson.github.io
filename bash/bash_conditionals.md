---
---
# Bash conditionals

## [bash_conditional_statement](https://linuxhint.com/bash_conditional_statement/)

## Basic forms for conditionals

### Multi line
``` bash
if test -f '/etc/profile'
then
    echo 'profile exists'
fi
# Or
if test -f '/etc/profile'; then
    echo 'profile exists'
fi
# Or
if [ -f '/etc/profile' ]
then
    echo 'profile exists'
fi
```

### One liner
``` bash
if [ -f '/etc/profile' ]; then echo 'profile exists'; fi
# Or
[ -f '/etc/profile' ] && echo 'profile exists'
# Or
if test -f '/etc/profile'; then echo 'profile exists'; fi
```

## `test` vs square brackets etc
### `[` is an alias for `test` builtin
``` bash
if test -f /etc/profile; then
    echo 'The file /etc/profile exists'
fi
# Is the same as
if [ -f /etc/profile ]; then
    echo 'The file /etc/profile exists'
fi
```
Just think of the brackets as a call to `test`. Worth noting is
that `test` expects two operands, and will fail when given only
one e.g.
``` sh
if [ $MY_SET_VAR = $MY_UNSET_VAR ]
then
    echo 'I won't print'
else
    echo 'I won't either'
fi
```

### What about `[[`
``` ksh
if [[ -f filename ]]; then echo 'filename exists!'; fi
```
`[[` is the new upgraded version of test. It's from ksh, and
bash, zsh, yash, busybox sh also support it. This form is needed
for checking if a string matches a wildcard pattern (but not
on busybox sh). It is also recommended by many experienced
programmers. It is not a call to `test`, and consequentially
supports unary tests. It also allows for more C-like syntax with
`>`, `<`, `>=`, `<=`, `!=`, `==`, `&&`, and `||` operators.

`[[` is **not** supported on `dash` **:-(**

More about the differences between \[ and \[\[ [here](https://unix.stackexchange.com/questions/32210/why-does-parameter-expansion-with-spaces-without-quotes-work-inside-double-brack)

### And there are still more
``` bash
if (command); then echo 'Truth!'; fi
```
Runs command in a subshell.

``` bash
if command; then echo 'Truth!'; fi
```
Runs command and responds to exit code. This is the first form
shown on this page. The only difference is test was replaced by
`command` to show any command which sets an exit code can be used.

For every form listed above exit code 0 is treated as true.

### The weird one
``` ksh
if (( arithmatic )); then echo 'Math!'; fi
# e.g.
if (( 1+1 )); then echo 'True! exit code 0'; fi
```
This is in `bash` and `zsh`. However, because it is not posix, it
is not as portable. As the result of the arithmetic, an exit code
is set and the if statement acts accordingly. It returns an exit
code of zero (true) if the result of the arithmetic calculation is
nonzero.



## Test the value of a variable
``` bash
if [[ "$XDG_SESSION_TYPE" == "wayland" ]]; then
  export term=kitty
fi
```


## Some of the operators
``` bash
-eq	 # Returns true if two numbers are equivalent
-lt	 # Returns true if a number is less than another number
-gt	 # Returns true if a number is greater than another number
==	 # Returns true if two strings are equivalent
!=	 # Returns true if two strings are not equivalent
!	 # Returns true if the expression is false
-d	 # Check the existence of a directory
-e	 # Check the existence of a file system object (directory, file, link, etc).
-f   # Check the existence of a file
-r	 # Check the existence of a file and read permission
-w	 # Check the existence of a file and write permission
-x	 # Check the existence of a file and execute permission
-n   # String is not null
-z   # String has zero length, i.e. string is null
-L   # True if param is a symbolic link. Only works when the fso does not have a trailing '/'

     # From man dash(1)
-b   # True if file exists and is a block special file.
```
[Operator reference](https://tldp.org/LDP/abs/html/comparison-ops.html)


### Examples
``` bash
# -f does not pass if param is a directory
if [ -f /etc/profile.d ]; then
    echo "This won't be printed"
fi

if [ -d /etc/profile ]; then
    echo "This won't be printed, either"
fi
```
TODO: tests with `-x` and directories
