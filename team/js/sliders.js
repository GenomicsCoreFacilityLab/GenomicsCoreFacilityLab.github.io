$(document).ready(function() {
    $('.hero-wrapper.slider-news').each(function () {
        var heroControls = $(this).find("input[type='hidden'][name='hero-controls']").val();
        var heroPager = $(this).find("input[type='hidden'][name='hero-pager']").val();
        var heroAuto = $(this).find("input[type='hidden'][name='hero-auto']").val();
        var heroPause = $(this).find("input[type='hidden'][name='hero-pause']").val();
        var heroMode = $(this).find("input[type='hidden'][name='hero-mode']").val();

        // HIDE PAGER IF FALSE
        if (heroControls == 'false') {
            $(this).addClass('hideControls');
        }

        // HIDE PAGER IF FALSE
        if (heroPager == 'false') {
            $(this).addClass('hidePager');
        }

        // ADD MANUAL CLASS IF AUTO IS SET TO FALSE 
        if (heroAuto == 'false') {
            $(this).addClass('manual');
        } else if (heroAuto == 'true') {
            $(this).addClass('auto');
        } else {
            $(this).addClass('auto');
        }
        // UMMS News Category slider WITH OPTIONS
        $(this).find('.bxslider').bxSlider({
            mode: heroMode,
            auto: heroAuto,
            autoHover: false,
            adaptiveHeight: true,
            pager: true,
            pagerType: 'short',
            pause: heroPause * 1000,
            nextText: '\u003E',
            prevText: '\u003C',
            touchEnabled: false
        });
    });

    $('.hero-wrapper.slider-umms:not(.slider-news)').each(function () {
       // console.log("hero slider: .hero-wrapper.slider-umms:not(.slider-news)");
        var heroControls = $(this).find("input[type='hidden'][name='hero-controls']").val();
        var heroPager = $(this).find("input[type='hidden'][name='hero-pager']").val();
        var heroAuto = $(this).find("input[type='hidden'][name='hero-auto']").val();
        var heroPause = $(this).find("input[type='hidden'][name='hero-pause']").val();
        var heroMode = $(this).find("input[type='hidden'][name='hero-mode']").val();

        // HIDE PAGER IF FALSE
        if (heroControls == 'false') {
            $(this).addClass('hideControls');
        }

        // HIDE PAGER IF FALSE
        if (heroPager == 'false') {
            $(this).addClass('hidePager');
        }

        // ADD MANUAL CLASS IF AUTO IS SET TO FALSE 
        if (heroAuto == 'false') {
            $(this).addClass('manual');
        } else if (heroAuto == 'true') {
            $(this).addClass('auto');
        } else {
            $(this).addClass('auto');
        }
        // UMMS News Category slider WITH OPTIONS
        $(this).find('.bxslider').bxSlider({
            mode: heroMode,
            auto: heroAuto,
            pager: true,
            pagerType: 'short',
            autoHover: false,
            adaptiveHeight: true,
            pause: heroPause * 1000,
            nextText: '\u003E',
            prevText: '\u003C',
            touchEnabled: false
        });
    });

   $('.hero-wrapper.overlay-bottom').each(function () {
        // count how many LIs
        var slidecount = $(this).find("ul.bxslider").children().length;

        var heroTiming = parseInt($(this).find("input[type='hidden'][name='hero-pause']").val());
        var heroMode = $(this).find("input[type='hidden'][name='hero-mode']").val();
        var heroPager = $(this).find("input[type='hidden'][name='hero-pager']").val();
        var heroAuto = $(this).find("input[type='hidden'][name='hero-auto']").val();
        var heroControls = $(this).find("input[type='hidden'][name='hero-controls']").val();
        var heroRnd = $(this).find("input[type='hidden'][name='hero-random']").val();
        var heroStart = 0;

        //RESET IF ONLY 1 SLIDE
        if (slidecount < 2) {
            heroPager = false;
            heroControls = false;
            heroAuto = false;
            heroTiming = 60000;
            heroRnd = false;
        }

        // HIDE SLIDE CONTROLS IF FALSE
        if (heroControls == 'false' || slidecount < 2) {
            $(this).addClass('hideControls');
        }

        // HIDE PAGER IF FALSE
        if (heroPager == 'false' || slidecount < 2) {
            $(this).addClass('hidePager');
        }

        // ADD MANUAL CLASS IF AUTO IS SET TO FALSE 
        if (heroAuto == 'false' || slidecount < 2) {
            $(this).addClass('manual');
        } else if (heroAuto == 'true') {
            $(this).addClass('auto');
        }

        //START FROM RANDOM SLIDE IF RANDOMSTART IS TRUE
        if (heroRnd == 'true')
        {
            heroStart = Math.floor(Math.random() * $('.bxslider').bxSlider().getSlideCount());
        }

        //HERO SLIDER bottom overlay
        $(this).find('.bxslider').bxSlider({
            mode: heroMode,
            auto: heroAuto,
            autoHover: true,
            adaptiveHeight: true,
            controls: heroControls,
            pager: heroPager,
            pagerType: 'long',
            pause: heroTiming * 1000,
            nextText: '\u003E',
            prevText: '\u003C',
            touchEnabled: false,
            randomStart: heroRnd,
            startSlide: heroStart
        });


    });

  // HERO SLIDER - FULL SLIDER
    var i = 0
    $('.hero-wrapper.slider-overlay,.hero-wrapper.slider-full').each(function () {
        i++;
        //class narrow
        var parentHasClassNarrow = $(this).parent().hasClass("narrow");
        //check parent width
        var parentWidth = $(this).parent().width();
        if (parentWidth < 500) {
            parentHasClassNarrow = true
        }
        if (parentHasClassNarrow) {
            $(this).addClass("narrow");
        } 


        // count how many LIs
        var slidecount = $(this).find("ul.bxslider").children().length;

        var heroTiming = parseInt($(this).find("input[type='hidden'][name='hero-pause']").val());
        var heroControls = $(this).find("input[type='hidden'][name='hero-controls']").val();
        var heroPager = $(this).find("input[type='hidden'][name='hero-pager']").val();
        var heroAuto = $(this).find("input[type='hidden'][name='hero-auto']").val();
        var heroMode = $(this).find("input[type='hidden'][name='hero-mode']").val();
        var heroRnd = $(this).find("input[type='hidden'][name='hero-random']").val();
        var heroStart = 0;

        //RESET IF ONLY 1 SLIDE
        if (slidecount < 2) {
            heroPager = false;
            heroControls = false;
            heroAuto = false;
            heroTiming = 60000;
            heroRnd = false;
        }

        // HIDE PAGER IF FALSE
        if (heroControls == 'false' || slidecount < 2) {
            $(this).addClass('hideControls');
        }

        // HIDE PAGER IF FALSE
        if (heroPager == 'false' || slidecount < 2) {
            $(this).addClass('hidePager');
        }

        // ADD MANUAL CLASS IF AUTO IS SET TO FALSE 
        if (heroAuto == 'false' || slidecount < 2) {
            $(this).addClass('manual');
        } else if (heroAuto == 'true') {
            $(this).addClass('auto');
        }

            //START FROM RANDOM SLIDE IF RANDOMSTART IS TRUE
        if (heroRnd == 'true') {
            heroStart = Math.floor(Math.random() * $('.bxslider').bxSlider().getSlideCount());
        }


        // BXSLIDER WITH OPTIONS
        $(this).find('.bxslider').bxSlider({
            mode: heroMode,
            auto: heroAuto,
            autoHover: true,
            adaptiveHeight: true,
            controls: heroControls,
            captions: true,
            pause: heroTiming * 1000,
            pager: heroPager,
            touchEnabled: false,
            randomStart: heroRnd,
            startSlide: heroStart
        });
    });




  // HERO SLIDER - 60% WIDTH SLIDER
  $('.hero-wrapper.slider-sixty .bxslider').show().bxSlider({
    responsive: false,
    controls: false,
    pager: true,
    adaptiveHeight: true,
      auto: false,
      touchEnabled: false //turn off as link button is inaccessible
  });

  // HERO SLIDER - 60% WIDTH SLIDER - VERTICAL TRANSITION
  $('.hero-wrapper.slider-sixty-vertical .bxslider').show().bxSlider({
    responsive: false, // MAKE SLIDER NOT RESPONSIVE SO YOU CAN SET WIDTH EXPLICITLY
    controls: false,
    captions: false,
    pager: true,
    auto: false, // AUTO SLIDE - PAUSES ON HOVER OF SLIDE
      mode: 'vertical',
      touchEnabled: false //turn off as link button is inaccessible
  });

  // HERO SLIDER - RANDOM SLIDE ON PAGE LOAD - NO ANIMATION OR CONTROLS
  $('.hero-wrapper.slider-random .bxslider').show().bxSlider({
    responsive: true, // MAKE SLIDER RESPONSIVE
    controls: false, // HIDE NAVIGATION CONTROLS
    pager: false, // HIDE PAGER
    captions: false, // HIDE CAPTIONS
    randomStart: true, // START ON RANDOM SLIDE
  });


});