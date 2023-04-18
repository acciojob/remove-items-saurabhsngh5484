//your JS code here. If required.
const btn = document.querySelector(".btn");


function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}

btn.addEventListener("click",removecolor);