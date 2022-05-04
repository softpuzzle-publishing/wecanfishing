"use strict";

var Header = {
  init: function init() {
    this.collapse();
  },
  collapse: function collapse(e) {}
};
var Common = {
  init: function init() {
    this.scrolling();
    window.addEventListener('mousewheel', Common.scrolling);
    window.addEventListener('touchmove', Common.scrolling);
    $(window).scroll(function () {
      Common.scrolling();
    });
  },
  scrolling: function scrolling(e) {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
      $('html').addClass('is-scrolled');
    } else {
      $('html').removeClass('is-scrolled');
    } //scrollbar bottom check


    if ($('html').hasClass('is-scrolled')) {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
        $('html').addClass('is-bottom');
      } else {
        $('html').removeClass('is-bottom');
      }
    }
  }
};
Header.init();
Common.init();