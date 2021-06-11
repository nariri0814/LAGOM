let mobile_chk = navigator.userAgent.toLowerCase();
let array = ["android", "iphone", "ipad"];
for(let i = 0; i < array.length; i++) {
    if(mobile_chk.match(array[i])) {
        location = "m_index.html";
    }
};
if(navigator.maxTouchPoints > 1) {
    location = "m_index.html";
}


// document.write(navigator.userAgent) 
$(document).ready(function(){
    
    ////////////// 메인배너 슬라이드 //////////////
    let timer = 1300;
    let main_b_index = 1;
    // let indi_index = 1;
    let ban_length = $('.main_ban_box').length;
    let main_auto_inter;
    function main_slide(c_in, c_po, o_in, o_po) {
        indi_color(c_in);
        //들어올배너
        $('.main_ban_box').eq(c_in).css({
            left: c_po
        }).animate({
            left:0
        }, timer);

        //나갈배너
        $('.main_ban_box').eq(o_in).animate({
            left: o_po
        }, timer);
    };
    
    // 인디케이터 색 변경 //
    function indi_color(c_in) {
        $('.indi_o_box .indi').removeClass('indi_active');
        $('.indi_o_box .indi').eq(c_in).addClass('indi_active');
    };
    // 버튼 막기 //
    function btn_init() {
        $('.indi, .btn_banner').css('pointerEvents', 'none');
        setTimeout(function(){
            $('.indi, .btn_banner').css('pointerEvents', 'auto');
        }, timer);
    };
    // 자동 슬라이드 //
    function main_auto_sl() {

        main_auto_inter = setInterval(function() {
            $('.btn_L').trigger('click');
        //     main_slide(main_b_index % ban_length, '100%', (main_b_index -1) %  ban_length, '-100%');
        }, timer + 1500);
    };
    main_auto_sl();
    
    // 초기 위치값
    $('.main_ban_box').eq(0).css({left:0});
    $('.indi_o_box .indi').eq(0).addClass('indi_active');
    
    //왼쪽버튼
    $('.btn_L').click(function(){
        clearInterval(main_auto_inter);
        btn_init();
        main_slide(main_b_index % ban_length, '100%', (main_b_index -1) %  ban_length, '-100%');
        main_b_index+=1;
        main_auto_sl();
    });
    //오른쪽버튼
    $('.btn_R').click(function(){
        clearInterval(main_auto_inter);
        btn_init();
        main_b_index-=1;
        main_slide((main_b_index -1) %  ban_length, '-100%', main_b_index % ban_length, '100%');
        main_auto_sl();
    });

    // 인디 슬라이드
    $('.indi_o_box').children('.indi').click(function(){
        // console.log($('.indi').eq((main_b_index-1) % ban_length ).index());
        // console.log($(this).index());
// console.log("indi_active: " + $('.indi_active').index());
        clearInterval(main_auto_inter);
        btn_init();
        main_auto_sl();
        
        if($('.indi_active').index() > $(this).index()) {
// console.log("왼")
            main_slide($(this).index(), '-100%',(main_b_index -1) %  ban_length, '100%');
        }
        else {
// console.log("우")
            // $('.btn_R').trigger('click');
            main_slide($(this).index(), '100%', (main_b_index -1) %  ban_length, '-100%');
        }

        indi_color($(this).index());
        main_b_index = $(this).index() + 1

    });

    // 재생버튼
        $('.play').click(function(){
            $('.play').css({
                display: "none"
            });
            $('.pause').css({
                display: "block"
            });
            main_auto_sl();
        });

    // 일시정지버튼
        $('.pause').click(function(){
            clearInterval(main_auto_inter);
            $('.pause').css({
                display: "none"
            });
            $('.play').css({
                display: "block"
            });
        });
    
    
    ////////////// 메인프로덕트 순차적 스크롤 //////////////

    function item_animation(item_sec) {

        let item_top = $(item_sec).offset().top;

        $(window).scroll(function(){
            let w_top = $(window).scrollTop();
            let w_height = $(window).height();
            
            if(w_top + (w_height * 0.7) >= item_top) {
                for(let i=0; i<$(item_sec+' .init_pos').length; i++) {
                    (function(tmp_i) {
                        setTimeout(function(){
                            $(item_sec+' .init_pos').eq(tmp_i).addClass('init_pos_active');
                        }, 100*tmp_i)
                    })(i)
                }
            }
        });
    };

    item_animation('.main_product');
    item_animation('.event_banner');

    ////////////// all product 화살표 애니메이션 //////////////
    
    $('.all_product, .all_product_arrow').hover(function(){
        $('.all_product_arrow').addClass('ap_arrow_active');
    },function(){
        $('.all_product_arrow').removeClass('ap_arrow_active');
    });

    ////////////// 아쿠아리카 글자 애니메이션 //////////////

    let aqua_top = $('.aqualicia').offset().top;

    $(window).scroll(function(){
        let w_top = $(window).scrollTop();
        let w_height = $(window).height();

        if(w_top + (w_height * 0.7) >= aqua_top) {
            $('.aq_txt1, .aq_txt3').animate({
                left: '50%',
                opacity: 1
            },1000);

            $('.aq_txt2').animate({
                left: '50%',
                opacity: 1
            },1000);
        } 
    });

    /////////////////// 물결효과 ///////////////////
    $('.wave').ripples({
        resolution: 130,
        perturbance: 0.01
    });
    $(".aqualicia_txt").on('mousedown',function(e){
        e.offsetX=400;
        e.offsetY=200;
    });
    setTimeout(function(){
        $(".aqualicia_txt").fadeIn(600);
        $(".aqualicia_txt").trigger('mousedown');
    },600);


    ////////////// 인스타 첫번째박스 화살표 애니메이션 //////////////
    $('.insta_box1').hover(function(){
        $('.hover_txt').stop().animate({ // 글자
            opacity:1
        },300);
        $('.insta_top_txt3').stop().animate({ // 화살표
            left: '110px'
        },100);
    }, function(){
        $('.hover_txt').stop().animate({
            opacity:0
        },200);
        $('.insta_top_txt3').stop().animate({
            left: 0
        },400);
    });



});