require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import { initMapbox } from '../packs/init_mapbox.js';

document.addEventListener('turbolinks:load', () => {
  initMapbox();
})

initMapbox();