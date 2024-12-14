var sidenav=document.querySelector(".sidenavbar")


function show()
{
    sidenav.style.left="0"
}

function no()
{
    sidenav.style.left="-60%"
}

function yes()
{
    alert("Thank you for your Registration")
}

function ok()
{
    alert("See the collections")
}

function sub()
{
    alert("Thank you")
}



var popupoverlay=document.querySelector(".over")
var popupbox=document.querySelector(".overlaybox")
var addpopup=document.querySelector(".llll")


addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"


})

var cancelpopup=document.getElementById("cancelpopup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


var overlay=document.querySelector(".over")
var login=document.querySelector(".overlay")
var register=document.querySelector(".register")


register.addEventListener("click",function(){
    login.style.display="block"
    overlay.style.display="block"
})
