# betterfinder-mod-size-heat

[![release](https://img.shields.io/github/v/release/bryanthaboi/betterfinder-mod-size-heat)](https://github.com/bryanthaboi/betterfinder-mod-size-heat/releases)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![betterfinder](https://img.shields.io/badge/betterfinder-mod-8a5cf6)](https://github.com/bryanthaboi/betterfinder)

directory opus / windirstat vibes. a heat column with a little text bar showing how big each item is next to its siblings.

## grants

- `ui.selection`: metadata, to read item sizes (the cli warns this is unused, it isnt, sizes need it)
- `ui`: column

`█████` is the biggest thing in view, every order of magnitude smaller loses a block, `░░░░░` is empty. sortable. pure bfscript, no js. has a test in `tests/`.

## install

browse tab in betterfinder settings, or grab `size-heat.bfmod` from the [latest release](https://github.com/bryanthaboi/betterfinder-mod-size-heat/releases/latest). nothing turns on until u approve the grants.

## build it urself

```sh
betterfinder-mod validate .
betterfinder-mod package . --out size-heat.bfmod
```

mit. do whatever.
