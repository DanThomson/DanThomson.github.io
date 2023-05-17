# Bash conditionals


## Test the value of a variable
``` bash
if [[ "$XDG_SESSION_TYPE" == "wayland" ]]; then
  export term=kitty
fi
```
