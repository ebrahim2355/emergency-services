
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

