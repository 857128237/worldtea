//edit by ilank QQ:165593397  http://www.sunge.cn
jQuery(".ilankpic").slide({titCell:".hd",mainCell:".bd",autoPage:"<li></li>",effect:"fold",autoPlay:true,interTime:5000,delayTime:800});
$(".ilankpic").hover(
function() {$(this).find(".prev,.next").stop(true, true).fadeTo("show",0.6)},
function() {$(this).find(".prev,.next").fadeOut()});

jQuery(".news").slide({mainCell:".bd",effect:"left",autoPlay:true,interTime:5000,delayTime:800,switchLoad:"data-src"});
jQuery(".sc5").slide({titCell:".hd",mainCell:".bd",autoPage:"<li></li>",effect:"topLoop",autoPlay:true,vis:4 });
jQuery(".sc6").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,easing:"easeOutCirc",scroll:4,vis:4,interTime:3000,delayTime:800});
jQuery(".sc8").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",vis:4});

jQuery(".sc9").slide({titCell:".hd li",mainCell:".bd",effect:"fold",autoPlay:true,interTime:5000,delayTime:800,startFun: function(i, c, s, tit) {jQuery(".sc9 .hd span").stop().animate({"left": tit.eq(i).position().left},400,"easeOutBack")} });


$(function(){$(".iph").fancybox({openEffect:'elastic',closeEffect:'elastic',padding:7,overlayColor:'#000',overlayOpacity:0.8,titlePosition:'outside'})});
$(function(){$("a[rel=sc]").fancybox({openEffect:'elastic',closeEffect:'elastic',cyclic:true,padding:7,overlayColor:'#000',overlayOpacity:0.8,titlePosition:'outside',autoPlay:true,playSpeed:4000})});
$(function(){$(".sk").fancybox({width:864,height:397,openEffect:'elastic',closeEffect:'elastic',padding:7,titlePosition:'outside'})});

$(function() {
	$("#nav>ul>li,#nav2>ul>li").hover(function() {
		$(this).addClass("sfhover");
		$(this).find("a:first b").stop(true).animate({"top": "17px"},"fast");
		$(this).find("span").stop(true).animate({"top": "-24px"},"fast");
		if (!$(this).find("ul").is(":animated")) $(this).find("ul").stop(true).slideDown("fast")
	},
	function() {
		$(this).removeClass("sfhover");
		$(this).find("a:first b").stop(true).animate({"top": "0px"},"fast");
		$(this).find("span").stop(true).animate({"top": "0px"},"fast");
		if (!$(this).find("ul").is(":animated")) $(this).find("ul").stop(true).slideUp("fast");
		$("#nav ul ul").stop(true).slideUp("fast")
	})
	$('.sc7 li').hover(function(){
		$(this).find("span").stop().animate({backgroundPositionY: '-220px'})
	},function(){
		$(this).find("span").stop().animate({backgroundPositionY: '0px'},500)
	})
	$('.sc8 li').hover(function(){
		$(this).find("span").stop().animate({backgroundPositionY: '-128px'})
	},function(){
		$(this).find("span").stop().animate({backgroundPositionY: '0px'},500)
	})
});

$(function() {
//work
  $('.sc1 .t1').hover(
  function(){$(this).find("span").animate({"top":"0px"},500);},
  function(){$(this).find("span").animate({"top":"-259px"},500);});
  $('.sc1 .t1').hover(
  function(){$(this).find("p").animate({"bottom":"10px"},500);},
  function(){$(this).find("p").animate({"bottom":"-32px"},500);});
  $('.sc0>li').hover(
  function(){$(this).find("ins").animate({"left":"0px"},300);},
  function(){$(this).find("ins").animate({"left":"-580px"},"fast");});
  $('.sc5 li').hover(
  function(){$(this).find("a:first s").animate({"top":"0px"},500);},
  function(){$(this).find("a:first s").animate({"top":"108px"},500);});
	
$('.sc2 li,.s2,.sc3 li,.sc9 .hd li').hover(
function() {$(this).find("img").fadeTo("fast", 0.8);},
function() {$(this).find("img").fadeTo("slow", 1);});
$('.sc1 li,.sc0 li,.sc5 li').hover(
function() {$(this).find("img").fadeTo("fast", 0.60);},
function() {$(this).find("img").fadeTo("slow", 1);});
});
//top
var topMain=$(".head").height()+ $(".top").height()
                $(window).scroll(function(){
                    if ($(window).scrollTop()>topMain){
                        $(".tp").slideDown(500);
                    }
                    else
                    {
                        $(".tp").slideUp(500);
                    }
                });	