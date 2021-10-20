// var likes = 0;
// var likes2 = 0;
// var likes3 = 0 ;

// function clickCounter() {
//     likes += 1;
//     likes2 += 1;
//     likes3 += 1;

//     document.getElementById("likes").innerHTML = likes  + "like(s)";
//     document.getElementById("likes2").innerHTML = likes2  + "like(s)";
//     document.getElementById("likes3").innerHTML = likes3 + "like(s)";
// };

function search(){
    var value = document.querySelector("#searchbar").value;
    alert("My search is " + value);
}


function clickCounter(id){
    var element = document.querySelector(id);
    var count = parseInt(element.innerHTML);
    element.innerHTML = count + 1;
}