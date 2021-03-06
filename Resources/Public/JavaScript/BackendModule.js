jQuery(document).ready(function() {
	// toggle constant editor
	jQuery('.showEditForm').click(function() {
		jQuery(this).parents('tr').removeClass('defaultValueIsSelected');
		jQuery(this).parents('tr').find('input[type="hidden"]').attr('value', 'checked');
		jQuery(this).parents('tr').find('input[type="hidden"]').removeAttr('disabled');
	});
	jQuery('.hideEditForm').click(function() {
		jQuery(this).parents('tr').addClass('defaultValueIsSelected');
		jQuery(this).parents('tr').find('input[type="hidden"]').attr('value', '');
		jQuery(this).parents('tr').find('input[type="hidden"]').attr('disabled','disabled');

	});

	// make for submittable
	jQuery('#saveIcon').click(function() {
		jQuery('#saveableForm').submit();
	});

	// initialize Colorpicker
	jQuery('input.colorselector').each(function() {
		var inputElement = jQuery(this);
		jQuery(this).ColorPicker({
			onChange: function(hsb, hex, rgb, el) {
				jQuery(inputElement ).attr('value', '#' + hex);
				jQuery(inputElement).parent().find('.typo3-tstemplate-ceditor-colorblock').css('background-color', '#' + hex);
				jQuery(el).ColorPickerHide();
			},
			onBeforeShow: function () {
				jQuery(this).ColorPickerSetColor(this.value);
			}
		});
	});

	// init slider
	jQuery('.slider').unslider({
		keys: true, //  Enable keyboard (left, right) arrow shortcuts
		dots: true //  Display dot navigation
	});
});