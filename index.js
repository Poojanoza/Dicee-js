const randomNum1 = Math.floor(Math.random() * 6) + 1

const randomImgSource1 = "images/dice" + randomNum1 + ".png";

const img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImgSource1)

const randomNum2 = Math.floor(Math.random() * 6) + 1

const randomImgSource2 = "images/dice" + randomNum2 + ".png";

const img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImgSource2)

// check both number same or not
if(randomNum1 > randomNum2){
    document.querySelector("h1").innerText = "Player 1 is Win";
}else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerText = "Player 2 is Win";
}else{
    document.querySelector("h1").innerText = "match draw"
}

const button = document.getElementById("btn");

const btnevent = ()=>{
    window.location.reload();
};

button.addEventListener("click",btnevent)