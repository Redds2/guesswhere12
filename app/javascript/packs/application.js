// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')

import Rails from "@rails/ujs";
window.Rails = Rails;



import {get_random_photo} from 'packs/main'
import {change_score} from 'packs/main'
import {toggle_two} from 'packs/main'
import {clear_map} from 'packs/main'
import {update_score_bar} from 'packs/main'
import {get_link} from 'packs/main'

window.get_random_photo = get_random_photo
window.change_score = change_score
window.toggle_two = toggle_two
window.clear_map = clear_map
window.update_score_bar = update_score_bar
window.get_link = get_link

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
