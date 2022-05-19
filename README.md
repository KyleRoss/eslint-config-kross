# eslint-config-kross

![npm](https://img.shields.io/npm/v/eslint-config-kross) ![npm](https://img.shields.io/npm/dt/eslint-config-kross) ![GitHub](https://img.shields.io/github/license/KyleRoss/eslint-config-kross)

Modular ESLint configurations used for various projects to keep code consistent. These ESLint configurations utilize [eslint-config-xo-space](https://github.com/xojs/eslint-config-xo-space) under the hood and adjusts a handful of rules to relax the strictness. Given that this configuration is modular, you are able to use the pieces that you need for your project.

You will always start off by extending one of the [Base Configs](#base-configs) and layer in any [Submodules](#submodules) you need.



## Install

Install with NPM:

```shell
npm i --save-dev eslint-config-kross
```

Install with Yarn:

```shell
yarn add --dev eslint-config-kross
```



### Requirements

This documentation assumes that you have `eslint` installed as a `devDependency` within your project. If you do not, be sure to install `eslint` version 8.14.0 or higher:

NPM:

```shell
npm i --save-dev eslint
```

Yarn:

```shell
yarn add --dev eslint
```



## Usage

You will need to create an ESLint configuration file within the root of your project. You may use JS, JSON, or YAML for this configuration file, although I recommend YAML and what the examples below will be written in.

1. Create `.eslintrc.yml` in the root of your project. (Don't forget the dot at the beginning!)

2. Open `.eslintrc.yml` in your favorite editor.

3. Copy and paste the following base into the file:
   ```yaml
   ---
   root: true
   
   extends:
     - 'kross'
   ```

4. Manipulate the `extends` array to set your desired [Base Config](#base-configs) and optionally, any [Submodules](#submodules) you need.

5. Save the file and run `eslint` to see any linting errors, if applicable.



## Configurations

This package comes with a handful of different configurations that you may use with ESLint and they are separated into 2 categories; base configs and submodules.



### Base Configs

You should always select **ONE** base config for your project. These configs contain all of the important, base rules and settings for ESLint that can have additional functionality layered in with submodules. Using more than one base config in your project could lead to undesired results. Below is a list of the available base configs:



#### kross [[Source](./blob/main/index.js)]

This is the root level config that other base configs are extended from. It contains the most basic settings and rule overrides for ESLint as well as [eslint-config-xo-space](https://github.com/xojs/eslint-config-xo-space). Unless what you are working on does not fit any of the base configs available, you shouldn't use this particular base config.

```yaml
extends:
  - 'kross'
```



#### kross/node [[Source](./blob/main/node.js)]

Base config for Node.js applications.

```yaml
extends:
  - 'kross/node'
```



#### kross/browser [[Source](./blob/main/browser.js)]

Base config for any browser applications/websites. Useful for vanilla JS or extending upon for a framework that is not supported in these configurations.

```yaml
extends:
  - 'kross/browser'
```



#### kross/react [[Source](./blob/main/react.js)]

Base config for typical React applications which extends `kross/browser`. Adds in [eslint-config-xo-react](https://github.com/xojs/eslint-config-xo-react) for various rules, [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) for accessibility checking, and various rule overrides.

```yaml
extends:
  - 'kross/react'
```



#### kross/next [[Source](./blob/main/next.js)]

Base config for Next.js applications which extends `kross/react`. Adds in support for CSS Modules and rules from [eslint-plugin-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next). **Note:** If you are using babel with Next.js, you'll also need to use the `kross/babel` submodule as well.

```yaml
extends:
  - 'kross/next'
```



### Submodules

Submodules contain various ESLint configurations, plugins, and rules that supplement the base configs. These submodules themselves do not extend any of the base configs, but any number of them can be used alongside a base config depending on the functionality you need. Below is a list of available submodules:



#### kross/babel [[Source](./blob/main/babel.js)]

Implements the [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) instead of the default ESLint parser. This should be used in any cases where you of the framework is using babel to transpile code.



#### kross/tailwindcss [[Source](./blob/main/tailwindcss.js)]

Adds linting support for projects that utilize [TailwindCSS](https://tailwindcss.com/). This submodule includes various rules and overrides for Tailwind.



#### kross/storybook [[Source](./blob/main/storybook.js)]

Adds support for projects that include [Storybook](https://storybook.js.org/), specifically those that use the MDX story format. This submodule adds rules and overrides specifically for any `.mdx` files within your project.



## Common Recipes

Below are some examples of common combinations of base configs and submodules for various project types.



### Next.js + TailwindCSS + Storybook

```yaml
---
root: true

extends:
  - 'kross/next'
  - 'kross/babel'
  - 'kross/tailwindcss'
  - 'kross/storybook'
```

*The babel submodule is included in the example above given a lot of Next.js applications are still using babel over swc. If you are using swc, you may remove the `kross/babel` submodule from the config.*



### Node App + Babel

```yaml
---
root: true

extends:
  - 'kross/node'
  - 'kross/babel'
```



### Basic Node App

```yaml
---
root: true

extends:
  - 'kross/node'
```



### Create React App (without Babel) + TailwindCSS

```yaml
---
root: true

extends:
  - 'kross/react',
  - 'kross/tailwindcss'
```





## Customizing

There will likely be times you wish to customize, change, or add functionality, rules, and plugins to ESLint that this module does not support. You can add anything you wish to your `.eslintrc.yml` file within your project. If what you are customizing already exists within this configuration, it will be overridden automatically allowing you to have full control.
