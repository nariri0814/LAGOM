$(document).ready(function(){
    ////////////////탑버튼////////////////
    $('.top_btn').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        }, 500)
        
    });
    
    ///////////헤더픽스드///////////
    // let h_o_top = $('.header_fixed').offset().top;
    let h_o_top = $('#top').height();
    $(window).scroll(function(){

        let s_top = $(window).scrollTop();
        if(h_o_top <= s_top) {
            $('.header_fixed').css({
                position: 'fixed',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                transition: 'all 0.2s',
                zIndex: '999',
                background: '#fff'
            });
        }
        else {
            $('.header_fixed').css({
                position: "absolute",
                top: h_o_top
            });
            $('.header').css({
                height: '66px'
            });
        }
        
    });

    ///////////햄버거 열고 닫기///////////
    $('.hamberg').click(function(){
        $('.ham_modal').addClass('ham_modal_active')
        $('.ham_modal_inner').animate({
            left: 0
        },300)
    });
    $('.close_btn').click(function(){
        $('.ham_modal').removeClass('ham_modal_active')
    });
    
    ///////////햄버거 아코디언메뉴///////////
    $('.menu_box').click(function(){
        $('.menu_aco_box').removeClass('menu_aco_box_active');
        $('.bullet').removeClass('bullet_active');
        $(this).children('.bullet').toggleClass('bullet_active');
        $(this).next('.menu_aco_box').toggleClass('menu_aco_box_active');

    });

});

//////////////// url 뽑아오기 ////////////////
function get_url_info(key) { 
    let url = location.href; // 336.theCommar_product.html?cate_no=1
    url = url.split("?"); // [336.theCommar_product.html, cate_no=1]
                            // [336.theCommar_product.html, cate_no=1&item_no=3]

    if(url.length > 1) { //length가 1개면 메인페이지, 2개부터는 다른 페이지
        url = url[1].split("&") // [cate_no=1, item_no=3]
        for(let i=0; i<url.length; i++) {
            let tmp_url=url[i].split("="); // [cate_no, 6]    [item_no, tmp]

            if(tmp_url[0] == key) {
                return tmp_url[1];
            }
        };
    };
};

//////////////// 숫자 3자리마다 콤마찍기 ////////////////
function add_comma(x) { 
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ITEM_LIST = [
    //  CELLUP_LIST
    [
        {item_no: 1, src: 'cleansing_bar_set.png', name: '셀럽 피에이치 밸런스 클렌징 바 세트', info: '알러젠무첨가 약산성클렌징바#올인원케어', price: 18000},
        {item_no: 2, src: 'cleansing_duo.png', name: '수분 클렌징 듀오', info: '빈틈없이 지우고 촉촉하게 아침&저녁클렌저세트', price: 37000},
        {item_no: 3, src: 'gel_water_cleanser.png', name: '셀럽 젤 투 워터 클렌저', info: '저자극#촉촉한#아침전용클렌저', price: 19000},
        {item_no: 4, src: 'micro_cleansing_water.png', name: '셀럽 마이크로 클렌징 워터', info: '무료배송+기획세트#98%에센스성분의 완벽한 클렌징', price: 26000},
        {item_no: 5, src: 'micro_foam_cleanser.png', name: '셀럽 마이크로 폼 클렌저', info: '#BEST.1#미세먼지까지 #모공 속 깊은 곳 딥클린', price: 18000},
        {item_no: 6, src: 'ph_cleansing_bar.png', name: '셀럽 피에이치 밸런스 클렌징 바', info: '알러젠무첨가 약산성클렌징바#올인원케어', price: 15000},
        {item_no: 7, src: 'ph_foam_cleanser.png', name: '셀럽 피에이치 큐어 폼 클렌저', info: '약산성클렌저#여드름.민감성 피부사용OK', price: 16000}
    ],
    //  CELLUS_LIST
    [
        {item_no: 8, src: 'cf_cushion.png', name: 'CF 쿠션#20호', info: '커버+지속력+수분광채 3in1 메이크업 아티스트 추천템', price: 33000},
        {item_no: 9, src: 'cica_cream.png', name: '셀러스 센서티브 시카 크림', info: '라곰만의 특화성분으로 피부 속부터 컨트롤', price: 32000},
        {item_no: 10, src: 'cica_powder.png', name: '셀러스 센서티브 시카 파우더', info: '즉각적인 진정이 필요할땐 톡톡! 진정파우더', price: 12000},
        {item_no: 11, src: 'deep_cream.png', name: '셀러스 딥 모이스쳐 크림', info: '촘촘하고 탄탄한 고보습크림 민감성 피부도OK', price: 36000},
        {item_no: 12, src: 'mild_moisture_cream.png', name: '셀러스 마일드 모이스쳐 크림', info: '민감한피부에진정효과#디렉터파이추천수분크림', price: 38000},
        {item_no: 13, src: 'mist_toner.png', name: '셀러스 미스트 토너', info: '미세먼지차단#스킨미스트#간편하게수분충전', price: 25000},
        {item_no: 14, src: 'revive_toner.png', name: '셀러스 리바이브 에센토너', info: '보습,영양,탄력을 토너하나로 7스킨은가라,이제1스킨시대', price: 30000},
        {item_no: 15, src: 'sun_gel_duo.png', name: '셀러스 선 젤 듀오', info: '선케어와수분크림을 한번에 수분선크림', price: 25000},
        {item_no: 16, src: 'white_cream.png', name: '셀러스 화이트 모이스쳐 크림', info: '미백기능성#바를수록 밝아지는 속 톤업크림', price: 34000}
    ],
    // LIFESTYLE_LIST
    [
        {item_no: 17, src: 'cf_brush.png', name: 'CF 브러시', info: '완벽한메이크업#빈틈없는피부결연출', price: 17000},
        {item_no: 18, src: 'cf_cuff.png', name: 'CF 퍼프', info: '빈틈없이 촘촘하게 피부결정리#쫀쫀밀착퍼프', price: 2500},
        {item_no: 19, src: 'cleansing_brush.png', name: '셀럽 페이셜 클렌징 브러쉬', info: '손이 닿지 않는 곳까지 딥-클린 모공 속을 깨끗하게', price: 7000},
        {item_no: 20, src: 'cotton_5_pad.png', name: '5겹 코튼 화장솜', info: '100%순면5겹 화장솜#스킨팩과 클렌징 모두 OK', price: 4000},
        {item_no: 21, src: 'eco_bag.png', name: '라곰 에코가방', info: "데일리에코백#일상속도'라곰'하다", price: 5000},
        {item_no: 22, src: 'packaging.png', name: '라곰 시그니처 포장 패키지', info: '마음을 담아 라곰을 전하세요.', price: 2000}
    ]
];