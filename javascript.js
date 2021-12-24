const colorArr = ["red","green","yellow"]
let value = document.querySelector(".value")
let clickbtn = document.querySelector("#button")
let resetbtn = document.querySelector("#resetbtn")
clickbtn.addEventListener("click", function changebackground(){

//     const randNum = Math.floor(Math.random() * 10) + 1;
//     console.log(randNum);
//    alert(randNum)

const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  console.log(randomColor);

    // document.body.style.backgroundColor = colorArr[2]
}


)
resetbtn.addEventListener("click", function changebackground(){
    document.body.style.backgroundColor = "white"

}
    
)