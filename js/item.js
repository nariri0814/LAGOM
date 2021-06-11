


$(document).ready(function(){
    const cate_no = Number(get_url_info("cate_no")); 
    const item_no = Number(get_url_info("item_no"));
    const page_title = ['ALL','CELLUP','CELLUS','LIFESTYLE'];
    // const sec_id = ['all', 'cellup', 'cellus', 'lifestyle'];
    // console.log(location.href)

    let ITEM;
    
    let mobile_chk = navigator.userAgent.toLowerCase();
    let array = ["android", "iphone", "ipad"];
    for(let i = 0; i < array.length; i++) {
        if(mobile_chk.match(array[i])) {
            location = "m_item.html?cate_no="+cate_no+"&item_no="+item_no+"";
        }
    };
    if(navigator.maxTouchPoints > 1) {
        location = "m_item.html?cate_no="+cate_no+"&item_no="+item_no+"";
    }

    for(let i=0; i< ITEM_LIST[cate_no].length; i++) {
        if(ITEM_LIST[cate_no][i].item_no == item_no) {
            ITEM = ITEM_LIST[cate_no][i];
            break;
        }
    }

    let list =     '<div class="item_container">';
        list +=         '<div class="item_img">';
        list +=             '<img src="img/SHOP/'+page_title[(cate_no+1)]+'/'+ITEM.src+'" alt="item_img" class="it_img">';
        list +=             '<img src="img/SHOP/'+page_title[(cate_no+1)]+'/hov_'+ITEM.src+'" alt="item_img" class="it_hov_img">';
        list +=             '<div class="small_img_box">';
        list +=                 '<div class="sm_img sm_img1">';
        list +=                     '<img src="img/SHOP/'+page_title[(cate_no+1)]+'/'+ITEM.src+'" alt="item_img">';
        list +=                 '</div>';
        list +=                 '<div class="sm_img sm_img2">';
        list +=                     '<img src="img/SHOP/'+page_title[(cate_no+1)]+'/hov_'+ITEM.src+'" alt="item_img">';
        list +=                 '</div>';
        list +=             '</div>';
        list +=         '</div>';
        list +=         '<div class="item_select">';
        list +=             '<div class="item_name">'+ITEM.name+'</div>';
        list +=             '<div class="item_info">'+ITEM.info+'</div>';
        list +=             '<table class="item_table">';
        list +=                 '<tr>';
        list +=                     '<td class="item_td">판매가</td>';
        list +=                     '<td class="item_td item_price">'+add_comma(ITEM.price)+'원</td>';
        list +=                 '</tr>';
        list +=                 '<tr>';
        list +=                     '<td class="item_td">배송비</td>';
        list +=                     '<td class="item_td">무료</td>';
        list +=                 '</tr>';
        list +=             '</table>';
        list +=             '<div class="tab_line"></div>';
        list +=             '<table class="item_table">';
        list +=                 '<tr>';
        list +=                     '<td class="item_td">옵션</td>';
        list +=                     '<td class="item_td">';
        list +=                         '<div>';
        list +=                             '<select class="select_box" id="sl_box">';
        list +=                                 '<option value="-1">- [필수] 옵션을 선택해 주세요 -</option>';
        list +=                                 '<optgroup class="opt_sel">';
        list +=                                     '<option value="0">- 셀럽 마이크로 클렌징 워터(350ml)</option>';
        list +=                                     '<option value="1">- 클렌징워터 기획세트(본품+폼30ml+화장솜30매+파우치증정)</option>';
        list +=                                 '</optgroup>';
        list +=                             '</select>';
        list +=                         '</div>';
        list +=                     '</td>';
        list +=                 '</tr>';
        list +=             '</table>';

        list +=             '<div class="opt_box">';

        list +=             '</div>';

        list +=             '<div class="item_fin_price">';
        list +=                 '<span>총 상품금액</span>';
        list +=                 '<span class="i_fin_price">0</span>';
        list +=             '</div>';
        list +=             '<div class="tab_line"></div>';
        list +=             '<div class="btn_sec">';
        list +=                 '<div class="buy_now">';
        list +=                     '<input type="button" id="buy_now" value="BUY IT NOW">';
        list +=                 '</div>';
        list +=                 '<div class="cart">';
        list +=                     '<input type="button" id="cart" value="CART">';
        list +=                 '</div>';
        list +=                 '<div class="like">';
        list +=                 '<div class="like_img_box">';
        list +=                     '<img src="img/ICON/icon_201912230853331600.png" alt="like">';
        list +=                 '</div>';
        list +=             '</div>';
        list +=         '</div>';
        list +=     '</div>';
        list +=     '<div class="item_banner">';
        list +=         '<div class="ib ib_R">';
        list +=             '<a href="brand.html">';
        list +=                 '<img src="img/ITEM/ad54b8a7e43b207ea201b389b9ba6945.png" alt="event">';
        list +=             '</a>';
        list +=         '</div>';
        list +=         '<div class="ib ib_L">';
        list +=             '<a href="brand.html">';
        list +=                 '<img src="img/ITEM/696bf725dcbae5abf35b7e8e0b569fb2.png" alt="event">';
        list +=             '</a>';
        list +=         '</div>';
        list +=     '</div>';
        list += '</div>';
    
    $('.item_sec').append(list);

    //아이템사진의 작은사진 클릭시 큰사진으로
    $('.it_hov_img').css('opacity',0);
    function sm_clk_ani(clk_img, it_opa, it_hov_opa) {
        $(clk_img).click(function(){
            $('.it_img').css({
                opacity: it_opa
            });
            $('.it_hov_img').css({
                opacity: it_hov_opa
            });
        });
    };
    sm_clk_ani('.sm_img1', 1, 0);
    sm_clk_ani('.sm_img2', 0, 1);
    //호버시
    function sm_hov_ani(hov_img, h_it_opa, h_it_hov_opa) {
        $(hov_img).hover(function(){
            $('.it_img').css({
                opacity: h_it_opa
            });
            $('.it_hov_img').css({
                opacity: h_it_hov_opa
            });
        }, function() {
            $('.it_img').css({
                opacity: h_it_opa
            });
            $('.it_hov_img').css({
                opacity: h_it_hov_opa
            });
        });
    };
    sm_hov_ani('.sm_img1',1,0,1,0);
    sm_hov_ani('.sm_img2',0,1,0,1);

    
    // 옵션 클릭시 opt_box에 자식으로 옵션 넣기
    let opt_chk = [];
    for(let i=0; i<$('.opt_sel').children().length; i++) {
        opt_chk[i]=true;
        // console.log($('.opt_sel').children().length)
    };

    $('#sl_box').change(function(){
// console.log($('#sl_box .opt_sel option:selected').text());

        if($('#sl_box').val() >= 0) {
            if( opt_chk[$('#sl_box').val()]) {

                opt_chk[$('#sl_box').val()] = false;
                
                let list =  '<div class="opt_sel_box">';
                    list +=     '<div class="opt_sel_box_L">';
                    list +=         '<p class="opt_i_name">'+ITEM.name+'</p>';
                    list +=         '<p class="opt_i_info">'+$('#sl_box .opt_sel option:selected').text()+'</p>';
                    list +=         '<div class="opt_qty">';
                    list +=             '<input type="button" value="-" class="btn_qty btn_qty_minus">';
                    list +=             '<input type="text" value="1" class="txt_qty">';
                    list +=             '<input type="button" value="+" class="btn_qty btn_qty_plus">';
                    list +=         '</div>';
                    list +=     '</div>';
                    list +=     '<div class="opt_sel_box_R">';
                    list +=         '<div class="close_img" data-value="'+$('#sl_box').val()+'">';
                    list +=             '<img src="img/ICON/btn_price_delete.gif" alt="close">';
                    // list += '<input type="hidden" value="'+$('#sl_box').val()+'" >'
                    list +=         '</div>';
                    list +=         '<p>'+add_comma(ITEM.price)+'원</p>';
                    list +=     '</div>';
                    list += '</div>';

                $('.opt_box').append(list);

                $('.select_box option').eq(0).prop('selected', "selected")
                total_price();
            }
            else {
                alert("이미 선택되어 있는 옵션입니다.")
            }
            
    // console.log(  opt_chk)
        }
    });

    $(document).on('click','.btn_qty_minus', function(){
        // console.log($(this).next('.txt_qty').val())
        if($(this).next('.txt_qty').val() > 1)
            $(this).next('.txt_qty').val(Number($(this).next('.txt_qty').val()) - 1);
        else 
            alert("최소 구매 수량은 1개 입니다.");
        total_price();
    });
    $(document).on('click','.btn_qty_plus', function(){
        $(this).prev('.txt_qty').val(Number($(this).prev('.txt_qty').val()) + 1);
        
        total_price();
    });
    $(document).on('click','.close_img', function(){
        // console.log(this.dataset.value);
        opt_chk[this.dataset.value]=true;
        $(this).parent().parent('.opt_sel_box').remove();
        total_price();
    });

    // 최종금액 계산
    function total_price() {
        let total_price = 0;
        for(let i=0; i<$('.opt_sel_box').length; i++) {
            total_price += $('.txt_qty').eq(i).val() * ITEM.price;
        }
        $('.i_fin_price').text(add_comma(total_price)+"원");
    };
    
});