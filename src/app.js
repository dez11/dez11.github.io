var $ = require("jquery");

$(function(){
  var w = $(window).width() - $(".square").width(),
      h = $(window).height() - $(".square").height();

  // animate処理
  $(".square").animate({"left": w},1500)
  .animate({"top": h},1500)
  .animate({"left": 0}, 1500)
  .animate({"top": 0}, 1500);

  // Deferred処理
//  function moveAnime(object, color) {
//    console.log(`moveAnime ${color}`);
//    $(object).css("background", color);
//  }
//
//  new $.Deferred().resolve().promise().then(()=>{
//    console.log(1);
//    var d = new $.Deferred();
//    $(".square").animate({
//      "left": w
//    },{
//      duration: 1000,
//      complete: ()=> {
//        moveAnime(".square", "#f00");
//        d.resolve();
//      }
//    });
//    return d.promise();
//  }).then(()=>{
//    console.log(2);
//    var d = new $.Deferred();
//    $(".square").animate({
//      "top": h
//    },{
//      duration: 1000,
//      complete: ()=> {
//        moveAnime(".square", "#0f0");
//        d.resolve();
//      }
//    });
//    return d.promise();
//  }).then(()=>{
//    console.log(3);
//    var d = new $.Deferred();
//    $(".square").animate({
//      "left": 0
//    },{
//      duration: 1000,
//      complete: ()=> {
//        moveAnime(".square", "#00f");
//        d.resolve();
//      }
//    });
//    return d.promise();
//  }).then(()=>{
//    console.log(4);
//    var d = new $.Deferred();
//    $(".square").animate({
//      "top": 0
//    },{
//      duration: 1000,
//      complete: ()=> {
//        moveAnime(".square", "#a3d4f8");
//        d.resolve();
//      }
//    });
//    return d.promise();
//  }, ()=>{
//    console.log("error");
//  });
});