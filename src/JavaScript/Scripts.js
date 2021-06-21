/*Add id in mobile*/
var navElements;
export function removeID() {
    console.log("removed")
    if(window.innerWidth<=600){
        console.log("mobile");
        document.querySelector("ul").setAttribute("id","navElements");
        navElements =document.getElementById("navElements");
        navElements.style.maxHeight="0px";
        navElements.style.opacity="0";
    }
    if(window.innerWidth>600){
        console.log("desktop");
        document.querySelector("ul").removeAttribute("id");
        document.querySelector("ul").style.opacity="1";
        document.querySelector("ul").style.maxHeight="240px";
        document.querySelector("ul").style.transition="none";
    }
}
/*view drop down ul in mobile*/
export function toggleMenu(){
    navElements.style.transition="1s";
    console.log("Toggled");
    if(navElements.style.maxHeight==="0px")
    {
        navElements.style.maxHeight="240px";
        navElements.style.opacity="1";
        document.querySelector("header").style.backgroundColor="black";
        document.getElementById("nav-icon").style.filter="invert(100%)";
        //document.querySelector("section").addEventListener("click",cancelMenu)
        //document.querySelector("section").addEventListener("touchmove",cancelMenu,{passive: true})
    }else
    {
        navElements.style.maxHeight="0px";
        navElements.style.opacity="0";
        document.getElementById("nav-icon").style.filter="invert(0%)";
        document.querySelector("header").style.backgroundColor="transparent";
    }
}
export function cancelMenu(){
    navElements.style.maxHeight="0px";
    document.getElementById("nav-icon").style.filter="invert(0%)";
    navElements.style.opacity="0";
    document.querySelector("header").style.backgroundColor="transparent";
}

window.addEventListener("scroll",function (){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
})
window.addEventListener("resize",removeID);
window.addEventListener("load",removeID);

var txt = ":: I'm learning react> npx create-react-app thomy-portfolio > cd thomy-portfolio > npm start";
var speed = 50;

export function typeWriterV2(){
    var i = 0;
    typethis();
    function typethis() {
        console.log("np");
        try{
            if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                if (txt.charAt(i+1)===">"){
                    document.getElementById("demo").innerHTML += "<br/>";
                }
                i++;
                setTimeout(typethis, speed);
            }
        }catch (err){
            return null;
        }
    }
}

export function hideNavBar(){
    if(document.getElementById("navElements")!=null){
        cancelMenu();
    }
}

