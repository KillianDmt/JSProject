const cookie = document.querySelector("#cookie");
console.log(cookie)

const updateScore = cookies => {
    const title = document.querySelector("title");
    console.log(title)
    const score = document.querySelector("#score span");

    score.innerText = cookies;
    title.innerHTML = cookies + " cookies - Cookie Clicker";
    console.log(title)
    localStorage.setItem("cookies", cookies);

}

const getStorage = () => {
    const cookies = localStorage.getItem("cookies") || 0;
    const powerups = JSON.parse(localStorage.getItem("powerups")) || [];

    const storage = {
        "cookies": cookies,
        "powerups": powerups,
    }

    return storage;
}

const cookieClicked = cookie => {
    const storage = getStorage();

    const score = document.querySelector("#score").innerText;
    console.log(score)
    const scoreValue = cookie ? cookie : parseFloat(score);
console.log(scoreValue)
    let newScore;

    newScore = scoreValue + 1;

    updateScore(newScore);
    console.log(newScore);
}

cookie.addEventListener("click", (e) => {
    cookieClicked()
});