# CSS Selector Tree

> A small helper to split CSS selectors into subjects and conditions

[![Build Status](https://travis-ci.org/rasshofer/cssSelectorTree.svg)](https://travis-ci.org/rasshofer/css-selector-tree)
[![Coverage Status](https://coveralls.io/repos/github/rasshofer/css-selector-tree/badge.svg)](https://coveralls.io/github/rasshofer/css-selector-tree)
[![Dependency Status](https://david-dm.org/rasshofer/css-selector-tree/status.svg)](https://david-dm.org/rasshofer/css-selector-tree)
[![Dependency Status](https://david-dm.org/rasshofer/css-selector-tree/dev-status.svg)](https://david-dm.org/rasshofer/css-selector-tree)

## Installation

```shell
npm install css-selector-tree --save-dev
```

## API

### cssSelectorTree.tree(selector)

Accepts a CSS selector and returns its tree (subject and conditions).

In case no valid CSS selector is provided, `false` is returned.

### cssSelectorTree.subject(selector)

Accepts a CSS selector and returns its subject.

In case no valid CSS selector is provided, `false` is returned.

### cssSelectorTree.conditions(selector)

Accepts a CSS selector and returns its conditions.

In case no valid CSS selector is provided, `false` is returned.

## Changelog

* 0.0.1
  * Initial version

## License

Copyright (c) 2016 [Thomas Rasshofer](http://thomasrasshofer.com/)  
Licensed under the MIT license.

See LICENSE for more info.
