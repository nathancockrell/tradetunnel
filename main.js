let offer = document.getElementById("offer").value;
let offernum = document.getElementById("offernum").value;
let request = document.getElementById("request").value;
let requestnum = document.getElementById("requestnum").value;
let offerval=0;
let requestval=0;
let money = 0;
let rizz = 10;
let negrizz=0;
let people =[
    "guard1.png",
    "bluenyellow.png",
    "cyan.png",
    "green.png",
    "orange1.png",
    "orange2.png",
    "pink.png",
    "purple.png",
    "rednblue.png",
    "yellow1.png",
    "yellow2.png",
    "yellow3.png"

];
let currentPerson="guard1.png";
let r=255;
let g=255;
let b=255;

document.getElementById("submit").addEventListener("click", handleSubmit)
document.getElementById("dig").addEventListener("click", dig)
document.getElementById("shower").addEventListener("click", shower)

document.getElementById("skip").addEventListener("click",()=>{
    let newPerson=people[Math.floor(Math.random()*people.length)];
    document.getElementById("imgdiv").style.backgroundImage=`url(${newPerson})`
    currentPerson=newPerson;
    say("What are you doing here?")
})

function say(message){
    document.getElementById("dialogue").innerHTML +=`<p>: "${message}"</p>`
    document.getElementById("dialogue").scroll(0,document.getElementById("dialogue").scrollHeight)
}

function handleSubmit(){
    let granted = checkOffer();

    if(granted){
        say("sure fine")
        if(offer==="money"){
            money-=offernum;
        }
        if(request==="money"){
            money+=requestnum;
        }
        rizz+=1;
        update();
    }else{
        say("no way")
        if(rizz>0){
            rizz-=1;
        }
        
        update();
    }

    document.getElementById("offer").value=""
    document.getElementById("offernum").value=""
    document.getElementById("request").value=""
    document.getElementById("requestnum").value=""
}
function checkOffer(){
    offerval=assignVal(offer)
    requestval=assignVal(request)
    let bias = rizz-negrizz;
    if(offer==="money"){
        if(money>=offernum){
            console.log("rcich")
        }else{
            return false;
        }
    }
    if(bias+(offerval*offernum)>(requestval*requestnum)){
        return true;
    }
}
function assignVal(item){
    let val=0;
    if(item==="freedom"){
        val=99;
    } else if(item==="money" || "cash" || "$"){
        val = 1;
    } else if(item==="compliment"){
        val=.01;
    }
    return val;
}

function dig(){
    money++;
    negrizz+=.1;
    r-=2.14;
    g-=1.88;
    b-=5;
    update();
}

function shower(){
    money=0;
    negrizz=0;
    r=255;
    g=255;
    b=255;
    update();
}

function update(){
    console.log("rizz: ", rizz, "nrizz", negrizz, "money: ",money)
    document.getElementById("digTotal").textContent=`$ ${money}`;
    document.querySelector("body").style.backgroundColor=`rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`;
}