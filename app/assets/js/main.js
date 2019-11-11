$(function() {
	'use strict'
	document.scrollingElement.scrollTop;

	//Handle sliders
	function slickHandle() {
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
	}

	//Responsive menu
	function menuHandle() {
		const header = $('.header')

		function mediaSize() { 
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
				console.log($("#clone-menu").length)
			}
		};
	 	mediaSize();
		window.addEventListener('resize', mediaSize, false); 

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

		var lastScrollTop = 0;
		$(window).scroll(function(event){
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
		});
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

		TweenLite.set(bannerCake, {autoAlpha: 0, x: -500, ease: Power3.easeInOut});
		TweenLite.set(bannerTitle, {autoAlpha: 0, ease: Power3.easeInOut});
		TweenLite.set(bannerIntro, {autoAlpha: 0, y: 200, ease: Power3.easeInOut});
		TweenLite.set(bannerBtns, {autoAlpha: 0, y: 200, ease: Power3.easeInOut});

		var tl = new TimelineLite();
		tl.from(loaderLogo, 2, {y: -100, autoAlpha: 0, ease: Power2.easeInOut})
		.from(loaderTitle, 2, {y: 100, autoAlpha: 0, ease: Power2.easeInOut}, 0)

		$(window).on('load', (function() {
			//After windown loaded
		  	tl.to(loader, 1, {y: '100%', autoAlpha: 0, ease: Power3.easeInOut, onComplete: removeLoader})
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
			// $('#search').remove()
		})
	}

	animation()
	menuHandle()
	slickHandle()
	searchHandle()
});