# Update-590a-Cataloguing-Date-on-Alma
A bookmarklet to update the coded date of cataloguing in a 590 subfield $$a in the Alma Metadata Editor.

Changes any instance of sgl followed by four characters to today's data in the format sglMMDD, e.g. "sgl0819". o install the bookmarklet, add the following code into the URL or Location section of a new bookmark:

```javascript:(function() {   var getActiveElement=function(document){     document=document||window.document;     if(document.body===document.activeElement||document.activeElement.tagName=='IFRAME'){       var iframes=document.getElementsByTagName('iframe');       for(var i=0;i<iframes.length;i++){         var focused=getActiveElement(iframes[i].contentWindow.document);         if(focused!==false){           return focused;         }       }     }     else return document.activeElement;     return false;   };    var activeEl=getActiveElement();    var padding = function (number) {     var strno = "";     if (number < 10) {       strno+= "0" + number.toString();     }     else {       strno+=number.toString();     }     return strno;   };    var five90El = activeEl;   var five90text = five90El.value;   var dateNow = new Date();   var todaysDate = "sgl" + padding(dateNow.getMonth()+1) + padding(dateNow.getDate());   if (five90text.match (/sgl.... |$/)) {     var new590text = five90text.replace(/sgl..../, todaysDate);     five90El.value = new590text;   } })();```

To use the bookmarklet:

* Click on the 590 field in a record
* Click on the bookmarklet on the your bookmarks toolbar
