/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-10T17:54:41+01:00
* @Email:  alcwynparker@gmail.com
* @Project: GiffGaff - SpaceJunk
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-11T13:39:37+01:00
*/

import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Video from '@/components/Video'
import Audio from '@/components/Audio'
import Images from '@/components/Images'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/audio',
      name: 'audio',
      component: Audio
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/images',
      name: 'images',
      component: Images
    }
  ]
})
