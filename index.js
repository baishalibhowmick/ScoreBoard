let incHomeScoretxt=document.getElementById("home-el");
let incGuestScoretxt=document.getElementById("guest-el");
let count=0;
let guestcount =0;
function incHomeScore1(){
    count +=1;
    incHomeScoretxt.textContent=count;
}
function incHomeScore2(){
    count +=2;
    incHomeScoretxt.textContent=count;
}
function incHomeScore3(){
    count +=3;
    incHomeScoretxt.textContent=count;
}
function incGuestScore1(){
    guestcount +=1;
    incGuestScoretxt.textContent=guestcount;
}
function incGuestScore2(){
    guestcount +=2;
    incGuestScoretxt.textContent=guestcount;
}
function incGuestScore3(){
    guestcount +=3;
    incGuestScoretxt.textContent=guestcount;
}
function refresh(){
    count=0;
    guestcount=0;
    incGuestScoretxt.textContent=0;
    incHomeScoretxt.textContent=0;
}