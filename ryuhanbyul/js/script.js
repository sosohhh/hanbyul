



$(document).ready(function () {
    
    
 
    
    
    
  
    
  $("#fullpage").fullpage({
    //options here
    navigation: true,  // 섹션네비게이션
    navigationPosition: 'right', // 섹션네비게이션 의 위치 설정 right / left   
    
    navigationTooltips: [
      'main',
      'about',
      'Web Design',
      'Content Design',
      'contact.'
    ],// 섹션 네비게이션 에 손을 올렸을때 나오는 텍스트 

    controlArrows: true, // 슬라이드 컨트롤 애로우 생성 
    slidesNavigation: true, // 슬라이드 컨트롤 네비게이션 생성
    slidesNavPosition: 'bottom', // 슬라이드 컨트롤 네비게이션 위치 top / bottom

      
    onLeave: function (origin, destination, direction) {
        //구역 2를 떠난 후
        
        
            
               
            $(".menu_wrap > ul > li").removeClass("active");
            $(".menu_wrap > ul > li > a").removeClass("active");
            $(".fullpage02 p.bg_txt.bg_txt01").removeClass("active");
            $(".fullpage02 p.bg_txt.bg_txt02").removeClass("active");
            $(".fullpage02 .fullpage02_wrap > .about_box").removeClass("active");
            $(".fullpage02 .fullpage02_wrap > .skill_box > ul > li").removeClass("active");
            $(".fullpage03 p.bg_txt").removeClass("active");
            $(".fullpage03 .fullpage03_wrap > .work_box > p.work_title").removeClass("active");
            $(".fullpage03 .fullpage03_wrap > .work_box > .content > ul").removeClass("active");
            $(".footer p.bg_txt").removeClass("active");
            
            
            
        
        
        
        
        if (destination.index == 0) {        
            
            
            
            
        }else if (destination.index == 1) {
            $(".menu_wrap > ul > li").addClass("active");
            $(".menu_wrap > ul > li > a").addClass("active");
            
            
            $(".fullpage02 p.bg_txt.bg_txt01").addClass("active");
            $(".fullpage02 p.bg_txt.bg_txt02").addClass("active");
            
            $(".fullpage02 .fullpage02_wrap > .about_box").addClass("active");
            
            $(".fullpage02 .fullpage02_wrap > .skill_box > ul > li").addClass("active");
            
            
        }else if (destination.index == 2) {
            
            $(".fullpage03 p.bg_txt").addClass("active");
            $(".fullpage03 .fullpage03_wrap > .work_box > p.work_title").addClass("active");
            $(".fullpage03 .fullpage03_wrap > .work_box > .content > ul").addClass("active");
            
            
        }else if (destination.index == 3) {
             $(".fullpage04 .fullpage04_wrap > .work02_box > p.work02_title").addClass("active");
            $(".fullpage04 .fullpage04_wrap > .work02_box > .content_wrap > ul.content_box > li").addClass("active");
            
            
            
            
        }else if (destination.index == 4) {
            $(".footer p.bg_txt").addClass("active");
            
            
            
        }
        
        
        
      //다시사라지게하는법
//      if (destination.index == 0) {
//            
//        } else if (destination.index == 1) {
//            $(".fullpage02 p.bg_txt.bg_txt01").removeClass("active");
//           
//            
//            
//        }
//        
        
        
//        if (destination.index == 0) {
//            
//            
//               $(".fullpage01 .fullpage01_wrap > .main_title_box > .bott_border.active").removeClass("active");
//            
//            
//        }else if (destination.index == 1) {
//            $(".menu_wrap > ul > li").removeClass("active");
//            $(".menu_wrap > ul > li > a").removeClass("active");
//            
//            
//            $(".fullpage02 p.bg_txt.bg_txt01").removeClass("active");
//            $(".fullpage02 p.bg_txt.bg_txt02").removeClass("active");
//            
//            $(".fullpage02 .fullpage02_wrap > .about_box").removeClass("active");
//            
//            $(".fullpage02 .fullpage02_wrap > .skill_box > ul > li").removeClass("active");
//            
//            
//        }else if (destination.index == 2) {
//            
//            $(".fullpage03 p.bg_txt").removeClass("active");
//            $(".fullpage03 .fullpage03_wrap > .work_box > p.work_title").removeClass("active");
//            $(".fullpage03 .fullpage03_wrap > .work_box > .content > ul").removeClass("active");
//            
//            
//        }else if (destination.index == 3) {
//             $(".fullpage04 .fullpage04_wrap > .work02_box > p.work02_title").removeClass("active");
//            $(".fullpage04 .fullpage04_wrap > .work02_box > .content_wrap > ul.content_box > li").removeClass("active");
//            
//            
//            
//            
//        }else if (destination.index == 4) {
//            $(".footer p.bg_txt").removeClass("active");
//            
//            
//            
//        }
//        
        
        
    },
      
      
  });//fullpage end
    
    $(".menu_wrap > ul > li").click(function(){
        
      
        var thisindex =  $(this).index() 
        
        fullpage_api.moveTo(thisindex + 1);
        
    });
    
    
        
    
    
    //footer_copy
    $(".footer .footer_wrap > .foo_right > .info_wrap > .info_box > ul > li > p").click(function(){
    
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).attr("data-num")).select();
    document.execCommand("copy");
    $temp.remove();

        
        
        
    
  });
    
    
    
});//ready end
