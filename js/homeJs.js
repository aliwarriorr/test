function mouseOnDiv(thisId){
    document.getElementById(thisId).style.backgroundColor = "#e0e0e0";
}
function mouseOutDiv(thisId){
    document.getElementById(thisId).style.backgroundColor = "white";
}
function mouseOnUnderMenu(thisId,thisId2){
    document.getElementById(thisId).style.display = "block";
    document.getElementById(thisId2).style.backgroundColor = "#e0e0e0"
}
function mouseOutUnderMenu(thisId,thisId2){
    document.getElementById(thisId).style.display = "none";
    document.getElementById(thisId2).style.backgroundColor = "white"
}
function mouseOnLi(thisId){
    document.getElementById(thisId).style.backgroundColor="#cecdcd"
}
function mouseOutLi(thisId){
    document.getElementById(thisId).style.backgroundColor="#e0e0e0"
}
function headerDisplay(){
    if(innerWidth<1000){
        document.getElementById('myHeader').style.display = 'flex'
        if(document.getElementById('xIcon').style.display == 'block'){
            document.getElementById('myHeader').style.display = 'none'
            document.getElementById('searchInput').style.animation = 'searchResposive3 .2s'
            document.getElementById('searchInput').style.animationIterationCount = '1'
            document.getElementById('searchInput').style.animationFillMode = 'forwards'
        }
    }
    if(innerWidth>1000){
        document.getElementById('myHeader').style.display = 'none'
        document.getElementById('fixedRightMenu').style.display = 'none'
        if(document.getElementById('xIcon').style.display == 'block'){
            document.getElementById('searchInput').style.animation = 'searchResposive4 .2s'
            document.getElementById('searchInput').style.animationIterationCount = '1'
            document.getElementById('searchInput').style.animationFillMode = 'forwards'
        }
    }
}
function changePage(){
    if(innerWidth>1000){
        document.getElementById('xIcon').style.display = 'block'
        document.getElementById('xIconDiv').className = document.getElementById('xIconDiv').className.replace("col-0","col-1")
        document.body.style.backgroundColor = '#e0e0e0'
        document.getElementById('searchInput').style.marginRight = '20px'
        document.getElementById('searchInput').style.backgroundColor = 'white'
        document.getElementById('littleMenuDiv').style.display = 'none'
        document.getElementById('loginDiv').style.display = 'none'
        document.getElementById('searchDiv').className = document.getElementById('searchDiv').className.replace("col-4","col-7")
        document.getElementById('searchInput').style.animation = 'openSearch .5s'
        document.getElementById('searchInput').style.animationFillMode = 'forwards'
        document.getElementById('searchInput').style.animationIterationCount = '1'
        document.getElementById('middleMenu').style.display = 'none'
        document.getElementById('myHeader').style.display = 'none'
    }
    else{
        document.getElementById('xIcon').style.display = 'block'
        document.getElementById('xIconDiv').className = document.getElementById('xIconDiv').className.replace("col-0","col-1")
        document.body.style.backgroundColor = '#e0e0e0'
        document.getElementById('searchInput').style.marginRight = '20px'
        document.getElementById('searchInput').style.backgroundColor = 'white'
        document.getElementById('littleMenuDiv').style.display = 'none'
        document.getElementById('loginDiv').style.display = 'none'
        document.getElementById('searchDiv').className = document.getElementById('searchDiv').className.replace("col-4","col-7")
        document.getElementById('searchDiv').style.animation = 'searchResposive .2s'
        document.getElementById('searchDiv').style.animationIterationCount = '1'
        document.getElementById('searchDiv').style.animationFillMode = 'forwards'
        document.getElementById('middleMenu').style.display = 'none'
        document.getElementById('myHeader').style.display = 'none'
    }
}
function clickX(){
    if(innerWidth>1000){
        document.getElementById('xIcon').style.display = 'none'
        document.getElementById('xIconDiv').className = document.getElementById('xIconDiv').className.replace("col-1","col-0")
        document.body.style.backgroundColor = 'white'
        document.getElementById('searchInput').style.marginRight = '0px'
        document.getElementById('searchInput').style.backgroundColor = '#ececec'
        document.getElementById('searchDiv').className = document.getElementById('searchDiv').className.replace("col-7","col-4")
        document.getElementById('searchInput').style.animation = 'closeSearch .5s'
        document.getElementById('searchInput').style.animationFillMode = 'forwards'
        document.getElementById('searchInput').style.animationIterationCount = '1'
        document.getElementById('littleMenuDiv').style.display = 'flex'
        document.getElementById('loginDiv').style.display = 'flex'
        document.getElementById('middleMenu').style.display = 'flex'
    }
    if(innerWidth<1000){
        document.getElementById('myHeader').style.display = 'flex'
        document.getElementById('xIcon').style.display = 'none'
        document.getElementById('xIconDiv').className = document.getElementById('xIconDiv').className.replace("col-1","col-0")
        document.body.style.backgroundColor = 'white'
        document.getElementById('searchInput').style.marginRight = '0px'
        document.getElementById('searchInput').style.backgroundColor = '#ececec'
        document.getElementById('searchDiv').className = document.getElementById('searchDiv').className.replace("col-7","col-4")
        document.getElementById('searchDiv').style.animation = 'searchResposive2 .2s'
        document.getElementById('searchDiv').style.animationIterationCount = '1'
        document.getElementById('searchDiv').style.animationFillMode = 'forwards'
        document.getElementById('littleMenuDiv').style.display = 'flex'
        document.getElementById('loginDiv').style.display = 'flex'
        document.getElementById('middleMenu').style.display = 'flex'
    }
}
function changeMenuColor(thisId){
    document.getElementById(thisId).style.color = '#c411ac'
}
function changeMenuColor2(thisId){
    document.getElementById(thisId).style.color = 'black'
}
function changeOpacity(thisId){
    document.getElementById(thisId).style.filter = 'opacity(100%)'
}
function changeOpacity2(thisId){
    document.getElementById(thisId).style.filter = 'opacity(30%)'
}
function liClicked1(n, no){
    var sliders = document.getElementsByClassName('sliders')
    for(var i=0 ; i<sliders.length ; i++){
        sliders[i].style.display = 'none'
    }

    var arightMenu = document.getElementsByClassName('aaRightMenu')
    for(var i=0 ; i<arightMenu.length ; i++){
        arightMenu[i].className =  arightMenu[i].className.replace("active","repla")
        arightMenu[i].style.color = 'black'
    }
    
    var nMenu = document.getElementsByClassName(n)
    nMenu[0].className =nMenu[0].className.replace("repla","active")
    nMenu[0].style.color = "#c411ac"

    for(var i=0 ; i<arightMenu.length ; i++){
        arightMenu[i].getAttribute('onmouseout','changeMenuColor2(aRightMenu1)')
    }
    nMenu[0].removeAttribute('onmouseout')

    var xIcons = document.getElementsByClassName('xIcons')
    for(var i=0 ; i<xIcons.length ; i++){
        xIcons[i].style.display = 'none'

    document.getElementById("selectedMenu1Div").style.display = 'block'
    }
    document.getElementById(no).style.display = 'block'
    displaySlide(1);
}
function underMenuSlideHover(thisId){
    document.getElementById(thisId).style.filter = 'opacity(70%)'
}
function underMenuSlideHover2(thisId){
    document.getElementById(thisId).style.filter = 'opacity(100%)'
}

