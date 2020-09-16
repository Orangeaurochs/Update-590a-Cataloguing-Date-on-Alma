# Update-590a-Cataloguing-Date-on-Alma
A bookmarklet to update the coded date of cataloguing in a 590 subfield $$a in the Alma Metadata Editor.

Changes any instance of sgl followed by four characters to today's data in the format sglMMDD, e.g. "sgl0819". o install the bookmarklet, add the following code into the URL or Location section of a new bookmark:

```javascript:(function() {   var getActiveElement = function (element = document.activeElement) {   var shadowRoot = element.shadowRoot ;   var contentDocument = element.contentDocument;   if (shadowRoot && shadowRoot.activeElement) {     return getActiveElement(shadowRoot.activeElement);   };   if (contentDocument && contentDocument.activeElement) {     return getActiveElement(contentDocument.activeElement);   };   return element; };    var activeEl=getActiveElement();    var padding = function (number) {     var strno = "";     if (number < 10) {       strno+= "0" + number.toString();     }     else {       strno+=number.toString();     }     return strno;   };    var five90El = activeEl;   var five90text = five90El.value;   var dateNow = new Date();   var todaysDate = "sgl" + padding(dateNow.getMonth()+1) + padding(dateNow.getDate());   if (five90text.match (/sgl.... |$/)) {     var new590text = five90text.replace(/sgl..../, todaysDate);     five90El.value = new590text;   }   var event = new Event('change');   five90El.dispatchEvent(event);  })();```

To use the bookmarklet:

* Click on the 590 field in a record
* Click on the bookmarklet on the your bookmarks toolbar
