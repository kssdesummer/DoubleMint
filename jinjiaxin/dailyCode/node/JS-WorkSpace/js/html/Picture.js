function showPic(whichpic){
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src",source);
    
    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
    return true;
}

event = "JavaScript statement(s)";
onclick = "showPic(this); return false;"

function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.nodeType);
}

function prepareLinks(){
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for(var i = 0;i<links.length;i++){
        if(links[i].getAttribute("class") == "popup"){
            links[i].onclick = function(){
                popup(this.getAttribute("href"));
                return false;
            }
        }
    }
}
function popup(winURL){
    window.open(winURL,"popup","width = 320,height = 480");
}

function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0;i < links.length; i++){
        links[i].onclick = function(){
            return showPic(this)?false:true;
            

        }
    }
}
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
addLoadEvent(prepareLinks);
addLoadEvent(countBodyChildren);