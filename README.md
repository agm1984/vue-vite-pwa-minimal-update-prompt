# Vue 3 + Vite + Vite PWA Need-Refresh Checker

This template should help get you started checking for new code after deployment with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Installation

``` bash
$ git clone git@github.com:agm1984/vue-vite-pwa-minimal-update-prompt.git
$ cd vue-vite-pwa-minimal-update-prompt
$ npm install
```

## How to test

1. Build and deploy using Vite Preview

``` bash
$ npm run build
$ npm run preview
```

Then navigate to http://localhost:1337 on your browser. Also see the `package.json` script for `preview` to see why it's port 1337.

2. Keep the browser tab open.

3. Modify the code and save 1+ files.

4. Re-build and re-deploy

``` bash
$ npm run build
$ npm run preview
```

5. Go back to the browser tab. Wait up to 20 seconds for it to detect the new build. See `/src/components/ReloadPrompt.vue` to change the polling interval period.

## Final Notes

> This project is not attempting to version assets, so it is likely that those may require additions to the `vite.config.js` file to declare which assets need to be tracked. In the VitePWA options object, see the `includeAssets` key.

For example in `vite.config.js`:

``` javascript
VitePWA({
    includeAssets: ['fonts/*.ttf', 'images/*.png'],
})
```
