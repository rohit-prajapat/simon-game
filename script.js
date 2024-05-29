let gameSeq = [];
let userSeq = [];
let boxs = ["red","blue","green","yellow"];
let score = 0;
let level = 0;

let flag = 0;

let start = document.querySelector("body");
start.addEventListener("click",function(){

    if(flag == 0) 
    {
        levelUp();
        level++;
        console.log("Game start");
        flag = 1;
    }
})

function gameFlash(btn)
{   
    // console.log(btn.id)
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },500);
}

function levelUp()
{
    
    let levelHeading = document.querySelector("h4");
    levelHeading.innerHTML = `Level is ${gameSeq.length}`;
    let rn = (Math.floor(Math.random() * 10))%4;
    userSeq = [];
    gameSeq.push(boxs[rn]);
    randombox = document.getElementById(boxs[rn]);
    gameFlash(randombox);
    let btn = document.getElementsByClassName("box");
    console.log(boxs[rn]);
    for( b of btn)
    {
        b.addEventListener("click",clickButton);
      
    }
 
}

function clickButton(b)
{
        userSeq.push(this.id);
        console.log("user");

        gameFlash(this);

        // for(c of userSeq)
        // {
        //     console.log(c);
        // }
        // console.log("next2");

        let idx = userSeq.length-1;

        console.log(userSeq[idx], gameSeq[idx]);


        if(userSeq[idx] != gameSeq[idx]) 
        {
           console.log("Game Over ");
           reset();
        }
        if(userSeq.length == gameSeq.length) 
        {
            setTimeout(() => {
          
                levelUp();
            }, 1000);
        }

        

    
}

function reset()
{
    let levelHeading = document.querySelector("h4");
    levelHeading.innerHTML = `Game Over`;
    
    console.log("game over");

}