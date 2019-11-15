'use strict'

//Handle sliders
function slickHandle() {
	//Index
	$('.products-group').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button type="button" class="arrow prev-arrow"><i class="fal fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="arrow next-arrow"><i class="fal fa-chevron-right"></i></button>',
		responsive: [
		    {
		      breakpoint: 996,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
	  	]
	})

	$('.feature-news-group').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button type="button" class="arrow prev-arrow"><i class="fal fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="arrow next-arrow"><i class="fal fa-chevron-right"></i></button>',
		responsive: [
		    {
		      breakpoint: 996,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
	  	]
	})

	//About
	$('.our-success_group').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button type="button" class="arrow prev-arrow"><i class="fal fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="arrow next-arrow"><i class="fal fa-chevron-right"></i></button>',
		responsive: [
		    {
		      breakpoint: 996,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
	  	]
	})
}

//Responsive menu
function menuHandle() {
	const header = $('.header')
	let lastScrollTop = 0;

	function menuResize() { 
		if (window.matchMedia('(min-width: 992px)').matches) {
			header.removeClass('isMobile')
			$('#clone-menu').remove()
		}
		else {
			header.addClass('isMobile')
			if($("#clone-menu").length === 0) {
				$('body').prepend('<div id="clone-menu"><div class="custom-container"><div class="header-content"></div></div></div>')
				$(".header-content nav").clone().appendTo("#clone-menu .header-content");
				openSidebarMenu()
			}
		}
	};
 	
	//Open sidebar menu on mobile
	function openSidebarMenu() {
		$('.open-nav').on('click', function(e){
			let menu = $('#clone-menu nav');
			e.preventDefault();
			$(this).children().toggleClass('fa-bars fa-times')
			$(menu).toggleClass('isOpen')
			$(document).mouseup(function(e) {
			    if(menu.hasClass('isOpen')) {
				    if (!menu.is(e.target) && menu.has(e.target).length === 0 && !$(e.target).hasClass('fal fa-times') && !$(e.target).hasClass('open-nav')) {
				        menu.removeClass('isOpen');
				        $('.open-nav').children().toggleClass('fa-bars fa-times');
				    }
			    }
			})
		})
	}

	function menuScrollHandle() {
		var st = $(this).scrollTop();
		if(st > 400) {
			header.addClass('hide isScroll');
			if (st > lastScrollTop){
		      	header.addClass('hide')
		      	
		   	} 
		   	else {
		   		header.removeClass('hide')
		   	}
		   	lastScrollTop = st;
	   	}
	   	else {
	   		header.removeClass('hide isScroll')
	   	}	
	}

	menuResize();
	$(window).on('scroll', menuScrollHandle);
	$(window).on('resize', menuResize); 
}

//Animation loader and banner
function animation() {
	//Loader animation
	const loader = $('#loader');
	const loaderLogo = $('#loader-logo');
	const loaderTitle = $('#loader-title');
	const bannerCake = $('.banner-img .banner-img--1')
	const bannerTitle = $('.banner-content--title span')
	const bannerIntro = $('.banner-content--intro')
	const bannerBtns = $('.banner-btn_group')

	TweenLite.set(bannerCake, {autoAlpha: 0, x: -500});
	TweenLite.set(bannerTitle, {autoAlpha: 0});
	TweenLite.set(bannerIntro, {autoAlpha: 0, y: 200});
	TweenLite.set(bannerBtns, {autoAlpha: 0, y: 200});
	TweenLite.set(loaderLogo, {autoAlpha: 0, y: -100});
	TweenLite.set(loaderTitle, {autoAlpha: 0, y: 100});

	var tl = new TimelineLite();
	tl.to(loaderLogo, 2, {y: 0, autoAlpha: 1, ease: Power2.easeInOut})
	.to(loaderTitle, 2, {y: 0, autoAlpha: 1, ease: Power2.easeInOut}, 0)

	$(window).on('load', (function() {
		//After windown loaded
	  	tl.to(loader, 1, {y: '-100%', autoAlpha: 0, ease: Power3.easeInOut, onComplete: removeLoader})
	  	function removeLoader() {
	  		//Remove loader from DOM
	  		loader.remove();
	  		//Play banner animation
	  		let bannerTl = tl = new TimelineLite()
	  		.to(bannerCake, 2, {x: 0, autoAlpha: 1 ,ease: Power3.easeInOut})
	  		.staggerTo(bannerTitle, 2, {autoAlpha: 1 ,ease: Power3.easeInOut}, 0.1, 0.25)
	  		.to(bannerIntro, 2, {y: 0 ,autoAlpha: 1 ,ease: Power3.easeInOut}, '-=1.25')
	  		.to(bannerBtns, 2, {y: 0 ,autoAlpha: 1 ,ease: Power3.easeInOut}, '-=1.25')
	  	}
	}));
}

//Handle search
function searchHandle() {
	let searchContainer = $('#search')
	TweenLite.set(searchContainer, {y: '-100%', autoAlpha: 0});

	$('#open-search').on('click', function(e){
		e.preventDefault();
		let searchIn = new TimelineLite()
		searchIn.fromTo(searchContainer, 1,{y: '-100%'}, {y: '0%', autoAlpha: 1, ease: Power3.easeInOut})
	})

	$('#close-search').on('click', function(e){
		e.preventDefault()
		let searchIn = new TimelineLite()
		searchIn.fromTo(searchContainer, 1,{y: '0%'},{y: '100%', autoAlpha: 0, ease: Power2.easeInOut})
	})
}

//Handle sidebar
function sidebarHandle() {
	function sidebarResize() {
		if(window.matchMedia('(min-width: 992px)').matches) {
			$('#sidebar-filter').removeClass('isMobile isOpen')
			$('#overlay').remove()
		}
		else {
			$('#sidebar-filter').addClass('isMobile')
		}
	}

	function toggleSidebar() {
		$('#open-sidebar').on('click', function(event) {
			event.preventDefault();
			$('#sidebar-filter').addClass('isOpen');
			if($('#overlay').length == 0) {
				$('body').prepend('<div id="overlay"></div>')
			}
		});

		$('#close-sidebar').on('click', function(event) {
			event.preventDefault();
			$('#sidebar-filter').removeClass('isOpen')
			$('#overlay').remove()
		});
	}

	function toggleSidebarItem() {
		// $('.radio-wrapper').slideUp()
		$('.sidebar-section_header').on('click', function(event) {
			event.preventDefault();
			$(this).next('.radio-wrapper').toggleClass('isOpen');
			$(this).children('span').toggleClass('up')
		});
	}

	function resetForm() {
		$('#redo-filter').on('click', function(e) {
			e.preventDefault()
			$('#sidebar-filter')[0].reset();
		});
	}

	sidebarResize()
	toggleSidebar()
	toggleSidebarItem()
	resetForm()
	$(window).on('resize', sidebarResize)
}

function imageParallax() {
	$('html').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		
		var newx = x - wx/2;
		var newy = y - wy/2;

		var parallaxItem = $('#parallax-wrapper img')
		
		var speed = parallaxItem.attr('data-speed');
		if(parallaxItem.attr('data-revert')) speed *= -1;
		TweenMax.to(parallaxItem, 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
	});
}

$(document).ready(function() {
	animation()
	menuHandle()
	slickHandle()
	searchHandle()
	sidebarHandle()
	imageParallax()
});