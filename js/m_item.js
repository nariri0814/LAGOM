$(document).ready(function(){
    ///////////////정보 불러오기/////////////
    const cate_no = Number(get_url_info("cate_no")); 
    const item_no = Number(get_url_info("item_no"));
    const page_title = ['ALL','CELLUP','CELLUS','LIFESTYLE'];
    // const sec_id = ['all', 'cellup', 'cellus', 'lifestyle'];
    
    let ITEM;
    
    for(let i=0; i< ITEM_LIST[cate_no].length; i++) {
        if(ITEM_LIST[cate_no][i].item_no == item_no) {
            ITEM = ITEM_LIST[cate_no][i];
            break;
        }
    };

    let list =     '<div class="item_tit">';
        list +=         '<div class="item_name">'+ITEM.name+'</div>';
        list +=         '<div class="item_info">'+ITEM.info+'</div>';
        list +=     '</div>';
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
        list +=             '<div class="item_btn_fixed">';
        list +=                 '<div class="item_btn_sec">';
        list +=                     '<div class="item_like">';
        list +=                         '<div class="m_like_img_box">';
        list +=                             '<img src="img/ICON/icon_201912230853331600.png" alt="like">';
        list +=                         '</div>';
        list +=                     '</div>';
        list +=                     '<div class="item_cart">';
        list +=                         '<input type="button" id="cart" value="CART">';
        list +=                     '</div>';
        list +=                     '<div class="item_buy_now">';
        list +=                         '<input type="button" id="buy_now" value="BUY IT NOW">';
        list +=                     '</div>';
        list +=                 '</div>';
        list +=             '</div>';
        list +=         '</div>';
        list +=         '<div class="item_banner">';
        list +=             '<div class="i_ban">';
        list +=                 '<img src="img/ITEM/ad54b8a7e43b207ea201b389b9ba6945.png" alt="event">';
        list +=             '</div>';
        list +=             '<div class="i_ban">';
        list +=                 '<img src="img/ITEM/696bf725dcbae5abf35b7e8e0b569fb2.png" alt="event">';
        list +=             '</div>';
        list +=         '</div>';
        list +=     '</div>';
    
    $('.item_sec').append(list);

    //아이템사진의 작은사진 클릭시 큰사진으로
    $('.it_hov_img').css('opacity',0);
    $('.sm_img1').click(function(){
        $('.it_img').css({
            opacity: 1
        });
        $('.it_hov_img').css({
            opacity: 0
        });
    });
    $('.sm_img2').click(function(){
        $('.it_img').css({
            opacity: 0
        });
        $('.it_hov_img').css({
            opacity: 1
        });
    });
    
    // 옵션 클릭시 opt_box에 자식으로 옵션 넣기
    let opt_chk = [];
    for(let i=0; i<$('.opt_sel').children().length; i++) {
        opt_chk[i]=true;
    }
    // console.log(opt_chk)

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

    // 상세 gnb 색 변경
    $('.pan_btn_li').eq(0).addClass('pan_btn_active')
    $('.pan_btn_li').click(function(){
        $('.pan_btn_li').removeClass('pan_btn_active')
        $(this).addClass('pan_btn_active')

    });
    // 상세 gnb 판 변경
    $('#purchase_sec, #review_sec, #qna_sec').css('display', 'none');
    function pan_chg(chk_pan_li, chk_pan, non_sec) {
        $(chk_pan_li).click(function(){
            $(chk_pan).css({
                display: 'block'
            }); //'.pan_btn_li#detail'
            $(non_sec).css({
                display: 'none'
            });
        });
    };
    pan_chg('#detail', '#detail_sec', '#purchase_sec, #review_sec, #qna_sec');
    pan_chg('#feature', '#purchase_sec', '#detail_sec, #review_sec, #qna_sec');
    pan_chg('#review', '#review_sec', '#detail_sec, #purchase_sec, #qna_sec');
    pan_chg('#qna', '#qna_sec', '#detail_sec, #purchase_sec, #review_sec');
    




});