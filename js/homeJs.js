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
function changePage(){
    document.getElementById('xIcon').style.display = 'block'
    document.body.style.backgroundColor = '#e0e0e0'
    document.getElementById('topMenu').style.justifyContent = 'flex-start'
    document.getElementById('searchInput').style.marginRight = '20px'
    document.getElementById('searchInput').style.backgroundColor = 'white'
    document.getElementById('littleMenu').style.display = 'none'
    document.getElementById('loginDiv').style.display = 'none'
    document.getElementById('bamaIconDiv').style.display = 'none'
    document.getElementById('searchInput').style.width = '500px'
    document.getElementById('middleMenu').style.display = 'none'
}
function clickX(){
    document.getElementById('xIcon').style.display = 'none'
    document.body.style.backgroundColor = 'white'
    document.getElementById('topMenu').style.justifyContent = 'space-between'
    document.getElementById('searchInput').style.marginRight = '0px'
    document.getElementById('searchInput').style.backgroundColor = '#ececec'
    document.getElementById('bamaIconDiv').style.display = 'block'
    document.getElementById('searchInput').style.width = '300px'
    document.getElementById('littleMenu').style.display = 'flex'
    document.getElementById('loginDiv').style.display = 'flex'
    document.getElementById('middleMenu').style.display = 'flex'
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
function liClicked(n){
    document.getElementsByClassName('aaRightMenu').className =  document.getElementsByClassName('aaRightMenu').className.replace("active","")
    document.getElementsByClassName(n).className = 'active'
}