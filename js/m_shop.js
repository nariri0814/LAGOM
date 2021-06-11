$(document).ready(function(){

    /////////////brand_btn 버튼누르면 디스플레이바꾸기//////////////
    $('.shop_btn_box').click(function(){
        $('.shop_btn_box_inner').toggleClass('shop_btn_box_active')
    });
    
    ////////////////////카테고리누르면 불러오기////////////////////
    const cate_no = Number(get_url_info("cate_no")); 

    const page_title = ['ALL','CELLUP','CELLUS','LIFESTYLE'];
    const sec_id = ['all', 'cellup', 'cellus', 'lifestyle'];
    // const page_title = ['CELLUP','CELLUS','LIFESTYLE'];
    // const sec_id = ['cellup', 'cellus', 'lifestyle'];

    $('.shop_product  .product_sec').attr('id', sec_id[cate_no]);
    $('.product_tit').text(page_title[cate_no]);
    $('.shop_btn_sl_box H2').text(page_title[cate_no]);

    if(cate_no > 0) {
        for(let i=0; i<ITEM_LIST[cate_no-1].length; i++) {   
            let list = '<div class="product_box '+sec_id[cate_no]+'">';
                list +=     '<a href="m_item.html?cate_no='+(cate_no-1)+'&item_no='+ITEM_LIST[cate_no-1][i].item_no+'">';
                list +=         '<div class="pro_img">';
                list +=             '<img src="img/SHOP/'+page_title[cate_no]+'/'+ITEM_LIST[cate_no-1][i].src+'" alt="item" class="item_img">';
                list +=         '</div>';
                list +=     '</a>';
                list +=     '<div class="pro_txt">';
                list +=         '<p class="pro_name">'+ITEM_LIST[cate_no-1][i].name+'</p>';
                list +=         '<p class="pro_info">'+ITEM_LIST[cate_no-1][i].info+'</p>';
                list +=         '<p class="pro_price">'+add_comma(ITEM_LIST[cate_no-1][i].price)+'원</p>';
                list +=     '</div>';
                list += '</div>';

            $('#'+sec_id[cate_no] +' .item_container').append(list);
        };
    }
    else if(cate_no == 0) { // all 일때
        for(let i=0; i<ITEM_LIST.length; i++) { 
            for(let j=0; j<ITEM_LIST[i].length; j++) {   
                
                let list = '<div class="product_box '+sec_id[i+1]+'">';
                list +=     '<a href="m_item.html?cate_no='+(i)+'&item_no='+ITEM_LIST[i][j].item_no+'">';
                list +=         '<div class="pro_img">';
                list +=             '<img src="img/SHOP/'+page_title[i+1]+'/'+ITEM_LIST[i][j].src+'" alt="item" class="item_img">';
                list +=         '</div>';
                list +=     '</a>';
                list +=     '<div class="pro_txt">';
                list +=         '<p class="pro_name">'+ITEM_LIST[i][j].name+'</p>';
                list +=         '<p class="pro_info">'+ITEM_LIST[i][j].info+'</p>';
                list +=         '<p class="pro_price">'+add_comma(ITEM_LIST[i][j].price)+'원</p>';
                list +=     '</div>';
                list += '</div>';

                $('#'+sec_id[cate_no] +' .item_container').append(list);
            };  
        };
    }
    else {
        alert('메인페이지에서 SHOP을 눌러주세요:).')
        location = "m_index.html";
    };

    ////////////////////배너슬라이드////////////////////
    let timer = 1300;
    let sh_b_index = 1;
    let sh_ban_length = $('.sh_banner').length;

    // 자동 슬라이드 //
    function sh_auto_sl() {
        setInterval(function() {
            //들어올배너
            $('.sh_banner').eq(sh_b_index % sh_ban_length).css({
                left: "100%"
            }).animate({
                left:0
            }, timer);
            //나갈배너
            $('.sh_banner').eq((sh_b_index - 1) % sh_ban_length).animate({
                left: "-100%"
            }, timer);

            sh_b_index += 1;
            
        }, timer + 1400);
    };
    sh_auto_sl();

    $('.sh_banner').eq(0).css({left:0})













});