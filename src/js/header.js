class Header {
  constructor($el) {
    this.$el = $el;
    this.$dataMenu = $el.find("[data-menu]");
    this.$dataOpenMenu = $el.find("[data-open-menu]");
    this.$dataItem = $el.find("[data-item]");

    this.initHeaderListeners();
    this.headerScroll();
    this.headerLinkActive();
  }

  initHeaderListeners() {
    this.$dataOpenMenu.on("click", this.openMenu);
    this.$dataItem.on("click", this.openItemMenu);
  }

  openMenu = (e) => {
    this.$dataOpenMenu.toggleClass("active");
    this.$dataMenu.toggleClass("active");
    $("body").toggleClass("active");
  };

  openItemMenu = (e) => {
    this.$dataOpenMenu.removeClass("active");
    this.$dataMenu.removeClass("active");
  };

  headerScroll = () => {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("sticky");
      } else {
        $(".header").removeClass("sticky");
      }
    });
  };

  headerLinkActive = () => {
    const sections = $("section");
    const nav = $("nav");
    const nav_height = nav.outerHeight();
    const link = $(".link");

    $(window).on("scroll", function () {
      var cur_pos = $(this).scrollTop();

      sections.each(function () {
        var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find("a.link").removeClass("active");

          $(this).addClass("active");
          nav
            .find('a.link[href="#' + $(this).attr("id") + '"]')
            .addClass("active");
        }
      });
    });
  };
}

const HeaderInit = {
  init() {
    const $el = $(".header");
    if ($el.length) {
      new Header($el);
    }
  },
};

export default HeaderInit;
