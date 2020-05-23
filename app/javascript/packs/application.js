require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import { initMapbox } from '../packs/init_mapbox.js';
import { initAutocomplete} from '../packs/init_autocomplete.js';
import { extractAddress} from '../packs/init_autocomplete.js';
import { valeurImmo } from '../packs/valeurimmo.js';

document.addEventListener('turbolinks:load', () => {
  initMapbox();
})


initMapbox();
initAutocomplete();
valeurImmo();
extractAddress();