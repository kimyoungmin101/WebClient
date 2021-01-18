var Links = {
  LinkssetColor:function(color){
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < alist.length){
  //     alist[i].style.color = color;
  //     i = i + 1;
  // }
    $('a').css('color', color);
}
}
var Body = {
  BodysetColor : function(color){
    $('body').css('color', color);
  },
  BodysetBackGroundColor:function(color){
    $('body').css('backgroundColor', color);
  }
}

  function nightDayhandler(self){
    var target = document.querySelector('body');
    if(self.value == 'night'){
      Body.BodysetBackGroundColor('black');
      Body.BodysetColor('white');
      self.value = 'day';

      Links.LinkssetColor('powderblue');
      }
    else{
      Body.BodysetBackGroundColor('pink');
      Body.BodysetColor('black');
      self.value = 'night';

      Links.LinkssetColor('red');
      }
  }
