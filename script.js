// Navigation Logo
$(document).ready(function () {
    $(".nav-button").removeClass('change');
    $(".nav-button").click(function () {
        $(".nav-button").toggleClass('change', '');
    });
    $(window).scroll(function () {
        // scrollTop calculates the pixels when we scroll down
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
            }
            });

            $(window).scroll(function () {
                let position = $(this).scrollTop();
                if (position >= 650) {
                    $('.camera-img').addClass('fromLeft');
                    $('.mission-text').addClass('fromRight');
                } else {
                    $('.camera-img').removeClass('fromLeft');
                    $('.mission-text').removeClass('fromRight');
                }
            });

            $(window).scroll(function () {
                let position = $(this).scrollTop();
                if (position >= 1644) {
                    $('.heading').addClass('heading-card');
                } else {
                    $('.heading').removeClass('heading-card');
                }
            });

            $('.gallery-list-item').click(function () {
                let value = $(this).attr('data-filter');
                if (value == 'all') {
                    $('.filter').show(300);
                } else {
                    $('.filter').not('.' + value).hide(300);
                    $('.filter').filter('.' + value).show(300);
                }
            });

            $('.gallery-list-item').click(function () {
                $(this).addClass('active-item').siblings().removeClass('active-item');
            })


            $(window).scroll(function () {
                let position = $(this).scrollTop();
                if (position >= 4300) {
                    $('.card-1').addClass('moveFromLeft');
                    $('.card-2').addClass('moveFromBottom');
                    $('.card-3').addClass('moveFromRight');
                    $('.coffee').addClass('moveFromRight');
                } else {
                    $('.card-1').removeClass('moveFromLeft');
                    $('.card-2').removeClass('moveFromBottom');
                    $('.card-3').removeClass('moveFromRight');
                    $('.coffee').removeClass('moveFromRight');
                }
            });

            /* Contact  input animation */
            $(window).scroll(function () {
                let position = $(this).scrollTop();
                console.log(position);
                if (position >= 5500) {
                    $('.input-form').addClass('leftToRight');
                } else {
                    $('.input-form').removeClass('leftToRight');

                }
            });

            $(window).scroll(function () {
                let position = $(this).scrollTop();
                console.log(position);
                if (position >= 8000) {
                    $('.input-form').addClass('leftToRight1');
                } else {
                    $('.input-form').removeClass('leftToRight1');

                }
            });
            $(window).scroll(function () {
                let position = $(this).scrollTop();
                console.log(position);
                if (position >= 12000) {
                    $('.input-form').addClass('leftToRight2');
                } else {
                    $('.input-form').removeClass('leftToRight2');

                }
            });
            /* End of Contact input animation */

            /* Social Media Buttons */
            $(window).scroll(function () {
                let position = $(this).scrollTop();
                if (position >= 5500) {
                    $('.social-icons').addClass('animate__zoomIn');
                } else {
                    $('.social-icons').removeClass('animate__zoomIn');
                }
            });
            $(window).scroll(function () {
                let position = $(this).scrollTop();
                if (position >= 8500) {
                    $('.social-icons').addClass('animate__zoomIn1');
                } else {
                    $('.social-icons').removeClass('animate__zoomIn1');
                }
            });
            $(window).scroll(function () {
            let position = $(this).scrollTop();
            if (position >= 13000) {
                $('.social-icons').addClass('animate__zoomIn2');
            } else {
                $('.social-icons').removeClass('animate__zoomIn2');
            }
            });
        });
        /* End social media buttons */

            var count = 0;

            $("#logo-hover").hover(function (e) {
                var $sample = $("#logo-hover");
                if (e.type === "mouseenter") {
                    var c = count++;
                    if (c == 0) {
                        $sample.css("transition", "transform .5s linear");
                        $sample.css("transform", "rotateY(180deg)");
                    }
                    if (c == 1) {
                        $sample.css("transition", "transform .5s linear");
                        $sample.css("transform", "rotateX(180deg)");
                    }
                    if (c == 2) {
                        $sample.css("transition", "transform .5s linear");
                        $sample.css("transform", "rotateZ(-180deg)");
                    }
                    if (c == 3) {
                        $sample.css("transition", "transform .5s linear");
                        $sample.css("transform", "scale(1.1)");
                        count = 0;
                    }
                } else if (e.type === "mouseleave") {
                    $sample.css("transform", "rotateY(0deg)");
                    $sample.css("transform", "rotateX(0deg)");
                    $sample.css("transform", "rotateZ(0deg)");
                }
            });