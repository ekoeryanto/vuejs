/**
 * This file is part of the O2System Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

const blender = require('o2system-blender')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

blender
  // .js('./resources/app.js', 'assets')
  // .sass('./resources/app.scss', 'assets')
  .sourceMaps()

blender.setOutputPath('assets/')
blender.setResourceRoot('')

const { npm_config_theme: ctheme, npm_config_app: capp } = process.env

// Set Entry
if (ctheme === 'vuetify') {
  blender
    .options({
      extractVueStyles: true
    })
    .webpackConfig({
      plugins: [new VuetifyLoaderPlugin()]
    })

  Blender // eslint-disable-line no-undef
    .listen('configReady', config => {
      const scssRule = config.module.rules.find(r => r.test.toString() === /\.scss$/.toString())
      const scssOptions = scssRule.loaders.find(l => l.loader === 'sass-loader').options
      scssOptions.data = `@import "./resources/themes/${ctheme}/styles.scss"`

      const sassRule = config.module.rules.find(r => r.test.toString() === /\.sass$/.toString())
      const sassOptions = sassRule.loaders.find(l => l.loader === 'sass-loader').options
      sassOptions.data = `@import "./resources/themes/${ctheme}/styles.scss"`
    })
}

if (typeof ctheme !== 'undefined') {
  if (typeof capp !== 'undefined') {
    blender.js(
      './resources/' + capp + '/themes/' + ctheme + '/theme.js',
      './public/' + capp + '/themes/' + ctheme
    ).sass(
      './resources/' + capp + '/themes/' + ctheme + '/theme.scss',
      './public/' + capp + '/themes/' + ctheme
    )
  } else {
    blender.js(
      './resources/themes/' + ctheme + '/theme.js',
      './public/themes/' + ctheme
    ).sass(
      './resources/themes/' + ctheme + '/theme.scss',
      './public/themes/' + ctheme
    )
  }
}

if (typeof process.env.npm_config_module !== 'undefined') {
  blender.js(
    './resources/modules/' + process.env.npm_config_module + '/module.js',
    './public/modules/' + process.env.npm_config_module
  ).sass(
    './resources/modules/' + process.env.npm_config_module + '/module.scss',
    './public/modules/' + process.env.npm_config_module
  )
}

// blender.version().browserSync(); // Hot reloading
