
// heart section counting
const hearts = document.getElementsByClassName("heart-icon");
for(const heart of hearts){
    heart.addEventListener("click", function(){
        const heartCount = parseInt(document.getElementById("heart-count").innerText);

        // document.getElementById("heart-count").innerText = heartCount + 1;

        if(heart.classList.contains("liked")){
            heart.classList.remove("liked", "text-red-500");
            document.getElementById("heart-count").innerText = heartCount - 1;
        }
        else{
            heart.classList.add("liked","text-red-500");
            document.getElementById("heart-count").innerText = heartCount + 1;
        }
    })
}


// call button functions
const callButtons = document.getElementsByClassName("call-button");

for(const button of callButtons){
    button.addEventListener("click", function(){
        const card = button.parentElement;

        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;

        const coinElement = document.getElementById("coin-count");
        let coins = parseInt(coinElement.innerText);

        if(coins < 20){
            alert("Not enough coins to make the call!");
            return;
        }

        coins = coins - 20;
        coinElement.innerText = coins;

        alert("Calling ${serviceName} at ${serviceNumber}");


        const callHistory = document.getElementById("call-history");
        
    })
}