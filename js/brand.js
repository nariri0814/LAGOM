let mobile_chk = navigator.userAgent.toLowerCase();
let array = ["android", "iphone", "ipad"];
for(let i = 0; i < array.length; i++) {
    if(mobile_chk.match(array[i])) {
        location = "m_brand.html";
    }
};
if(navigator.maxTouchPoints > 1) {
    location = "m_brand.html";
}
$(document).ready(function(){

    //////////////// 버튼 색 변경 ////////////////
    $('.brand_btn').eq(0).addClass('brand_btn_active');
    $('.btn_brand_story').click(function(event){
        event.preventDefault();
        $('.btn_brand_story').addClass('brand_btn_active');
        $('.btn_history').removeClass('brand_btn_active');
    });
    $('.btn_history').click(function(event){
        event.preventDefault();
        $('.btn_history').addClass('brand_btn_active');
        $('.btn_brand_story').removeClass('brand_btn_active');
    });

    //////////////// 타이틀버튼 판 변경 ////////////////
    function brand_btn_chk(chk_sec, bloc_sec, non_sec) {
        $(chk_sec).click(function(){
            $(bloc_sec).css({
                display: 'block'
            });
            $(non_sec).css({
                display: 'none'
            }); 
            $('.init_pos_active').removeClass('init_pos_active');
        });
    };
    brand_btn_chk('.btn_brand_story', '.brand_story', '.history');
    brand_btn_chk('.btn_history', '.history', '.brand_story');
    //////////////// 브랜드스토리 글자 애니메이션 ////////////////

    let bs_txt_top = $('.bs_sec1_txt_box').offset().top;

    $(window).scroll(function(){
        let w_top = $(window).scrollTop();
        let w_height = $(window).height();

        if(w_top + (w_height * 0.7) >= bs_txt_top) {
            $('.bs_sec1_txt1, .bs_sec1_txt2, .bs_sec1_txt3').addClass('init_pos_active')
        } 
    })




    //////////////// 브랜드스토리 순차적 올라옴 ////////////////
    function bs_sec2_ani(ani_box,ani_add_box) {
        $(window).scroll(function(){
            let box_top = $(ani_box).offset().top;
            let w_top = $(window).scrollTop();
            let w_height = $(window).height();
            if(w_top + (w_height * 0.6) >= box_top) {
                $(ani_box).children('.bs_sec2_box_img').children().css({
                    opacity: 1,
                    transform: 'scale(1)'
                });
                $(ani_box).children(ani_add_box).children().addClass('init_pos_active');
            };
        });
    };
    bs_sec2_ani('.bs_sec2_box1', '.bs_sec2_box1_txt');
    bs_sec2_ani('.bs_sec2_box2', '.bs_sec2_box2_txt');
    bs_sec2_ani('.bs_sec2_box3', '.bs_sec2_box3_txt');
    

    //////////////// 아쿠아 배너 ////////////////
    let timer = 1300;
    let aqua_index = 1;
    let aqua_length = $('.bs_sec3_banner').length;
    $('.bs_sec3_banner').eq(0).css('opacity', '1');
    function aqua_slide(c_in, c_opa, o_in, o_opa) {
        //들어올배너
        $('.bs_sec3_banner').eq(c_in).animate({
            opacity: c_opa
        }, timer);

        //나갈베너
        $('.bs_sec3_banner').eq(o_in).animate({
            opacity: o_opa
        }, timer);
    };
    // 버튼 막기 //
    function btn_init() {
        $('.btn_banner').css('pointerEvents', 'none');
        setTimeout(function(){
            $('.btn_banner').css('pointerEvents', 'auto');
        }, timer);
    };
    // 자동 슬라이드 //
    let inter;
    function aqua_auto_sl() {
        inter = setInterval(function() {
            aqua_slide(aqua_index % aqua_length, 1, (aqua_index - 1) % aqua_length, 0)
            aqua_index += 1;
        }, timer + 1300);
    };
    aqua_auto_sl();
    
    // 왼쪽 오른쪽 버튼
    $('.btn_L').click(function(){
        clearInterval(inter);
        btn_init();
        aqua_slide(aqua_index % aqua_length, 1, (aqua_index - 1) % aqua_length, 0);
        aqua_index += 1;
        aqua_auto_sl();
    });
    $('.btn_R').click(function(){
        clearInterval(inter);
        btn_init();
        aqua_index -= 1;
        aqua_slide((aqua_index - 1) % aqua_length, 0, aqua_index % aqua_length, 1);
        aqua_auto_sl();
    });
    
    //////////////// 콜라보(sec4) 배너 ////////////////
    $(window).scroll(function(){
        let sec4_top = $('.bs_sec4').offset().top;
        let w_top = $(window).scrollTop();
        let w_height = $(window).height();

        if(w_top + (w_height * 0.6) >= sec4_top) {
            $('.bs_sec4 > img').css({
                opacity: 1,
                transform: 'scale(1.1)'
            });
        };
    });

    //////////////// 히스토리 순차적 올라옴 ////////////////
    function item_animation(item_sec) {

         // his_sec1  his_sec2
        
        $(window).scroll(function(){
            let item_top = $(item_sec).offset().top; 
            let w_top = $(window).scrollTop();
            let w_height = $(window).height();
// console.log(item_top);
            let txt_box_length = $(item_sec).find('.txt_box').length;
            // console.log($(item_sec).find('.txt_box').length);

            if(w_top + (w_height * 0.5) >= item_top) {
                for(let i=0; i<txt_box_length; i++) {
                    (function(tmp_i) {
                        setTimeout(function(){
                            $(item_sec).find('.txt_box').eq(tmp_i).addClass('init_pos_active');
                        }, 100*tmp_i)
                    })(i)
                };
            };
        });
    };
    
    item_animation('.his_sec1');
    item_animation('.his_sec2');


});