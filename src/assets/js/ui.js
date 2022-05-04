var Header = {
	init : function(){
		this.collapse();
	},
	collapse: function(e){

	},
}

var Common = {
	init: function () {
		this.scrolling();
		window.addEventListener('mousewheel', Common.scrolling);
		window.addEventListener('touchmove', Common.scrolling);
		$(window).scroll(function(){
			Common.scrolling();
		});
	},
	scrolling : function(e){
		var scrollTop = $(window).scrollTop();

		if(scrollTop > 0){
			$('html').addClass('is-scrolled');
		}else{
			$('html').removeClass('is-scrolled');
		}

		//scrollbar bottom check
		if ($('html').hasClass('is-scrolled')) {
			if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
				$('html').addClass('is-bottom');
			}else{
				$('html').removeClass('is-bottom');
			}
		}
	},
};

Header.init();
Common.init();
