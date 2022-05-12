var Header = {
	init : function(){
		this.banner();
	},
	collapse: function(e){

    },
    banner: function (e) {
        $('.banner-toggler').on('click', function () {
            $('html').toggleClass('banner-collapsed');
        });
    }
}

var Common = {
	init: function () {
		this.scrolling();
		this.datePicker();
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
    datePicker: function () {
        //datepicker
        var currentDate = new Date();
        $(".form-datepicker").datepicker({
            minDate: 0,
            monthNames: [
                "01","02","03","04","05","06","07","08","09","10","11","12",
            ],
            monthNamesShort: [
                "01","02","03","04","05","06","07","08","09","10","11","12",
            ],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            showMonthAfterYear: true,
            showOtherMonths: true,
            dateFormat: "yy-mm-dd",
            gotoCurrent: true,
            beforeShow: function (input, inst) {
                $("#ui-datepicker-div").addClass("datepicker-box");
            },
        })
        .datepicker("setDate", "today");
    },
};

var Layer = {
    init: function () {
        this.show();
        this.close();
    },
    show: function () {
        $('[data-event="layer"]').on('click', function (e) {
            console.log(1);
            e.preventDefault();
            $($(this).attr('href')).addClass('show');
        })
    },
    close: function () {
        $(".layer-close, .layer .dim").on("click", function () {
            $(this).closest(".layer").removeClass('show');
        });
    },
};

Header.init();
Common.init();
Layer.init();
