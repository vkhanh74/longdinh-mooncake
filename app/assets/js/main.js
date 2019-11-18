'use strict'

//Product data
function product(id, image ,name, price, discount, type) {
  	this.id = id;
  	this.image = image;
  	this.name = name;
  	this.price = price;
  	this.discount = discount;
  	this.type = type;
  	this.printTotalPrice = (quantity) => {
  		return (this.price * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  	}
}

const products = [
	new product(1,'assets/images/products/sp1.png','Trăng vàng hồng ngọc tâm an', 800000, false, 'box'),
	new product(2,'assets/images/products/sp2.png','Trăng vàng hồng ngọc an bình', 690000, 900000, 'box'),
	new product(3,'assets/images/products/sp3.png','Trăng vàng hồng ngọc an nhiên (tím)', 1100000, 1200000, 'box'),
	new product(4,'assets/images/products/sp4.png','Trăng vàng pha lê toàn phúc (vàng)', 700000, false, 'box'),
	new product(5,'assets/images/products/sp5.png','Trăng vàng pha lê vạn phúc (xanh)', 1200000, false, 'box'),
	new product(6,'assets/images/products/sp6.png','Trăng vàng kim cương trường khang', 2990000, false, 'box'),
	new product(7,'assets/images/products/sp7.png','Trăng vàng hồng ngọc an phú (vàng)', 950000, 1000000, 'box'),
	new product(8,'assets/images/products/sp8.png','Trăng vàng hồng ngọc an thịnh (đỏ)', 890000, false, 'box'),
	new product(9,'assets/images/products/sp9.png','Trăng vàng hoàng kim vinh hoa (vàng)', 2190000, false, 'box'),
]

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

	//Shop detail
	$('.recommended-products_wrapper').slick({
		slidesToShow: 4,
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

//Product detail image parallax 
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

//Product add to cart success popup
function successPopUp() {
	$('.btn-cart-add').on('click', function(e){
		e.preventDefault()
		//Check if class success-popuip is exist
		if($('.success-popup').length === 0) {
			$('body').prepend('<div class="success-popup"><svg class="animated" id="successAnimation" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 70 70"><circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke-width="2" stroke-linecap="round" fill="transparent" style="stroke: #93743D;"></circle><polyline id="successAnimationCheck" stroke="#93743D" stroke-width="2" points="23 34 34 43 47 27" fill="transparent" style="stroke: #93743D;"></polyline></svg><h5>Đã thêm vào giỏ hàng</h5></div>')
			$('#successAnimationCheck').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
				let successPopUp = $('.success-popup')
			    let SwingOutTl = new TimelineLite();
			    SwingOutTl.to(successPopUp, 1, {y: -1000, ease: Power3.easeInOut, onComplete: removePopUp})

			    function removePopUp() {
			    	$('.success-popup').remove()
			    }
			});
		}
		
	})
}

//Change product quantity
function quantity() {
	function quantityControl() {
		$('.plus').on('click',function(){
			event.preventDefault();
	        let $qty = $(this).closest('.quantity-control').find('.quantity');
	        let currentVal = parseInt($qty.val());
	        if (!isNaN(currentVal)) {
	            $qty.val(currentVal + 1);
	        }
	    }); 
	    $('.minus').on('click',function(){
	    	event.preventDefault();
	        let $qty = $(this).closest('.quantity-control').find('.quantity');
	        let currentVal = parseInt($qty.val());
	        if (!isNaN(currentVal) && currentVal > 1) {
	            $qty.val(currentVal - 1);
	        }
	    });
	}

	function productTotalCal() {
		let currentVal = 1
		$('.control-btn').on('click', function(e) {
			e.preventDefault();
			let productName = $(this).parents('.product-quantity').siblings('.product-name').children().text()
			let matchProduct = products.filter((index) => index.name == productName);
			console.log()
			if($(e.target).hasClass('plus')) {
				currentVal++
			}
			else if ($(e.target).hasClass('minus')){
				if(currentVal === 1) {
					currentVal = 1
				}
				else {
					currentVal--
				}
			}
			$(this).parents('.product-quantity').siblings('.product-total').children().text((matchProduct[0].price * currentVal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
		});
	}

	quantityControl()
	productTotalCal()
}

//Remove product from cart animation
function productCartRemove() {
	$('.product-remove a').on('click', function(event) {
		event.preventDefault();
		console.log(event.target)
		let $thisRow = $(this).parents('tr')
		let removeRowTl = new TimelineLite()
		removeRowTl.to($thisRow, 1, {x:'100%', autoAlpha: 0, ease: Back.easeIn.config(1.7), onComplete: removeRow})
		function removeRow() {
			$thisRow.remove();
		}
	});
}

//Checkout accordion
function accordion() {
	$("#my-accordion").accordionjs({
		slideSpeed  : 300,
		activeIndex : 2,
	});
}

//Checkout choose payment method 
function tickRadioToOpen() {
	$('.checkbox-slide .checkbox-slide_content').slideUp()

	$('.checkbox-slide .checkbox-slide_header').on('click', function(e) {
   		if($(this).children().children('input').is(':checked')) { 
   			$(this).next().slideDown(300);
   			$(this).parent().siblings().children('.checkbox-slide_content').slideUp()
   			$('.cart-total_box__content .error').hide()
   		}
	});
}

//Form validate
function validate() {
	$('.checkout').on('submit', function(event) {
		let validateInput = $(`input[data-validate='true']`)
		let validateSelect = $(`select[data-validate-select='true']`)
		let validateRadio = $(`input[data-validate-radio='true']`)
		
		//Validate input
		$.each(validateInput, function(index, val) {

			let phoneRegex = /\(?(^[+]*[0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g

			let nameRegex = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ"+ "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ"+"ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]{3,70}$/g

			let addressRegex = /^([a-zA-Z-_,ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ"+ "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ"+0123456789"ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]){5,100}$/g

			if(val.value == '') {
				$(this).addClass('error-border')
				$(this).next().show()
				event.preventDefault();
			}
			else {
				$(this).removeClass('error-border')
				$(this).next().hide()
			}

			if($(val).attr('name') == 'fullname') {
				checkRegex(nameRegex,'fullname')
			}

			if($(val).attr('name') == 'address') {
				checkRegex(addressRegex,'address')
			}

			if($(val).attr('name') == 'telephone') {
				checkRegex(phoneRegex,'telephone')
			}

			function checkRegex(regex,nameAttr) {
				if(!val.value.match(regex)) {
					$(this).addClass('error-border')
					$(this).next().show()
					$(`input[name=${nameAttr}]`).on('keyup', function(event) {
						if($(this).val().match(regex)) {
							$(this).removeClass('error-border')
							$(this).next().hide()
						}
						else {
							$(this).addClass('error-border')
							$(this).next().show()
							event.preventDefault();
						}
					});
				}
			}
		});

		//Validate payment method
		if($(`input[data-validate-radio='true']:checked`).length === 0) {
			$('.cart-total_box__content .error').show()
			event.preventDefault();
		} 
		else {
			$('.cart-total_box__content .error').hide()
		}

		//Validate country/city select
		if(validateSelect.val() == 4) {
			validateSelect.addClass('error-border')
			validateSelect.next().show()
			event.preventDefault();
		}
		validateSelect.on('change', function(e){
			if($(this).val() !== 4) {
				$(this).removeClass('error-border')
				$(this).next().hide()
			}
		})
	});
}

$(document).ready(function() {
	animation()
	menuHandle()
	slickHandle()
	searchHandle()
	sidebarHandle()
	imageParallax()
	successPopUp()
	quantity()
	productCartRemove()
	accordion()
	tickRadioToOpen()
	validate()
	new WOW().init({
		offset: 0,
		mobile: false,
	});
});