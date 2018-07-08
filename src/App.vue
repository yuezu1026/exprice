<template>
  <div id="app">
  <!--<img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>

import './assets/js/jquery-1.10.2.js'
import './assets/js/bootstrap.min.js'
import './assets/js/jquery.metisMenu.js'

import './assets/js/morris/raphael.js'
import './assets/js/morris/morris.js'

import './assets/js/custom-scripts.js'

export default {
  name: 'App'
}
</script>

<style>

@import './assets/css/bootstrap.css'; /*引入公共样式*/
@import './assets/css/font-awesome.css';
@import './assets/js/morris/morris-0.4.3.min.css';
@import './assets/css/custom-styles.css';
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

</style>
