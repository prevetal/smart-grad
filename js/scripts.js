WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 20,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let products = swiper.el.querySelectorAll('.product')

					products.forEach(el => el.style.height = 'auto')

					setHeight(products)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Compare slider
	let compareSlider = document.querySelector('.compare_info .desktop .swiper')

	if (compareSlider) {
		new Swiper('.compare_info .desktop .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			lazy: true,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.product .name'))

					compareHeight($(swiper.el))
				},
				resize: swiper => {
					swiper.el.querySelectorAll('.product .name').forEach(el => el.style.height = 'auto')

					setHeight(swiper.el.querySelectorAll('.product .name'))

					compareHeight($(swiper.el))
				}
			}
		})
	}


	let mobCompareSlider = document.querySelector('.compare_info .mobile .swiper')

	if (mobCompareSlider) {
		new Swiper('.compare_info .mobile .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			lazy: true,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.product .name'))

					$(swiper.el).find('.controls').css({'top': $(swiper.el).find('.product').outerHeight()})

					compareHeight($(swiper.el))

					$(swiper.el).find('.count .total').text(swiper.slides.length)
					setTimeout(() => $(swiper.el).find('.count .current').text((swiper.activeIndex + 1)))
				},
				resize: swiper => {
					swiper.el.querySelectorAll('.product .name').forEach(el => el.style.height = 'auto')

					setHeight(swiper.el.querySelectorAll('.product .name'))

					$(swiper.el).find('.controls').css({'top': $(swiper.el).find('.product').outerHeight()})

					compareHeight($(swiper.el))
				},
				activeIndexChange: swiper => {
					setTimeout(() => $(swiper.el).find('.count .current').text((swiper.activeIndex + 1)))
				}
			}
		})
	}


	// Video reviews slider
	const videoReviewsSliders = [],
		videoReviews = document.querySelectorAll('.video_reviews .swiper')

	videoReviews.forEach((el, i) => {
		el.classList.add('video_reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 10
				},
				768: {
					spaceBetween: 20
				}
			}
		}

		videoReviewsSliders.push(new Swiper('.video_reviews_s' + i, options))
	})


	// Articles slider
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach((el, i) => {
		el.classList.add('articles_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 20,
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				1024: {
					slidesPerView: 3
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Examples slider
	const examplesSliders = [],
		examples = document.querySelectorAll('.examples .swiper')

	examples.forEach((el, i) => {
		el.classList.add('examples_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 20,
			slidesPerView: 'auto'
		}

		examplesSliders.push(new Swiper('.examples_s' + i, options))
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_delete"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Form sending
	$('#callback_modal form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById('callback_success_modal'),
			type: 'inline'
		}])
	})

	$('#consult_modal form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById('consult_success_modal'),
			type: 'inline'
		}])
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Password input
	$('.form .view_btn').click(function(e) {
		e.preventDefault()

		let field = $(this).closest('.field')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? field.find('.input').attr('type', 'text')
			: field.find('.input').attr('type', 'password')
	})


	// Изменение количества товара
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// LK - Orders
	$('.order .head .spoler_btn').click(function(e) {
		e.preventDefault()

		let order = $(this).closest('.order')

		$(this).toggleClass('active')
		order.find('.data').slideToggle(300)
	})


	// Мини всплывающие окна
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Filter
	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 50000,
		from: 1200,
		to: 48590,
		step: 10,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from + ' ₽')
			$('.filter .price_range input.to').val(data.to + ' ₽')
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from + ' ₽')
			$('.filter .price_range input.to').val(data.to + ' ₽')
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})


	$('.filter .reset_btn').click(function() {
		$priceRange.reset()
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Side menu
	$('header .menu_btn').click(function(e) {
		e.preventDefault()

		$('.side_menu').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('.side_menu .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('.side_menu').removeClass('show')
		$('.overlay').fadeOut(200)
	})


	// Auth modal
	$('.auth_btn').click(function(e) {
		e.preventDefault()

		let modal = $(this).data('modal')

		$('.auth_modal').removeClass('show')
		$('#' + modal).addClass('show')

		$('.overlay').fadeIn(300)

		$('body').addClass('menu_open')
	})

	$('.auth_modal .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('.auth_modal').removeClass('show')
		$('.overlay').fadeOut(200)

		$('body').removeClass('menu_open')
	})


	// Certs
	initCertsSliders()

	// Stages of work
	initStagesOfWorkSliders()

	// Facts
	initFactsSliders()


	// Quiz
	currentStep = 0

	$('.quiz .step .next_btn').click(function(e) {
		e.preventDefault()

		currentStep++

		$('.quiz .step').hide()
		$('.quiz .step' + currentStep).fadeIn(300)

		currentStep < 5
			? $('.quiz .head .count').show()
			: $('.quiz .head .count').hide()

		currentStep
			? $('.quiz .head').addClass('show')
			: $('.quiz .head').removeClass('show')

		$('.quiz .head .count .current').text('0' + currentStep)
	})

	$('.quiz .head .back_btn').click(function(e) {
		e.preventDefault()

		currentStep = currentStep - 1

		$('.quiz .step').hide()
		$('.quiz .step' + currentStep).fadeIn(300)

		currentStep
			? $('.quiz .head').addClass('show')
			: $('.quiz .head').removeClass('show')

		$('.quiz .head .count .current').text('0' + currentStep)
	})


	// Add Reply
	$('.comments .comment .reply_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.comment')

		$(this).toggleClass('active')

		parent.find('.add_reply').slideToggle(300)
	})

	$('.comments .add_reply .close_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.comment')

		parent.find('.reply_btn').toggleClass('active')

		parent.find('.add_reply').slideToggle(300)
	})


	// Add review
	$('.reviews .add_review_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$('.reviews .add_review').slideToggle(300)
	})
})



