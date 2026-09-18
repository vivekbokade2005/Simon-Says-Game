let gameseq=[];
let userseq=[];
let highscore=[];
let level=0;
let btns=["red","green","yellow","purple"];
let h2=document.querySelector("h2");
let started=false;

// GAME START
document.addEventListener("keypress",function()
{   if(started==false){
    console.log("game started");
    started=true;
    for(loop of btns){
    let loopclass=document.querySelector(`.${loop}`);
    loopclass.classList.add("gameflash");
    setTimeout(function()
    {
     loopclass.classList.remove("gameflash");
    },500);
    }
    setTimeout(function()
    {
    levelup();
    
    },800);   
    }
    });

// LEVEL UP
function levelup()
{   userseq=[];
    level++;  
    h2.innerText=`level ${level}`;
    let randomidx=(Math.floor(Math.random()*3))+0;
    let color=btns[randomidx];
    let btnclass=document.querySelector(`.${color}`);
    gameseq.push(color);
    console.log(gameseq);
    gameflash(btnclass);
    
    
}

// GAME AUTO - WHITE
function gameflash(btn)
{
    btn.classList.add("gameflash");
    setTimeout(function()
{
     btn.classList.remove("gameflash");
},300);
} 

//USER CLICK -  WHITE
function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
{
     btn.classList.remove("userflash");
},300);
}
// ALL BTN SELECTOR FOR USER PRESS
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)
{
    btn.addEventListener("click",btnpress);
}
function btnpress()
{
     let btn=this;
     userflash(btn);
     let usercolor=btn.getAttribute("id");
     userseq.push(usercolor);
     checkans(userseq.length-1);
} 
//CHECK THE USER AND GAME SEQUENCE
function checkans(idx)
{
    if(userseq[idx]==gameseq[idx])
    {  if(userseq.length==gameseq.length)
    {
        setTimeout(levelup,1000);
    }
    }
    else{
        let max=0;
        highscore.push(level);
        for(arr of highscore)
        {  
           if(max<arr)
           {
                max=arr;
           }
        }
        h2.innerHTML=`Game Over! Your Score is <b>${level} , Your High Score is ${max} </b> <br> Press any key to start.`;
        let body= document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function()
    {
         body.style.backgroundColor="white";
    },200);
        restart();
       
    }
}
  //RESTART THE GAME
function restart()
{   
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}