var currentIndex = 1;

function displaySlide(n){
    currentIndex = n;
    var slide = document.getElementsByClassName("slide");
    var dots =document.getElementsByClassName("dot");

    if(currentIndex > slide.length){
        currentIndex = 1;
    }
    if(currentIndex < 1){
        currentIndex = slide.length
    }
    for(var i=0 ; i<slide.length ; i++){
        slide[i].style.display = 'none';
        dots[i].className = dots[i].className.replace("active"," ");
    }
    
    slide[currentIndex - 1].style.display = 'flex';
    dots[currentIndex - 1].className = "dot active";
}

function changeSlide(n){
    currentIndex += n;
    displaySlide(currentIndex);
}

function currentSlide(n){
    displaySlide(n);
}
function closeAllMenues(){
    var underMenues = document.getElementsByClassName('sliders')
    for(var i=0 ; i<underMenues.length ; i++){
        underMenues[i].style.display = 'none'
    }
    var xIconss = document.getElementsByClassName('xIcons')
    for(var i=0 ; i<xIconss.length ; i++){
        xIconss[i].style.display = 'none'
    }
    var aRightMenu = document.getElementsByClassName("aaRightMenu");
    for(var i=0 ; i<aRightMenu.length ; i++){
        aRightMenu[i].style.color = 'black';
        aRightMenu[i].style.fontWeight = '500';
    }
}
function liClicked2(n, no){
    var sliders = document.getElementsByClassName('sliders')
    for(var i=0 ; i<sliders.length ; i++){
        sliders[i].style.display = 'none'
    }

    var arightMenu = document.getElementsByClassName('aaRightMenu')
    for(var i=0 ; i<arightMenu.length ; i++){
        arightMenu[i].className =  arightMenu[i].className.replace("active","repla")
        arightMenu[i].style.color = 'black'
    }
    var nMenu = document.getElementsByClassName(n)
    nMenu[0].className =nMenu[0].className.replace("repla","active")
    nMenu[0].style.color = "#c411ac"

    for(var i=0 ; i<arightMenu.length ; i++){
        arightMenu[i].getAttribute('onmouseout','changeMenuColor2(aRightMenu2)')
    }
    nMenu[0].removeAttribute('onmouseout')

    var xIcons = document.getElementsByClassName('xIcons')
    for(var i=0 ; i<xIcons.length ; i++){
        xIcons[i].style.display = 'none'
    }
    document.getElementById("selectedMenu2Div").style.display = 'block'

    document.getElementById(no).style.display = 'block'
}
function liClicked3(n, no){
    var sliders = document.getElementsByClassName('sliders')
    for(var i=0 ; i<sliders.length ; i++){
        sliders[i].style.display = 'none'
    }

    var arightMenu = document.getElementsByClassName('aaRightMenu')
    for(var i=0 ; i<arightMenu.length ; i++){
        arightMenu[i].className =  arightMenu[i].className.replace("active","repla")
        arightMenu[i].style.color = 'black'
    }
    var nMenu = document.getElementsByClassName(n)
    nMenu[0].className =nMenu[0].className.replace("repla","active")
    nMenu[0].style.color = "#c411ac"

    for(var i=0 ; i<arightMenu.length ; i++){
        arightMenu[i].getAttribute('onmouseout','changeMenuColor2(aRightMenu3)')
    }
    nMenu[0].removeAttribute('onmouseout')

    var xIcons = document.getElementsByClassName('xIcons')
    for(var i=0 ; i<xIcons.length ; i++){
        xIcons[i].style.display = 'none'
    }
    document.getElementById(no).style.display = 'block'
    document.getElementById('selectedMenu3Div').style.display = 'flex'

}
function liClicked4(n, no){
    var sliders = document.getElementsByClassName('sliders')
    for(var i=0 ; i<sliders.length ; i++){
        sliders[i].style.display = 'none'
    }

    var arightMenu = document.getElementsByClassName('aaRightMenu')
    for(var i=0 ; i<arightMenu.length ; i++){
        arightMenu[i].className =  arightMenu[i].className.replace("active","repla")
        arightMenu[i].style.color = 'black'
    }
    var nMenu = document.getElementsByClassName(n)
    nMenu[0].className =nMenu[0].className.replace("repla","active")
    nMenu[0].style.color = "#c411ac"

    for(var i=0 ; i<arightMenu.length ; i++){
        arightMenu[i].getAttribute('onmouseout','changeMenuColor2(aRightMenu4)')
    }
    nMenu[0].removeAttribute('onmouseout');

    var xIcons = document.getElementsByClassName('xIcons')
    for(var i=0 ; i<xIcons.length ; i++){
        xIcons[i].style.display = 'none'
    }
    document.getElementById("selectedMenu4Div").style.display = 'block'

    document.getElementById(no).style.display = 'block'
}
function openMyMenu(){
    document.getElementById('fixedRightMenu').style.display = "block"
}
function closeMyMenu(){
    document.getElementById('fixedRightMenu').style.display = "none"
}
function showRightUnderMenu1(){
    if(document.getElementById('fixedRightMenu3').style.height < '70px'){
        document.getElementById('fixedRightMenu3').style.animationIterationCount = '1'
        document.getElementById('fixedRightMenu3').style.animation = 'openMenu1 1s'
        document.getElementById('fixedRightMenu3').style.animationFillMode = 'forwards'
        document.getElementById('topArrow1').style.transform = 'rotate(360deg)'
    }
    else{
        document.getElementById('fixedRightMenu3').style.animationIterationCount = '1'
        document.getElementById('fixedRightMenu3').style.animation = 'closeMenu1 1s'
        document.getElementById('fixedRightMenu3').style.animationFillMode = 'forwards'       
        document.getElementById('topArrow1').style.transform = 'rotate(180deg)'
    }
}
function showRightUnderMenu2(){
    if(document.getElementById('fixedRightMenu4').style.height < '70px'){
        document.getElementById('fixedRightMenu4').style.animationIterationCount = '1'
        document.getElementById('fixedRightMenu4').style.animation = 'openMenu2 1s'
        document.getElementById('fixedRightMenu4').style.animationFillMode = 'forwards'
        document.getElementById('topArrow1').style.transform = 'rotate(360deg)'
    }
    else{
        document.getElementById('fixedRightMenu4').style.animationIterationCount = '1'
        document.getElementById('fixedRightMenu4').style.animation = 'closeMenu2 1s'
        document.getElementById('fixedRightMenu4').style.animationFillMode = 'forwards'       
        document.getElementById('topArrow1').style.transform = 'rotate(180deg)'
    }
}
function closeFixedRightMenu(){
    document.getElementById('fixedRightMenu').style.display = 'none'
}