/*var items =  document.getElementsByTagName("li");
for(var i = 0; i < document.getElementsByTagName("li").length;i++){
    alert(typeof items[i]);
}*/

var shopping = document.getElementById("purchases");
var sale = document.getElementsByClassName("sale");
alert(sale.length);

var paras = document.getElementsByTagName("p");
for(var i = 0;i < paras.length; i++){
    var title_text = paras[i].getAttribute("title")
    if(title_text != null){
        alert(title_text);
    }   
}

/*alert(shopping.getAttribute("title"));
shopping.setAttribute("title","a list of goods");
alert(shopping.getAttribute("title"));
*/
for(var i = 0; i < paras.length; i++){
    var title_text = paras[i].getAttribute("title");
    if(title_text){
        paras[i].setAttribute("title","brand new title text");
        alert(paras[i].getAttribute("title"));
    }
}