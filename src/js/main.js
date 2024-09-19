//==============global variables=================
var winW = window.innerWidth;
var winH = window.innerHeight;
//console.log(`window width is ${winW}`);

// Document ready function

$(document).ready(function (evt) {
	// Displaying current year
	getCurrentYear();

	// Toggle sidebar
	$("#nav-icon3").click(function () {
		$(this).toggleClass("open");
		$(".sidebar_wrap").toggleClass("open");
	});

	// Force click on nav-menu when any link is clicked
	$(".sidebar_wrap .links a").on("click", function () {
		$("#nav-icon3").trigger("click");
	});
});

// Window load function
$(window).on("load", function () {
	setTimeout(function () {
		$(".loader_overlay").fadeOut(300);
	}, 100);
});

// Window scroll function
$(window).on("scroll", function (e) {
	var scrollTopPos = $(window).scrollTop();

	//lazy loading images
	//html syntax below
	//<img data-lazy-src="path/to/image" alt="" class="">

	$("img[data-lazy-src]").each(function () {
		if ($(this).attr("src") == undefined) {
			var getOffsetTop = $(this).offset().top;
			if (getOffsetTop < scrollTopPos + winH * 2) {
				$(this).attr("src", $(this).attr("data-lazy-src"));
			}
		}
	});
});

// Window resize function
$(window).on("resize", function () {});

// Window orientation change function
window.addEventListener("orientationchange", function () {
	location.reload();
});
