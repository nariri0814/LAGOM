$(document).ready(function(){

    /////////////brand_btn 버튼누르면 디스플레이바꾸기/////////
    $('.brand_btn_box').click(function(){
        $('.brand_btn_box_inner').toggleClass('brand_btn_box_active')
    });
    function brand_btn_chk(chk_sec, bloc_sec, non_sec, bloc_txt) {
        $(chk_sec).click(function(){
            $(bloc_sec).css({
                display: 'block'
            });
            $(non_sec).css({
                display: 'none'
            }); 
            $('.brand_btn_sl_box H2').text(bloc_txt)
        });
    };
    
    brand_btn_chk('.btn_brand_story', '.brand_story', '.history', 'BRAND STORY');
    brand_btn_chk('.btn_history', '.history', '.brand_story', 'HISTORY');

    /////////////bs_sec4 아쿠아 배너//////////////
    let timer = 1200;
    let aqua_index = 1;
    let aqua_length = $('.bs_sec4_banner').length;
    $('.bs_sec4_banner').eq(0).css('opacity', '1');
    function aqua_slide(c_in, c_opa, o_in, o_opa) {
        //들어올배너
        $('.bs_sec4_banner').eq(c_in).animate({
            opacity: c_opa
        }, timer);

        //나갈베너
        $('.bs_sec4_banner').eq(o_in).animate({
            opacity: o_opa
        }, timer);
        btn_init();
    };
    // 버튼 막기 //
    function btn_init() {
        $('.bs_btn_ban').css('pointerEvents', 'none');
        setTimeout(function(){
            $('.bs_btn_ban').css('pointerEvents', 'auto');
        }, timer);
    };
    // 자동 슬라이드 //
    let inter;
    function aqua_auto_sl() {
        inter = setInterval(function() {
            aqua_slide(aqua_index % aqua_length, 1, (aqua_index - 1) % aqua_length, 0)
            aqua_index += 1;
        }, timer + 1000);
    };
    aqua_auto_sl();
    
    // 왼쪽 오른쪽 버튼
    $('.bs_btn_L').click(function(){
        clearInterval(inter);
        aqua_slide(aqua_index % aqua_length, 1, (aqua_index - 1) % aqua_length, 0);
        aqua_index += 1;
        aqua_auto_sl();
    });
    $('.bs_btn_R').click(function(){
        clearInterval(inter);
        aqua_index -= 1;
        aqua_slide((aqua_index - 1) % aqua_length, 0, aqua_index % aqua_length, 1);
        aqua_auto_sl();
    });

    /////////////award 배너//////////////
    let aw_index = 1;
    let aw_ban_length = $('.his_sec2_banner').length;
    function ev_slide(c_in, c_po, o_in, o_po) {
        //들어올배너
        $('.his_sec2_banner').eq(c_in).css({
            left: c_po
        }).animate({
            left:0
        }, timer);

        //나갈베너
        $('.his_sec2_banner').eq(o_in).animate({
            left: o_po
        }, timer);
    };
    
    // 초기 위치값
    $('.his_sec2_banner').eq(0).css({left:0});
   
    //자동슬라이드
    function aw_auto_sl() {
        setInterval(function() {
            ev_slide(aw_index % aw_ban_length, '100%', (aw_index -1) %  aw_ban_length, '-100%');
        aw_index+=1;
        }, timer + 1300);
    };
    aw_auto_sl();

    //////////////// 브랜드스토리 글자 애니메이션 ////////////////

    let bs_txt_top = $('.bs_sec1_txt_box').offset().top;

    $(window).scroll(function(){
        let w_top = $(window).scrollTop();
        let w_height = $(window).height();

        if(w_top + (w_height * 0.4) >= bs_txt_top) {
            $('.bs_sec1_txt1, .bs_sec1_txt2, .bs_sec1_txt3').addClass('init_pos_active')
        } 
    });

    //////////////// 브랜드스토리 순차적 올라옴 & 크기변경 ////////////////
    function bs_sec2_ani(ani_box, ani_add_box) {
        $(window).scroll(function(){
            let box_top = $(ani_box).offset().top;
            let w_top = $(window).scrollTop();
            let w_height = $(window).height();
            if(w_top + (w_height * 0.6) >= box_top) {
                $(ani_box).children('.bs_sec2_box_img').children().css({
                    opacity: 1,
                    transform: 'scale(1.1)'
                });
                $(ani_box).children(ani_add_box).children().addClass('init_pos_active');
            };
        });
    };
    bs_sec2_ani('.bs_sec2_box1', '.bs_sec2_box1_txt');
    bs_sec2_ani('.bs_sec2_box2', '.bs_sec2_box2_txt');
    bs_sec2_ani('.bs_sec2_box3', '.bs_sec2_box3_txt');

    /////////////스크롤시 크기변경//////////////

    $(window).scroll(function(){
        let sec5_top = $('.bs_sec5').offset().top;
        let w_top = $(window).scrollTop();
        let w_height = $(window).height();
        if(w_top + (w_height * 0.6) >= sec5_top) {
            $('.bs_sec5').children().css({
                opacity: 1,
                transform: 'scale(1)'
            });
        };
    });



    /////////////스크롤시 순차적으로//////////////
    function item_animation(item_sec, item_move) {
       
       $(window).scroll(function(){
            let item_top = $(item_sec).offset().top; 
            let w_top = $(window).scrollTop();
            let w_height = $(window).height();
            let txt_box_length = $(item_sec).find(item_move).length;

            if(w_top + (w_height * 0.5) >= item_top) {
               for(let i=0; i<txt_box_length; i++) {
                   (function(tmp_i) {
                       setTimeout(function(){
                           $(item_sec).find('.init_pos').eq(tmp_i).addClass('init_pos_active');
                       }, 100*tmp_i)
                   })(i)
               };
            };
        });
    };

    item_animation('.his_sec1', '.txt_box');
    item_animation('.his_sec2', '.txt_box');






});