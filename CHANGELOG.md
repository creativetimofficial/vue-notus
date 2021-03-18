# Change Log

## [1.1.0] date
### Bug fixing
- Rename `master` branch to `main`
- To make a lot of our changes, we've followed the instructions from here (minus the `colors` and `font-sizes`): https://tailwindcss.com/docs/upgrading-to-v2
  - For the colors, the only change that we made, is the fact that we've added all Tailwind CSS colors to our `tailwind.config.js` files, and inside our product, all `{type}-gray-{number}` classes were renamed to `{type}-coolGray-{number}`
  - After that, we've changed `{type}-coolGray-{number}` to `{type}-coolGray-{lower-number}`, i.e. (`100` became `50`, `200` became `100`, ..., `900` became `800`)
    - You can achieve this, by search in your whole project for `coolGray-100` and replace it with `coolGray-50`
    - Then, you search in your whole project for `coolGray-200` and replace it with `coolGray-100`
    - Then, you search in your whole project for `coolGray-300` and replace it with `coolGray-200`
    - Then, you search in your whole project for `coolGray-400` and replace it with `coolGray-300`
    - Then, you search in your whole project for `coolGray-500` and replace it with `coolGray-400`
    - Then, you search in your whole project for `coolGray-600` and replace it with `coolGray-500`
    - Then, you search in your whole project for `coolGray-700` and replace it with `coolGray-600`
    - Then, you search in your whole project for `coolGray-800` and replace it with `coolGray-700`
    - Then, you search in your whole project for `coolGray-900` and replace it with `coolGray-800`
- `lg:bg-transparent` is not working anymore, so we've changed it with `lg:bg-opacity-0`
### Major style changes

### Deleted components

### Added components

### Deleted dependencies
- `@tailwindcss/custom-forms`
- `babel-eslint` (updated to `@babel/eslint-parser` and `@babel/core`)
### Added dependencies
- `@tailwindcss/forms` (replaces `@tailwindcss/custom-forms`)
- `autoprefixer`
- `postcss`
- `@babel/core` (instead of `babel-eslint`)
- `@babel/eslint-parser` (instead of `babel-eslint`)
- `@vue/compiler-sfc`
### Updated dependencies
```
@fortawesome/fontawesome-free   5.14.0   →    5.15.3
@popperjs/core                   2.5.1   →    2.9.1
chart.js                         2.9.3   →    2.9.4
core-js                          3.6.5   →    3.9.1
tailwindcss                     1.8.10   →    2.0.4
vue                             2.6.12   →    3.0.7
vue-router                       3.4.3   →    4.0.5
@vue/cli-plugin-babel            4.5.6   →    5.0.0-alpha.7
@vue/cli-plugin-eslint           4.5.6   →    5.0.0-alpha.7
@vue/cli-service                 4.5.6   →    5.0.0-alpha.7
eslint                           6.8.0   →    7.22.0
eslint-plugin-vue                6.2.2   →    7.7.0
```
### Warning
_On a clean install there may be some warnings from request, chokidar, fsevents - they come from node_modules, and they do not affect the product at all._
_The following warning will show when doing a clean install `npm WARN cache-loader@4.1.0 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.`, however it does not affect in any way the product._

## [1.0.0] 2020-09-29
### Original Release
- Started project from [Tailwind Starter Kit by Creative Tim](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation?ref=vn-changelog)
- Added design from Tailwind Starter Kit by Creative Tim
