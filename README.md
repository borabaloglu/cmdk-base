# ⌘K Base

![](./static/og.jpg)

[![npm version](https://flat.badgen.net/npm/v/cmdk-base?color=green)](https://npmjs.com/package/cmdk-base)
[![npm downloads](https://flat.badgen.net/npm/dm/cmdk-base?color=green)](https://npmjs.com/package/cmdk-base)
[![license](https://flat.badgen.net/github/license/borabaloglu/cmdk-base?color=green)](https://github.com/borabaloglu/cmdk-base/blob/main/LICENSE)

⌘K Base is a Fast, composable, unstyled command menu for React, built with Base UI.

This is a port of [⌘K](https://github.com/pacocoursey/cmdk) to Base UI. It's originally created by [Paco Coursey](https://paco.me/).

## Usage

To start using ⌘K Base, install it in your project:

```bash
npm install cmdk-base
```

Use the Command in your application:

```tsx
import { Command } from "cmdk"

function CommandMenu() {
  return (
    <Command label="Command Menu">
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command>
  )
}
```

## Documentation

You can use original [⌘K documentation](https://github.com/pacocoursey/cmdk) for more information.
