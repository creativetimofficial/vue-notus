# Change Log

## [1.1.0] 2021-03-19
### Bug fixing
- Rename `master` branch to `main`
- To make a lot of our changes, we've followed the instructions from here (minus the `colors` and `font-sizes`): https://tailwindcss.com/docs/upgrading-to-v2
  - For the colors, the only change that we made, is the fact that we've added all Tailwind CSS colors to our `tailwind.config.js` files, and inside our product, all `{type}-gray-{number}` classes were renamed to `{type}-blueGray-{number}`
  - After that, we've changed `{type}-blueGray-{number}` to `{type}-blueGray-{lower-number}`, i.e. (`100` became `50`, `200` became `100`, ..., `900` became `800`)
    - You can achieve this, by search in your whole project for `blueGray-100` and replace it with `blueGray-50`
    - Then, you search in your whole project for `blueGray-200` and replace it with `blueGray-100`
    - Then, you search in your whole project for `blueGray-300` and replace it with `blueGray-200`
    - Then, you search in your whole project for `blueGray-400` and replace it with `blueGray-300`
    - Then, you search in your whole project for `blueGray-500` and replace it with `blueGray-400`
    - Then, you search in your whole project for `blueGray-600` and replace it with `blueGray-500`
    - Then, you search in your whole project for `blueGray-700` and replace it with `blueGray-600`
    - Then, you search in your whole project for `blueGray-800` and replace it with `blueGray-700`
    - Then, you search in your whole project for `blueGray-900` and replace it with `blueGray-800`
  - For the colors, the only change that we made, is the fact that we've added all Tailwind CSS colors to our `tailwind.config.js` files, and inside our product, all `{type}-blue-{number}` classes were renamed to `{type}-lightBlue-{number}`
  - For the colors, the only change that we made, is the fact that we've added all Tailwind CSS colors to our `tailwind.config.js` files, and inside our product, all `{type}-green-{number}` classes were renamed to `{type}-emerald-{number}`
- `lg:bg-transparent` is not working anymore, so we've changed it with `lg:bg-opacity-0`
- https://github.com/creativetimofficial/notus-angular/issues/4
- https://github.com/creativetimofficial/notus-js/issues/4
- https://github.com/creativetimofficial/notus-js/pull/5
- https://github.com/creativetimofficial/notus-js/pull/6
- https://github.com/creativetimofficial/notus-nextjs/issues/6
- https://github.com/creativetimofficial/notus-nextjs/issues/7
- https://github.com/creativetimofficial/notus-nextjs/issues/8
- https://github.com/creativetimofficial/notus-react/issues/3
- https://github.com/creativetimofficial/notus-svelte/issues/3
- https://github.com/creativetimofficial/notus-svelte/issues/6
- https://github.com/creativetimofficial/vue-notus/pull/4/
### Major style changes
- The upgrade of Tailwind CSS from version 1 to version 2, will cause multiple style changes, check them out on the official Tailwind CSS websites:
  - https://blog.tailwindcss.com/tailwindcss-v2
  - https://tailwindcss.com/
  - https://tailwindcss.com/docs/upgrading-to-v2
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
