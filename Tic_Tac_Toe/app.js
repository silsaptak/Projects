let boxes=document.querySelectorAll(".box");//box is a class
let resetbtn=document.querySelector("#resetbtn"); //resetbtn is a id
let newbtn=document.querySelector("#newbtn");
let cointainer=document.querySelector(".msg-cointainer");
let msg=document.querySelector("#msg");
let count=0;
let turn0 =true;  //playerX,player0


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Clicked");
        if(turn0){
            box.innerHTML="O";
        }else{
            box.innerHTML="X";
        }
        turn0=!turn0;
        box.disabled=true;
        count++;
        checkWinner();
    });
    
});
const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    };
};
const enableBoxes=()=>{
    
    for(box of boxes){
        box.disabled=false;
        box.innerHTML="";
    };
};

const showWinner=(winner)=>{
    disableboxes();
    msg.innerHTML=`Congratulations!! Winner is ${winner}`;
    cointainer.classList.remove("hide");
}
 const checkWinner=()=>{
    let winnerfound=false;
    for(let patterns of winning_pattern){
        //console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]])
        let pos1=boxes[patterns[0]].innerHTML;
        let pos2=boxes[patterns[1]].innerHTML;
        let pos3=boxes[patterns[2]].innerHTML;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos1===pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
                winnerfound=true;
            }
        }
       
    }
    if(count==9 && !winnerfound){
        msg.innerHTML=`OOPS its a DRAW. Try Again`;
        cointainer.classList.remove("hide");
    }
 }
const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    cointainer.classList.add("hide");
};



const winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//event listner
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

