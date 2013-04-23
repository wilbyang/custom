(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function(context, settings) {
    	jQuery('#id_of_list').galleryView({
    		enable_overlays: true,
    		panel_width: 800,
    		panel_height: 600,
    		frame_width: 120,
    		frame_height: 90
    	});
    }
  }
})(jQuery);
