"use strict";

$(document).ready(function () {
	!(function () {
		$(".h-menu__head").on("click", function () {
			$(".h-menu").removeClass("h-menu--active");
			$("body, html").css("overflow", "");
			$(".submenu").removeClass("submenu--active");
			$(".h-menu__back").removeClass("h-menu__back--active");
		});
		$(".h-menu__back").on("click", function () {
			$(".submenu").removeClass("submenu--active");
			$(".h-menu__back").removeClass("h-menu__back--active");
		});
		$(".h-menu__link").on("click", function (e) {
			var sub = $(this).parent().find(".submenu"); /// console.log(sub);

			if (sub.length > 0) {
				e.preventDefault();
				sub.addClass("submenu--active");
				$(".h-menu__back").addClass("h-menu__back--active");
			}
		});
		$(".header__menuopen").on("click", function () {
			$(".h-menu").addClass("h-menu--active");
			$("body, html").css("overflow", "hidden");
		});
	})();

	if ($("body").width() < 641) {
		$(".drop-menu-item .icon-down").on("click", function () {
			$(this).toggleClass("active");
			$(this).siblings(".drop-menu").slideToggle("slow");
		});
		$(".header__backet a.backet").on("click", function (e) {
			e.preventDefault();
			$(this).parent().find(".backet-block").slideToggle("slow");
		});
		$(".backet-block__close").on("click", function () {
			$(this).parent().parent().slideToggle("slow");
		});
		$(document).mouseup(function (e) {
			// событие клика по веб-документу
			var div3 = $(".header__backet");

			if (
				!div3.is(e.target) && // если клик был не по нашему блоку
				div3.has(e.target).length === 0
			) {
				// и не по его дочерним элементам
				$(".backet-block").slideUp("slow");
			}
		});
	}

	$(".name-mob").on("click", function () {
		if ($(this).hasClass("open")) {
			$(this).parent().find(".mob-value").slideUp("slow");
			$(this).removeClass("open");
		} else {
			$(".mob-value").slideUp("slow");
			$(".name-mob").removeClass("open");
			$(this).parent().find(".mob-value").slideDown("slow");
			$(this).addClass("open");
		}
	});
	$("body").on("click", ".category-mob", function () {
		if ($(this).hasClass("open")) {
			$(this).parent().find(".category-desc").slideUp("slow");
			$(this).parent().find(".category-types").slideUp("slow");
			$(this).removeClass("open");
		} else {
			$(".category-desc").slideUp("slow");
			$(".category-types").slideUp("slow");
			$(".category-mob").removeClass("open");
			$(this).parent().find(".category-desc").slideDown("slow");
			$(this).parent().find(".category-types").slideDown("slow");
			$(this).addClass("open");
		}
	});
	$(".drop-menu__group .subcategory-icon-down").on("click", function () {
		if ($(this).parent().hasClass("opened")) {
			$(this).siblings("ul.subcategories").slideUp("slow");
			$(this).parent().removeClass("opened");
		} else {
			$(".drop-menu__group ul.subcategories").slideUp("slow");
			$(".drop-menu__group").removeClass("opened");
			$(this).siblings("ul.subcategories").slideDown("slow");
			$(this).parent().addClass("opened");
		}
	});
	$(".header__search .search").on("click", function () {
		if ($(this).is(".active")) {
			$(".backet-block").removeClass("disabled");
			$(".h-search__wrap").animate(
				{
					width: "81px",
				},
				250,
				"linear",
				function () {
					$(".header__search .search").removeClass("active");
					$("form.h-search").hide(
						"drop",
						{
							direction: "up",
						},
						250
					);
				}
			);
		} else {
			$(".backet-block").addClass("disabled");
			$("form.h-search").show(
				"drop",
				{
					direction: "up",
				},
				250
			);
			$(this).addClass("active");
			setTimeout(function () {
				$(".h-search__wrap").animate(
					{
						width: "100%",
					},
					250,
					"linear",
					function () {
						$(".h-search__input").focus();
					}
				);
			}, 250);
		}
	});
	$("form.h-search .h-search-close").on("click", function () {
		$(".backet-block").removeClass("disabled");
		$(".h-search__wrap").animate(
			{
				width: "81px",
			},
			250,
			"linear",
			function () {
				$("form.h-search").hide(
					"drop",
					{
						direction: "up",
					},
					250
				);
				$(".header__search .search").removeClass("active");
			}
		);
	});
	$(".search-icon").on("click", function () {
		if ($("body").width() < 640) {
			var width_len = "93%";
		} else {
			var width_len = "96%";
		}

		$(this).hide();
		$("form.p-search").show();
		$(".p-search").animate(
			{
				width: width_len,
			},
			250
		);
	});
	$(".p-search-close").on("click", function () {
		$("form.p-search").show();
		$(".p-search").animate(
			{
				width: "72px",
			},
			250,
			"linear",
			function () {
				$(".p-search").hide();
				$(".search-icon").show();
			}
		);
	});
	$(document).mouseup(function (e) {
		// событие клика по веб-документу
		var div = $("form.h-search");
		var div2 = $(".header__search .search");
		var div3 = $(".header__backet");

		if (
			!div.is(e.target) && // если клик был не по нашему блоку
			div.has(e.target).length === 0 &&
			!div2.is(e.target) &&
			div2.has(e.target).length === 0
		) {
			// и не по его дочерним элементам
			$(".backet-block").removeClass("disabled");
			$(".h-search__wrap").animate(
				{
					width: "81px",
				},
				250,
				"linear",
				function () {
					$("form.h-search").hide(
						"drop",
						{
							direction: "up",
						},
						250
					);
					$(".header__search .search").removeClass("active");
				}
			);
		}
	}); //

	$(".h-search__input").keyup(function () {
		if ($(this).val() == "123") {
			$(this).parent().parent().find(".search-block").show();
		} else {
			$(this).parent().parent().find(".search-block").hide();
		}
	});
	$(".main-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
	});
	$(".akcii-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	});
	$(".letters-slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		centerMode: true,
		centerPadding: "50px",
		variableWidth: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	});
	$(".product-photos-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: ".product-photos-slider-nav",
	});
	$(".product-photos-slider-nav").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: ".product-photos-slider",
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<button type="button" class="slick-prev"></button>',
					nextArrow: '<button type="button" class="slick-next"></button>',
				},
			},
		],
	});
	$(window)
		.bind("update_quantity", function () {
			$('[class*="-number-item"]').on("click", function (e) {
				var input = $(this).parent().find("input[type=number]"),
					val = input.val();
				console.log(val);
				$(this).is(".plus-number-item") ? val++ : 1 < val && val--;
				console.log(val);
				input.val(val);
				input.trigger("change");
				e.preventDefault();
			});
		})
		.trigger("update_quantity");
	$("#fl_inp").change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		$("#fl_nm").html(filename);
	});
	var $topblock = $(".header");

	if ($("body").hasClass("home")) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 0) {
				$topblock.addClass("fixed");
			} else {
				$topblock.removeClass("fixed");
			}
		}); //scroll
	}

	var btn = $("#back-to-top");
	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass("show");
		} else {
			btn.removeClass("show");
		}

		if ($(".h-menu__link.current").length) {
			var position = $($(".h-menu__link.current").attr("href")).offset().top;
			var height = $($(".h-menu__link.current").attr("href")).height();
			var current_position = $(window).scrollTop();
			var current_height = $(window).height();
			console.log({
				position: position,
				height: height,
				current_position: current_position,
			});

			if (
				current_position < position - current_height ||
				position + height < current_position
			) {
				$(".h-menu__link.current").removeClass("current");
			}
		}

		if ($(".list-about").length) {
			if (
				!$(".list-about").hasClass("complete") &&
				$(window).scrollTop() + $(window).height() / 2 >
					$(".list-about").offset().top
			) {
				var circle = [
					{
						id: "#number1",
						number: "15",
					},
					{
						id: "#number2",
						number: "2",
					},
					{
						id: "#number3",
						number: "6",
					},
					{
						id: "#number4",
						number: "30",
					},
					{
						id: "#number5",
						number: "2000",
					},
					{
						id: "#number6",
						number: "3000",
					},
				];
				$(".el-about__number svg").remove();
				$(".progressbar-text").remove();
				circle.forEach(function (a, b, c) {
					if ($(a.id).length) {
						var bar = new ProgressBar.Circle(a.id, {
							color: "#aaa",
							strokeWidth: 1,
							trailWidth: 1,
							easing: "easeInOut",
							duration: 4000,
							text: {
								value: "0",
								style: {
									color: "#f2221d",
									position: "absolute",
									left: "50%",
									top: "50%",
									padding: 0,
									margin: 0,
									// You can specify styles which will be browser prefixed
									transform: {
										prefix: true,
										value: "translate(-50%, -50%)",
									},
								},
								autoStyleContainer: false,
							},
							from: {
								color: "#e7e7e7",
								width: 1,
							},
							to: {
								color: "#f2221d",
								width: 1,
							},
							// Set default step function for all animate calls
							step: function step(state, circle) {
								circle.path.setAttribute("stroke", state.color);
								circle.path.setAttribute("stroke-width", state.width);
								var value = Math.round(circle.value() * a.number);

								if (value === 0) {
									circle.setText("0");
								} else {
									circle.setText(value);
								}
							},
						});
						bar.text.style.fontFamily = '"Open Sans", sans-serif';
						bar.text.style.fontSize = "5.6rem";
						bar.animate(1.0); // Number from 0.0 to 1.0
					}
				});
				$(".list-about").addClass("complete");
			}
		}
	});

	if ($(".list-about").length) {
		if (
			!$(".list-about").hasClass("complete") &&
			$(window).scrollTop() + $(window).height() / 2 >
				$(".list-about").offset().top
		) {
			var circle = [
				{
					id: "#number1",
					number: "15",
				},
				{
					id: "#number2",
					number: "2",
				},
				{
					id: "#number3",
					number: "6",
				},
				{
					id: "#number4",
					number: "30",
				},
				{
					id: "#number5",
					number: "2000",
				},
				{
					id: "#number6",
					number: "3000",
				},
			];
			$(".progressbar-text").remove();
			$(".el-about__number svg").remove();
			circle.forEach(function (a, b, c) {
				if ($(a.id).length) {
					var bar = new ProgressBar.Circle(a.id, {
						color: "#aaa",
						strokeWidth: 1,
						trailWidth: 1,
						easing: "easeInOut",
						duration: 4000,
						text: {
							value: "0",
							style: {
								color: "#f2221d",
								position: "absolute",
								left: "50%",
								top: "50%",
								padding: 0,
								margin: 0,
								// You can specify styles which will be browser prefixed
								transform: {
									prefix: true,
									value: "translate(-50%, -50%)",
								},
							},
							autoStyleContainer: false,
						},
						from: {
							color: "#e7e7e7",
							width: 1,
						},
						to: {
							color: "#f2221d",
							width: 1,
						},
						// Set default step function for all animate calls
						step: function step(state, circle) {
							circle.path.setAttribute("stroke", state.color);
							circle.path.setAttribute("stroke-width", state.width);
							var value = Math.round(circle.value() * a.number);

							if (value === 0) {
								circle.setText("0");
							} else {
								circle.setText(value);
							}
						},
					});
					bar.text.style.fontFamily = '"Open Sans", sans-serif';
					bar.text.style.fontSize = "5.6rem";
					bar.animate(1.0); // Number from 0.0 to 1.0
				}
			});
			$(".list-about").addClass("complete");
		}
	}

	btn.on("click", function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			1500
		);
	});
	$(".asidemenu-item.haschild .moreitems").on("click", function () {
		if ($(this).parent().hasClass("opened")) {
			$(this).siblings("ul").slideUp("slow");
			$(this).parent().removeClass("opened");
		} else {
			$(".asidemenu-item ul").slideUp("slow");
			$(".asidemenu-item").removeClass("opened");
			$(this).siblings("ul").slideDown("slow");
			$(this).parent().addClass("opened");
		}
	});
	$("a.scroll").on("click", function (e) {
		e.preventDefault();
		$("body, html").css("overflow", "");
		$("a.scroll").removeClass("current");
		var anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $(anchor.attr("href")).offset().top - 100,
				},
				777,
				function () {
					anchor.addClass("current");
				}
			);

		if ($(".h-menu").hasClass("h-menu--active")) {
			$(".h-menu").removeClass("h-menu--active");
		}
	});
	var ua = window.navigator.userAgent.toLowerCase(),
		is_ie = /trident/gi.test(ua) || /msie/gi.test(ua);

	if (!is_ie) {
		var styles = [],
			distance = [1, 1, 1, 1, 1, 1, 1],
			$win = $(window),
			$marker1 = $("#about .section-title"),
			$marker2 = $("#catalog .section-title"),
			$marker3 = $("#akcii .section-title"),
			$marker4 = $("#clients .section-title"),
			$marker5 = $("#contacts .section-title"),
			$marker6 = $("#letters .section-title"),
			$marker7 = $("#advant .section-title");
		var object_line = [
			"#about",
			"#catalog",
			"#akcii",
			"#clients",
			"#contacts",
			"#advant",
			"#letters",
		];

		if ($marker1.length) {
			$win.on("scroll", function () {
				object_line.forEach(function (a, b, c) {
					styles[b] = document.getElementById("styles_mover" + b);

					if (
						$win.scrollTop() + ($win.height() * 2) / 3 >=
						$(a + " .section-title").offset().top - 100
					) {
						var move = function move() {
							styles[b].innerHTML =
								a + " .section-title:after {width: " + distance[b] + "%}";
							distance[b] = distance[b] + 0.3;
							if (distance[b] < 100) setTimeout(move, 50);
						};

						move();
					}
				});
			});
			object_line.forEach(function (a, b, c) {
				styles[b] = document.getElementById("styles_mover" + b);

				if (
					$win.scrollTop() + $win.height() >=
					$(a + " .section-title").offset().top - 100
				) {
					var move = function move() {
						styles[b].innerHTML =
							a + " .section-title:after {width: " + distance[b] + "%}";
						distance[b] = distance[b] + 1.2;
						if (distance[b] < 100) setTimeout(move, 6);
					};

					move();
				}
			});
		}
	}

	$(".popup-gallery").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Loading image #%curr%...",
		mainClass: "mfp-img-mobile",
		fixedContentPos: true,
		showCloseBtn: false,
		gallery: {
			enabled: true,
			navigateByImgClick: false,
			preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
		},
	});
	$(".el-backet__remove").on("click", function () {
		$(this).parent(".el-backet").slideUp("slow");
	});
	$(".popup").magnificPopup({
		type: "inline",
		preloader: false,
		removalDelay: 160,
		closeOnBgClick: true,
		enableEscapeKey: true,
		fixedContentPos: true,
		showCloseBtn: false,
	});
	$(document).on("click", ".popup-close", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	$(".images-slider, .images-akcii-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 1000,
		arrows: false,
	});
	$(".popup").on("mfpOpen", function (e) {
		$(".images-slider").slick("refresh");
		$(".images-akcii-slider").slick("refresh");
	});

	if ($("body").width() < 641) {
		$(".list-advant").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: "60px",
			adaptiveHeight: true,
			dots: true,
			speed: 1000,
			arrows: false,
		});
	}

	$(".placeholder").click(function () {
		$(this).siblings("input").focus();
		$(this).siblings("textarea").focus();
	});
	$(".form-control").focus(function () {
		$(this).siblings(".placeholder").hide();
	});
	$(".form-control").blur(function () {
		var $this = $(this);
		if ($this.val().length == 0) $(this).siblings(".placeholder").show();
	});
	$(".form-control").blur();
	$(".contacts-caption__el .title").on("click", function () {
		$(".contacts-caption__el").removeClass("active");
		var dataid = $(this).parent().attr("data-id");
		$(".contacts-item").hide();
		$("#" + dataid + ".contacts-item").show();
		$(this).parent().addClass("active");
	});
	var myMap1;
	var myMap2;
	ymaps.ready(init);

	function init() {
		var myMap1 = new ymaps.Map("map1", {
			center: [59.984643639203206, 30.357155993392915],
			zoom: 15,
			type: "yandex#map",
			controls: ["fullscreenControl", "zoomControl"],
		});
		var myMap2 = new ymaps.Map("map2", {
			center: [55.66378170136508, 37.948794542243476],
			zoom: 16,
			type: "yandex#map",
			controls: ["fullscreenControl", "zoomControl"],
		});

		if ($("body").width() < 769) {
			myMap1.behaviors.disable("drag");
			myMap2.behaviors.disable("drag");
		}

		myMap1.behaviors.disable("scrollZoom");
		myMap2.behaviors.disable("scrollZoom");
		var myGeocoder1 = ymaps.geocode(
			"Россия, Санкт-Петербург, Кантемировская улица, 39"
		);
		myGeocoder1.then(function (res) {
			var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
			myMap1.geoObjects.add(
				new ymaps.Placemark(coordinates, {
					balloonContent: "Кантемировская ул., д. 39, офис 404",
				})
			);
		});
		var myGeocoder2 = ymaps.geocode(
			"Россия, Московская область, городской округ Люберцы, рабочий посёлок Томилино, улица Гоголя, 39"
		);
		myGeocoder2.then(function (res) {
			var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
			myMap2.geoObjects.add(
				new ymaps.Placemark(coordinates, {
					balloonContent: "Томилино, Гоголя ул., д.39",
				})
			);
		});
	}
});
("use strict");
//# sourceMappingURL=index.js.map
