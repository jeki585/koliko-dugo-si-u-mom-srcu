// 💖 Set your relationship start date here:
console.log("JavaScript is working!");
const startDate = new Date("2025-08-23T19:35:00");  
document.querySelector(".names").textContent = "медо ❤️ переца";


const heartsContainer = document.querySelector(".hearts");

// Function to create a heart at a random position
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Set random horizontal position for each heart (across the full screen)
    heart.style.left = Math.random() * 100 + "%"; // Random horizontal position between 0% and 100%

    // Append the heart to the container
    heartsContainer.appendChild(heart);

    // Remove the heart after the animation is complete
    setTimeout(() => {
        heart.remove();
    }, 3000); // Remove the heart after it finishes falling (3000ms = 3s)
}

// Continuously create hearts every 1 second
setInterval(createHeart, 1000);


function updateTimer() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const diff = now - startDate;
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if(years < 1){
        document.getElementById("timer").innerHTML =
    `${months} мјесеца, ${days} дана,
     ${hours} сати, ${minutes} минута, ${seconds} секунди 💖`;}
    else if(years == 1){
        document.getElementById("timer").innerHTML =
    `${years} годину, ${months} мјесеца, ${days} дана,
     ${hours} сати, ${minutes} минута, ${seconds} секунди 💖`;
    }else if(years < 5){
    document.getElementById("timer").innerHTML =
    `${years} годинe, ${months} мјесеца, ${days} дана,  
     ${hours} сати, ${minutes} минута, ${seconds} секунди 💖`;}
     else{
        document.getElementById("timer").innerHTML =
    `${years} годинa, ${months} мјесеца, ${days} дана,  
     ${hours} сати, ${minutes} минута, ${seconds} секунди 💖`;
     }
}

setInterval(updateTimer, 1000);
updateTimer();

   