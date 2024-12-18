let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newbtn=document.querySelector(".newgame-btn");
let greetings=document.querySelector(".msg-content");
let hide=document.querySelector(".hide");
let msg=document.querySelector("#msg");
let count=0;
let turnO=true;
const Winpatterns =[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
};
const restartGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    hide.classList.add("hide");
}
const gamedraw=()=>{
    msg.innerText="It's Draw! Restart your Game.";
    hide.classList.remove("hide");
    disableBoxes();
}
for(let box of boxes) {
    box.addEventListener("click",()=>{
        console.log("button clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.disabled=true;   
        }
        else{
            box.innerText="X";
            turnO=true;
            box.disabled=true;
        }
        count++; 
        let isWinner=checkWinner();
        if (count === 9 && !isWinner) {
            gamedraw();
        }
    });
    
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    hide.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of Winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;
}
newbtn.addEventListener("click",restartGame);
resetbtn.addEventListener("click",restartGame);