javascript:(function() {
  var getActiveElement=function(document){
    document=document||window.document;
    if(document.body===document.activeElement||document.activeElement.tagName=='IFRAME'){
      var iframes=document.getElementsByTagName('iframe');
      for(var i=0;i<iframes.length;i++){
        var focused=getActiveElement(iframes[i].contentWindow.document);
        if(focused!==false){
          return focused;
        }
      }
    }
    else return document.activeElement;
    return false;
  };

  var activeEl=getActiveElement();

  var padding = function (number) {
    var strno = "";
    if (number < 10) {
      strno+= "0" + number.toString();
    }
    else {
      strno+=number.toString();
    }
    return strno;
  };

  var five90El = activeEl;
  var five90text = five90El.value;
  var dateNow = new Date();
  var todaysDate = "sgl" + padding(dateNow.getMonth()+1) + padding(dateNow.getDate());
  if (five90text.match (/sgl.... |$/)) {
    var new590text = five90text.replace(/sgl..../, todaysDate);
    five90El.value = new590text;
  }
  var event = new Event('change');
  five90El.dispatchEvent(event);

})();