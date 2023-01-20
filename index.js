let cir1=document.getElementById("cir1");
let arr1= document.getElementById("arr1");

let cir2=document.getElementById("cir2");
let arr2= document.getElementById("arr2");

let cir3=document.getElementById("cir3");
let arr3= document.getElementById("arr3");

let cir4=document.getElementById("cir4");
let arr4= document.getElementById("arr4");




function hit1(){
    arr1.style.paddingLeft="0px";
    arr1.style.transitionDuration="1s";
    change1();
}
function change1(){
    cir1.style.background="white";
    cir1.style.transition="0.3s";
    cir1.style.transitionDelay="1s";
}
function hit2(){
    arr2.style.paddingLeft="0px";
    arr2.style.transitionDuration="1s";
    change2();
}
function change2(){
    cir2.style.background="cyan";
    cir2.style.transition="0.3s";
    cir2.style.transitionDelay="1s";
}
function hit3(){
    arr3.style.paddingLeft="0px";
    arr3.style.transitionDuration="1s";
    change3();
}
function change3(){
    cir3.style.background="pink";
    cir3.style.transition="0.3s";
    cir3.style.transitionDelay="1s";
}
function hit4(){
    arr4.style.paddingLeft="0px";
    arr4.style.transitionDuration="1s";
    change4();
}
function change4(){
    cir4.style.background="orange";
    cir4.style.transition="0.3s";
    cir4.style.transitionDelay="1s";
}

function reset(){
    arr1.style.paddingLeft="34rem";
    arr2.style.paddingLeft="34rem";
    arr3.style.paddingLeft="34rem";
    arr4.style.paddingLeft="34rem";
    cir1.style.background="yellow";
    cir2.style.background="blue";
    cir3.style.background="red";
    cir4.style.background="green";
    
    arr1.style.transition="0s";
    arr2.style.transition="0s";
    arr3.style.transition="0s";
    arr4.style.transition="0s";
    cir1.style.transition="0s";
    cir2.style.transition="0s";
    cir3.style.transition="0s";
    cir4.style.transition="0s";
}