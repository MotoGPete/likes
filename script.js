var likes = 0

function clickCounter() {
    likes += 1;
    document.getElementById("likes").innerHTML = likes + "" + "like(s)";
};