// Align characteristics in comparison
function compareHeight(slider) {
	// Reset heights
	slider.find('.features .label').height('auto')
	slider.find('.features .val').height('auto')

	let productFeatures = slider.find('.features'),
		labelSizes = new Object(),
		valSizes = new Object()

	// Get heights
	productFeatures.each(function () {
		$(this).find('> *').each(function () {
			// labels heights
			if (labelSizes[$(this).index()]) {
				if ($(this).find('.label').outerHeight() > labelSizes[$(this).index()]) {
					labelSizes[$(this).index()] = $(this).find('.label').outerHeight()
				}
			} else {
				labelSizes[$(this).index()] = $(this).find('.label').outerHeight()
			}

			// Vals heights
			if (valSizes[$(this).index()]) {
				if ($(this).find('.val').outerHeight() > valSizes[$(this).index()]) {
					valSizes[$(this).index()] = $(this).find('.val').outerHeight()
				}
			} else {
				valSizes[$(this).index()] = $(this).find('.val').outerHeight()
			}
		})
	})

	// Set labels height
	$.each(labelSizes, (key, data) => {
		productFeatures.each(function () {
			$(this).find('.label').eq(key).innerHeight(data)
		})
	})

	// Set vals height
	$.each(valSizes, (key, data) => {
		productFeatures.each(function () {
			$(this).find('.val').eq(key).innerHeight(data)
		})
	})
}



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth

		// Certs
		initCertsSliders()

		// Stages of work
		initStagesOfWorkSliders()

		// Facts
		initFactsSliders()
	}
})



// Certs
certsSliders = []

function initCertsSliders() {
	if ($(window).width() < 1024) {
		if ($('.certs .row').length) {
			$('.certs .row > *').addClass('swiper-slide')
			$('.certs .row').addClass('swiper-wrapper').removeClass('row')

			$('.certs .swiper').each(function (i) {
				$(this).addClass('certs_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 10,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}

				certsSliders.push(new Swiper('.certs_s' + i, options))
			})
		}
	} else {
		certsSliders.forEach(element => element.destroy(true, true))

		certsSliders = []

		$('.certs .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.certs .row > *').removeClass('swiper-slide')
	}
}



// Stages of work
stagesOfWorkSliders = []

function initStagesOfWorkSliders() {
	if ($(window).width() < 768) {
		if ($('.stages_of_work .row').length) {
			$('.stages_of_work .row > *').addClass('swiper-slide')
			$('.stages_of_work .row').addClass('swiper-wrapper').removeClass('row')

			$('.stages_of_work .swiper').each(function (i) {
				$(this).addClass('stages_of_work_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 10,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}

				stagesOfWorkSliders.push(new Swiper('.stages_of_work_s' + i, options))
			})
		}
	} else {
		stagesOfWorkSliders.forEach(element => element.destroy(true, true))

		stagesOfWorkSliders = []

		$('.stages_of_work .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.stages_of_work .row > *').removeClass('swiper-slide')
	}
}



// Facts
factsSliders = []

function initFactsSliders() {
	if ($(window).width() < 1023) {
		if ($('.facts .row').length) {
			$('.facts .row > *').addClass('swiper-slide')
			$('.facts .row').addClass('swiper-wrapper').removeClass('row')

			$('.facts .swiper').each(function (i) {
				$(this).addClass('facts_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 10,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}

				factsSliders.push(new Swiper('.facts_s' + i, options))
			})
		}
	} else {
		factsSliders.forEach(element => element.destroy(true, true))

		factsSliders = []

		$('.facts .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.facts .row > *').removeClass('swiper-slide')
	}
}