$(function () {

    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    checScroll(scrollPos, introH);
    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checScroll(scrollPos, introH)
    });

    function checScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });

    /* Nav Toggle */
     $("#burger, #nav__link").on("click", function(event) {
        event.preventDefault();

        $("#nav, #burger").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });


    /* Reviews https://kenwheeler.github.io/slick/*/
    $('.slider').slick({
        arrows: false
        , dots: true
        , slidesToShow: 4
        , responsive: [
            {
                breakpoint: 1210
                , settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 991
                , settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 767
                , settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


/* Спойлер на HTML CSS и jQuery */
$(document).ready(function() {
    $('.block__subtytle').click(function(event) {
        if($('.block').hasClass('one')){
            $('.block__subtytle').not($(this)).removeClass('active');
           $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

/* Modal на HTML CSS и jQuery */
$(function() {

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

});

/* Animation на HTML CSS и jQuery */
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.botom__animation, .botom__animation_2, .botom__animation_3, .botom__animation_4, .left__animation, .left__animation_2, .left__animation_3, .left__animation_4, .left__animation_5, .left__animation_6');

for (let elm of elements) {
  observer.observe(elm);
}
