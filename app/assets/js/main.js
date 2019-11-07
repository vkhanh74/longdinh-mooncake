$(function() {
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

	function mediaSize() { 
		if (window.matchMedia('(min-width: 992px)').matches) {
			$('header').removeClass('isMobile')
		}
		else {
			$('header').addClass('isMobile')
		}
	};
 	mediaSize();
	window.addEventListener('resize', mediaSize, false); 

	$('#open-nav').on('click', function(e){
		let menu = $('header nav');
		e.preventDefault();
		$(this).children().toggleClass('fa-bars fa-times')
		$(menu).toggleClass('isOpen')
		$(document).mouseup(function(e) {
		    if(menu.hasClass('isOpen')) {
			    if (!menu.is(e.target) && menu.has(e.target).length === 0 && !$(e.target).hasClass('fal fa-times')) {
			        menu.removeClass('isOpen');
			        $('#open-nav').children().toggleClass('fa-bars fa-times');
			    }
		    }
		})
	}) 

	
});