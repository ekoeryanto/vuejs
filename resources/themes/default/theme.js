/*
 * This file is part of the O2System PHP Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 *  @copyright      Copyright (c) Steeve Andrian Salim
 */

import 'o2system-venus-ui/src/main'
import './theme.scss'

import Vue from 'vue'

import Theme from './theme.vue'
import Router from '../../config/router'
import vbclass from 'vue-body-class'
import { VuePageTransition } from 'vue-page-transition'
const Pace = require('pace-js-amd-fix')

Pace.start()
window.Vue = Vue

Vue.component('VuePageTransition', VuePageTransition)

Vue.use(vbclass, Router, VuePageTransition)

new Vue({
  render: h => h(Theme),
  router: Router
}).$mount('#app')
