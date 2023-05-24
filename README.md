# Library

![WhatsSize Logo](/src/images/logo.png)

A clothing and shoe conversion library for Europe, the United States, and Brazil.

# Install

```sh
$ npm install --save whats-size
```

# Techs Involved

- TypeScript
- Jest

# Test

For run tests, use task `test`, on gulp, just like this:

```sh
npm test
```

# Build

For build project, use task `build`, just like this:

```sh
npm run build
```

> The output directory is ./lib/

# Update database

To update the database, first update the file './src/assets/sizes.xls', and then use task 'database' as follows:

```sh
npm run build:db
```

The file './src/db/sizes.json' will be produced once you run the program.

# Using this module in node

```ts
import { convertMenSize } from "whats-size"

const converter = convertMenSize("brazil")
converter.suits("46") // brazil: "36";
```

- To use the `WhatsSizes` as JavaScript

```js
const { convertWomenSize } = require('whats-size')

const converter = convertWomenSize("brl")
converter.skirts("38") // brazil: "346"
```

## How to contribute

Do you have any suggestions or have you discovered a bug?

[See how to contribute](CONTRIBUTING.md)

# Next steps

- Repair database mistakes (sizes.xls)

# License

MIT License [William Sena](http://willsena.dev)

# API Docs

- https://whats-size.willsena.dev/
