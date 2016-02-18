jQuery(document).ready(function ($) {
	//SERVICE SLIDER
	if ($(".ts-service-slide").length > 0) {
    
	    $(".ts-service-slide").owlCarousel({
	    	items: 3,
	        autoPlay: 4000,
	        slideSpeed: 1000,
	        navigation: false,
	        pagination: true,
	        singleItem: false,
	        itemsCustom: [[0, 1],[320,1], [480, 1], [768, 2], [992, 2], [1200, 3]]
	    });
	};
	//HOVER EFFECT
     // handle the mouseenter functionality
    $(".ts-item-member").mouseenter(function(){
        $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function(){
        $(this).removeClass("hover");
    });
    //
	$('.ts-item-member').click(function(){
		$('.ts-item-member').removeClass('active');
		$(this).addClass( "active" );
		$(this).find( ".over-member" ).toggleClass( "profile-show" );
	});  
    //TESTIMONIAL SLIDER
    if ($(".ts-testimonial-slide").length > 0) {
    
        $(".ts-testimonial-slide").owlCarousel({
            autoPlay: 4000,
            slideSpeed: 1000,
            navigation: false,
            pagination: true,
            singleItem: true
        });
    };
    //MAIN MENU
    //var heightW = $(window).height();
    $('.menu-open').click(function(){
        $('.ts-main-menu').animate({
            opacity:"1",
            filter: "alpha(opacity=100)",
            height:"100%"
        },1000).css({"visibility":"visible"})
        $('.social-top').hide();
    });
    $('.close-menu').click(function(){
        $('.ts-main-menu').animate({
            opacity:"0",
            filter: "alpha(opacity=00)",
            height:"0"
        },1000)
        $('.social-top').show();
    });
    // TABS
    $('ul.tabs').each(function(){
        // For each set of tabs, we want to keep track of
        // which tab is active and it's associated content
        var $active, $content, $links = $(this).find('a');

        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        // Hide the remaining content
        $links.not($active).each(function () {
          $(this.hash).hide();
        });

        // Bind the click event handler
        $(this).on('click', 'a', function(e){
          // Make the old tab inactive.
          $active.removeClass('active');
          $content.hide();

          // Update the variables with the new link and content
          $active = $(this);
          $content = $(this.hash);

          // Make the tab active.
          $active.addClass('active');
          $content.show();

          // Prevent the anchor's default click action
          e.preventDefault();
        });
    });
    //PARALLAX
    // if ($().parallax) {
    //     $(".parallax-section").parallax()
    // }

    $('body').css("padding-top",$('.main-header').outerHeight());
    //Fancybox
    //$('.fancybox').fancybox();
    //MAIN MENU DEFAULT
    $('.menubar-default').click(function(){
        $('.ts-default-menu').toggle();
        $('.social-top').toggle();
    });
    //MENU ONEPAGE
    $(".ts-main-menu-basic ul a").click(function(e){
        var windowWidth = $(window).width();
        if(windowWidth<=959) {
          $('.ts-main-menu-basic ul').slideUp("fast");
        }
        var url = $(this).attr("href");
        var target = $(url).offset().top; 
        $('html,body').animate({scrollTop:target -70}, 'slow');
        return false;
      });
     //BUTTON WELLCOME
      $('.home-arrow > a').click(function(e){
        var url_wl = $(this).attr("href");
        var taget_wl = $(url_wl).offset().top;
        $('html,body').animate({scrollTop:taget_wl-70},'slow');
        return false;
      })
    /*Main Menu Scroll*/
    var offs = '15%';
      $("section").waypoint({
        handler: function(event, direction) {
          var active_section = $(this);
          if (direction === "up") active_section = active_section.prev();
          if (direction === "up") offs = '30%'; 

          if(typeof active_section.attr("id") != 'undefined') { 
            $(".ts-main-menu-basic a").removeClass("active");
            $('.ts-main-menu-basic a[href="#' + active_section.attr("id") + '"]').addClass("active");
          }
        },
        offset: offs
      });
        //Menu head scroll show
        jQuery(window).bind('scroll', function() {
            if (jQuery(window).scrollTop() > (jQuery(window).height()-400)) {
                jQuery('.header-hidden').fadeIn('slow');
                jQuery(".header-hidden").removeClass('hidden').addClass('displayed');
            }
            if (jQuery(window).scrollTop() < (jQuery(window).height()-400)) {
                jQuery('.header-hidden').fadeOut('slow', function() {
                    jQuery(".header-hidden").removeClass('displayed').addClass('hidden'); 
                });
            }
        });
        //
        var windowWidth = $(window).width();
        if(windowWidth>=320) {
           $('#slides,#slider,.bg-parallax').css({'height': $(window).height()+'px'});
           $('.slider-paralax').css({'height': $(window).height()+100+'px'});
           $('#slides-video,#slides-animated,#slider-background,#slides-pattern,.background-image-paralax').css({'height': $(window).height()-83+'px'});
        }
        if(windowWidth>=768) {
           $('.tp-banner-home,.tp-banner-home2').css({'height': $(window).height()-83+'px'});
           $('.tp-banner-home-freelancer').css({'height': $(window).height()+'px'});
        }



})