$(function () {
	// toggle sidebar
	$(".js-toggle-sidebar--button").click(function (e) {
		e.preventDefault();
		$("body").toggleClass("shrink--sidebar");
		setTimeout(() => {
			handleSidebarScroll();
		}, 300);
	});

	// checking if sidebar has scrollbar and toggling class
	function handleSidebarScroll() {
		$(".sidebar-wrapper--inner").hasScrollBar()
			? $("body").addClass("sidebar--has-scroll")
			: $("body").removeClass("sidebar--has-scroll");
	}

	$(window).on("load resize", function () {
		handleSidebarScroll();
	});

	// reusable scrollbar jQuery function
	(function ($) {
		$.fn.hasScrollBar = function () {
			return this.get(0).scrollHeight > this.height();
		};
	})(jQuery);

	// if notification is open in table down screen
	var notificationDropdownLink = document.querySelector(
		".js-notification-link"
	);
	notificationDropdownLink.addEventListener("show.bs.dropdown", function () {
		if ($(window).width() < 992) {
			$("body").addClass("overflow-hidden");
		}
	});
	notificationDropdownLink.addEventListener("hide.bs.dropdown", function () {
		if ($(window).width() < 992) {
			$("body").removeClass("overflow-hidden");
		}
	});
	// sidebar responsive
	$("#js-toggle-sidebar").mouseup(function (e) {
		var container = $(".sidebar-wrapper--inner");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			$("body").removeClass("shrink--sidebar");
		}
	});
});
