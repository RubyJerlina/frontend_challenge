const adviceNum = document.getElementById("advice-num");

const Quote = document.getElementById("quote");

const generate_btn =document.getElementById("generate");

async function generate(){

const res = await fetch('https://api.adviceslip.com/advice')
const data =await res.json()
.then((data)=>{
    adviceNum.innerText = "ADVICE " + "#" + data.slip.id;
    Quote.innerText ='"'+ data.slip.advice;
    console.log(id);
    console.log(advice);
})
}
generate_btn.onclick=()=>{
    generate();
}



