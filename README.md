# betterfinder-mod-size-heat

[![release](https://img.shields.io/github/v/release/bryanthaboi/betterfinder-mod-size-heat)](https://github.com/bryanthaboi/betterfinder-mod-size-heat/releases)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![betterfinder](https://img.shields.io/badge/betterfinder-mod-8a5cf6)](https://github.com/bryanthaboi/betterfinder)

directory opus / windirstat vibes. a heat column w a little bar showing how heavy each item is.

## how to read it

- half a block per step: 1 MB, 3 MB, 10 MB, 30 MB, 100 MB, 300 MB, 1 GB, 3 GB, 10 GB, 30 GB
- `░░░░░` is under 1 MB, `█████` is 30 GB and up
- its a fixed scale, so the same size always draws the same bar, in any folder
- folders use their real measured size. `·····` means betterfinder hasnt measured that folder yet, it fills in when the size lands
- sortable by true size

## grants

- `ui.selection`: metadata, to read item sizes and folder totals
- `ui`: column

has a test in `tests/`. needs betterfinder v0.1.23 or newer for folder totals.

## install

browse tab in betterfinder settings, or grab `size-heat.bfmod` from the [latest release](https://github.com/bryanthaboi/betterfinder-mod-size-heat/releases/latest). nothing turns on until u approve the grants.

## build it urself

```sh
betterfinder-mod validate .
betterfinder-mod package . --out size-heat.bfmod
```

mit. do whatever.
