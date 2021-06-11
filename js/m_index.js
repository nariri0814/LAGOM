$(document).ready(function(){
    ////////메인배너 슬라이드////////
    let main_timer = 1000;
    let main_b_index = 1;
    let main_ban_length = $('.main_ban_box').length;
    let main_auto_inter;
    function main_slide(c_in, c_po, o_in, o_po) {
        indi_color(c_in);
        //들어올배너
        $('.main_ban_box').eq(c_in).css({
            left: c_po
        }).animate({
            left:0
        }, main_timer);

        //나갈베너
        $('.main_ban_box').eq(o_in).animate({
            left: o_po
        }, main_timer);
    };
    
    // 인디케이터 색 변경 //
    function indi_color(c_in) {
        $('.indi_box .indi').removeClass('indi_active');
        $('.indi_box .indi').eq(c_in).addClass('indi_active');
    };
    // 버튼 막기 //
    function main_btn_init() {
        $('.indi, .btn_banner').css('pointerEvents', 'none');
        setTimeout(function(){
            $('.indi, .btn_banner').css('pointerEvents', 'auto');
        }, main_timer);
    };
    // 자동 슬라이드 //
    function main_auto_sl() {
        main_auto_inter = setInterval(function() {
            $('.btn_L').trigger('click');
        }, main_timer + 1300);
    };
    main_auto_sl();
    
    // 초기 위치값
    $('.main_ban_box').eq(0).css({left:0});
    $('.indi_box .indi').eq(0).addClass('indi_active');
    
    //왼쪽버튼
    $('.btn_L').click(function(){
        clearInterval(main_auto_inter);
        main_btn_init();
        main_slide(main_b_index % main_ban_length, '100%', (main_b_index -1) %  main_ban_length, '-100%');
        main_b_index+=1;
        main_auto_sl();
    });
    //오른쪽버튼
    $('.btn_R').click(function(){
        clearInterval(main_auto_inter);
        main_btn_init();
        main_b_index-=1;
        main_slide((main_b_index -1) %  main_ban_length, '-100%', main_b_index % main_ban_length, '100%');
        main_auto_sl();
    });

    // 인디 슬라이드
    $('.indi').click(function(){
        clearInterval(main_auto_inter);
        main_btn_init();
        main_auto_sl();
        
        if($('.indi_active').index() > $(this).index()) {
            main_slide($(this).index(), '-100%',(main_b_index -1) %  main_ban_length, '100%');
        }
        else {
            main_slide($(this).index(), '100%', (main_b_index -1) %  main_ban_length, '-100%');
        }
        indi_color($(this).index());
        main_b_index = $(this).index() + 1
    });
    
    
    
    ////////best seller 한칸 슬라이드////////
    let index_no = 0;
    let timer = 500;

    // item 기본 자리 세팅
    let item_width = $('.bs_item_box').eq(0).innerWidth();
    let item_count = $('.bs_item_box').length;
    // console.log(item_width, item_count)
    for(let i=0; i<item_count; i++) {
        $('.bs_item_box').eq(i).css({left: item_width * i})
    }

    // 각각의 칸(item)의 현재 위치에서 -200 하기
    function item_slide(pos_x) {
        $('.bs_item_box').animate({
            left: pos_x
        }, timer);
    };
    
    // 특정번째꺼 반대쪽 끝으로 이동
    function item_move(pos_x) {
        $('.bs_item_box').eq(index_no % item_count).animate({
            // item의 가로사이즈 * 마지막 방번호
            left: pos_x
        }, 0);
        bs_btn_init();
    };

    // 버튼 막기 //
    function bs_btn_init() {
        $('.bs_btn').css('pointerEvents', 'none');
        setTimeout(function(){
            $('.bs_btn').css('pointerEvents', 'auto');
        }, timer);
    };

    // 버튼 클릭 //
    $('.bs_btn_R').click(function(){
        item_slide('-='+item_width);
        item_move(item_width * (item_count - 1));
        index_no += 1;
    });
    $('.bs_btn_L').click(function(){ 
        index_no -= 1;
        item_move(-item_width);
        item_slide('+='+item_width);
    });

    ////////이벤트배너 슬라이드////////
    let ev_index = 1;
    let ev_ban_length = $('.ev_ban_box').length;
    function ev_slide(c_in, c_po, o_in, o_po) {
        //들어올배너
        $('.ev_ban_box').eq(c_in).css({
            left: c_po
        }).animate({
            left:0
        }, timer);

        //나갈배너
        $('.ev_ban_box').eq(o_in).animate({
            left: o_po
        }, timer);
        ev_btn_init();
    };
    // 버튼 막기 //
    function ev_btn_init() {
        $('.ev_btn').css('pointerEvents', 'none');
        setTimeout(function(){
            $('.ev_btn').css('pointerEvents', 'auto');
        }, timer);
    };
    
    // 초기 위치값
    $('.ev_ban_box').eq(0).css({left:0});
    
    //왼쪽버튼
    $('.ev_btn_L').click(function(){
        ev_slide(ev_index % ev_ban_length, '100%', (ev_index -1) %  ev_ban_length, '-100%');
        ev_index+=1;
    });
    //오른쪽버튼
    $('.ev_btn_R').click(function(){
        ev_index-=1;
        ev_slide((ev_index -1) %  ev_ban_length, '-100%', ev_index % ev_ban_length, '100%');
    });






});