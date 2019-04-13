/**
 * Properties for Owl Carousel
 * Development by: Marcellus Frota <marcellusfrota@gmail.com>
 * @since 2.0.0
 */
 ;(function ( $, window, document, undefined ) {

    Properties = function(scope) {

        this.owl = scope;
        this.owl._options = $.extend({}, Properties.Defaults, this.owl.options);

        Properties.Options = this.owl._options;
        Properties.Options.propOwlTarget = this.owl.$element[0];
    	
    	$(Properties.Options.propOwlTarget).on('initialized.owl.carousel', Properties.prototype.putData);
    	$(Properties.Options.propOwlTarget).on('translated.owl.carousel', Properties.prototype.putData);
    	$(Properties.Options.propOwlTarget).on('initialize.owl.carousel', Properties.prototype.preloadContent);    	

    	if (Properties.Options.propEnableShortcutskey === true) {
			$(Properties.Options.propOwlTarget).on('initialized.owl.carousel', Properties.prototype.propEnableShortcutskey);
    	}

    }

    Properties.Defaults = {
        propTarget: '.owl-properties',
        propTitleContext: false,
        propTitleTag: '<div>',
        propActiveClass: 'active',
        propInactiveClass: 'inactive',
        propContentTarget: '.owl-content',
        propContentTitleTag: '<h1>',
        propContentTextTag: '<p>',
        propEnableShortcutskey: true
    }

    Properties.Options = {};

    Properties.prototype.preloadContent = function(event) {

    	var propTarget 				= Properties.Options.propTarget, 
    		propTitleContext 		= Properties.Options.propTitleContext, 
    		propTitleTag 			= Properties.Options.propTitleTag, 
    		propContentTarget 		= Properties.Options.propContentTarget, 
    		propContentTitleTag 	= Properties.Options.propContentTitleTag,
    		propContentTextTag 		= Properties.Options.propContentTextTag,
    		propItemTag 			= Properties.Options.propItemTag,
    		propOptions 			= Properties.Options.propOptions, 
    		propData 				= Properties.Options.propData,
    		propOwlTarget 			= Properties.Options.propOwlTarget;

		if (Object.keys(propData).length > 0) {

    		for (var data in propData) {

    			var elItem = (propItemTag != '') ? $(propItemTag) : $('<div>').addClass('item');
    			
	    		$(elItem).attr('data-title', propData[data].title); 			
	    		$(elItem).attr('data-description', propData[data].description); 
	    		if (propData[data].content) {
	    			$(elItem).html(propData[data].content);
	    		}			

    			for (var propAttr in propData[data].props) {
	    			$(elItem).attr('data-prop-'+propAttr, propData[data].props[propAttr]);
	    		}

    			$(propOwlTarget).append(elItem);

    		}

    	}

    	if (Object.keys(propOptions).length > 0) {

    		var $propContainer = (propTitleContext) ? $(propTitleContext) : false;

    		for (var prop in propOptions.props) {

    			var el = (propTitleTag != '') ? $(propTitleTag) : $('<div>');
    			var elP = propOptions.props[prop];

    			for (var propAttr in elP.attrs) {
	    			$(el).attr(propAttr, elP.attrs[propAttr]);
	    		}

	    		$(el).html(elP.context);
	    		$(el).attr('data-prop-'+prop, elP.initialState);

	    		if ($propContainer)
    				$propContainer.append(el);
    			else
    				$(propTarget).append(el);

    		}

    		if ($propContainer)
    			$(propTarget).append($propContainer);

    	} else {
    		console.error('Owl Carousel [Error]:', 'Missing properties options.');
    	}

    }

    Properties.prototype.propEnableShortcutskey = function(event) {
    	// Enable keyboard shorcuts	
    	document.onkeydown = function(e){
		    e = e || window.event;
		    switch(e.keyCode) {
			    case 38: // Key UP - go home
			        $(Properties.Options.propOwlTarget).trigger('to.owl.carousel', 1);
			        break;
			    case 40: // Key Down - go last
			        $(Properties.Options.propOwlTarget).trigger('to.owl.carousel', $('.owl-item.active').length);
			        break;
			    case 37: // Key Left - go prev
			        $(Properties.Options.propOwlTarget).trigger('prev.owl.carousel');
			        break;
			    case 39: // Key Right - go next
			        $(Properties.Options.propOwlTarget).trigger('next.owl.carousel');
			        break;
			}
    	};    	
    	
    }

    Properties.prototype.putData = function(event) {

		var last = event.page.size;
		var midle = $('.owl-item.active').get(parseInt(last/2));
		var element = $(midle).find('.item');

		var title = $(element).data('title');
		var description = $(element).data('description');
		
		var el = $([Properties.Options.propTarget, Properties.Options.propTitleTag.replace(/<|>/g,'')].join(' '));
		var activeClass = Properties.Options.propActiveClass;
		var inactiveClass = Properties.Options.propInactiveClass;

		$(el).removeClass([activeClass, inactiveClass].join(' '));
		
		$('.item').removeClass('focus');
		$(element).addClass('focus');

		for (var i = 0; i < el.length; i++) {
			var attr = el[i].attributes;
			for (var j = 0; j < attr.length; j++) {
				if (attr[j].name.indexOf('data-prop') == 0) {
					$(el[i]).addClass(($(element).attr(attr[j].name) == 'true') ? activeClass : inactiveClass);
				}
			}
		}

		var $propContentTitleTag = $(Properties.Options.propContentTitleTag).html(title);
		var $propContentTextTag = $(Properties.Options.propContentTextTag).html(description);

		// $([Properties.Options.propContentTarget, Properties.Options.propContentTitleTag.replace(/<|>/g,'')].join(' ')).html(title);
		
		$(Properties.Options.propContentTarget).html('');
		$(Properties.Options.propContentTarget).append($propContentTitleTag);
		$(Properties.Options.propContentTarget).append($propContentTextTag);

    } 

    $.fn.owlCarousel.Constructor.Plugins['pluginName'] = Properties;

})( window.Zepto || window.jQuery, window,  document );