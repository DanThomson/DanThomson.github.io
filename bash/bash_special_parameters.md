---
title: Bash Special Parameters
---
   Special Parameters
       The shell treats several parameters specially.  These parameters may only be referenced; assignment to them is not allowed.
       *      Expands to the positional parameters, starting from one.
               When the expansion is not within double quotes, each
               positional parameter expands to a separate word. In
               contexts where it is performed, those words are subject
               to further word splitting and pathname expansion. When
               the expansion occurs within double quotes, it expands to
               a single word with the value of each parameter separated
               by the first character of the IFS special vari‐ able. That
               is, "$*" is equivalent to "$1c$2c...", where c is the
               first character of the value of the IFS variable. If IFS
               is unset, the parameters are separated by spaces. If IFS
               is null, the parameters are joined without intervening
               separators.
       @      Expands to the positional parameters, starting from one. In
               contexts where word splitting is performed, this expands
               each positional parameter to a separate word; if not within
               double quotes, these words are subject to word splitting.
               In contexts where word splitting is not performed, this
               expands to a single word with each positional parameter
               separated by a space. When the expansion occurs within
               double quotes, each parameter ex‐ pands to a separate
               word. That is, "$@" is equivalent to "$1" "$2" ... If the
               double-quoted expansion occurs within a word, the expansion
               of the first parameter is joined with the beginning part of
               the original word, and the expansion of the last parameter
               is joined with the last part of the original word. When
               there are no positional parameters, "$@" and $@ expand to
               nothing (i.e., they are removed).
       #      Expands to the number of positional parameters in decimal.
       ?      Expands to the exit status of the most recently executed foreground pipeline.
       -      Expands to the current option flags as specified upon invocation, by the set builtin command, or those set by the shell itself (such as the -i option).
       $      Expands to the process ID of the shell.  In a () subshell, it expands to the process ID of the current shell, not the subshell.
       !      Expands to the process ID of the job most recently placed into the background, whether executed as an asynchronous command or using the bg builtin.
       0      Expands to the name of the shell or shell script. This is
               set at shell initialization. If bash is invoked with a
               file of commands, $0 is set to the name of that file. If
               bash is started with the -c option, then $0 is set to the
               first argument after the string to be executed, if one
               is present. Otherwise, it is set to the filename used to
               invoke bash, as given by argument zero.
       _     At shell startup, set to the pathname used to invoke the
               shell or shell script being executed as passed in the
               environment or argument list. Subsequently, expands to
               the last argument to the previous simple command executed
               in the foreground, after expansion. Also set to the full
               pathname used to invoke each command executed and placed
               in the environment exported to that command. When checking
               mail, this parameter holds the name of the mail file
               currently being checked.
       BASH   Expands to the full filename used to invoke this instance of bash.

! <command>
command is executed, but it's exit code is inverted.
0->1, all non-zero numbers become 0

echo one two three four five six seven
!!     # The whole command "echo one two thre four five six seven"
!n     # the nth command from the history. Use `history` to see the list
!<somestring> Execute the most recent command which began with somestring
!:^    # referencing the first argument -> "one"
!:$    # referencing the last argument -> "seven"
!:*    # referencing all arguments -> "one two three …. seven"

!:n    # referencing the n-th argument, for example: !:0 -> "echo", !:5 -> "five"
!:x-y  # referencing arguments in the given range, for instance, !:3-5 -> "three four five"

alt-^
alt-shift-6 can perform history expansions in the current command

alt-.    The last argument
alt-n-.  The nth argument
Hold down alt, press n then .
