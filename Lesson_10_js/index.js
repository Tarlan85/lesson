// let tex="Millisoft"
// consol.log(tex.substring(2,3))
// tex.substr(1,4)
// tex.slice(1,-1)
// tex.toLowerCase()
// tex.toUpperCase()
// tex.replace("M","w")// esli xochu vse pomenyat (/M/ig,"w")
// // /i dlya icnora case
// tex.split("")//delit slovo po bukvar zapisivaet v masiv
// tex.indexOf("a",3)
// tex.includes("a")//return true or false
// tex.charCodeAt(3)//return asci code simvola pod ukazannim index
// tex.trim()//ubiraet probeli speredi i szadi
// tex.padStart(10)//dovodit dlinu tex do 10 sim 2 arg "*" simvoli kotoriye xochesh videt
// tex.repeat(10)//povtoreniya
// function name(params) {

// }

/**************************************************************** */
// let h = document.getElementsByTagName("h1");
// let p = document.getElementsByClassName("tett")[0]; //dlya ukazaniya ukaz id s 0 [0]
// document.getElementById("bir");

// document.querySelector("h1");
// let n = document.querySelectorAll("h1"); //po teg
// document.querySelector(".tett"); //po class
// document.querySelector("#bir"); //po id

// Array.from(h).forEach((element) => {
// 	console.log(element);
// });
// n.forEach((element) => {
// 	console.log(element);
// });
//***********************1 : Sadə kalkulyator************************ */
function Calculate(operator) {
	let a = document.querySelector("#input1").value;
	let b = document.querySelector("#input2").value;
	switch (operator) {
		case "+":
			return alert(+a + +b);
		case "-":
			return alert(+a - +b);
		case "*":
			return alert(+a * +b);
		case "/":
			if (+b !== 0) {
				return alert(+a / +b);
			} else {
				return alert("Error: Division by zero");
			}
		default:
			return alert("Error: Invalid operator");
	}
}
/*******************2 : Inputa daxil edilmiş sözü tərsinə çevirən proqram********************* */
// function Reverse() {
//     let text2 = document.querySelector("#input3").value;
// 	let n = text2.length;
// 	let result = "";
// 	for (let i = 0; i < n; i++) result += text2[n - i - 1];
// 	input3.value = result;
// }

/*******************3 : Divin dizaynını dəyişin********************* */

function Change() {
    let div = document.querySelector(".edit");

    let width = document.querySelector("#width").value;
    let height = document.querySelector("#height").value;
    let borderWidth = document.querySelector("#borderWidth").value;

    let borderStyle = document.querySelector("#BS").value;
    let borderColor = document.querySelector("#BC").value;
    let color = document.querySelector("#C").value;
    let backgroundColor = document.querySelector("#BGC").value;

    if (width) div.style.width = width + "px";
    if (height) div.style.height = height + "px";
    if (borderWidth) div.style.borderWidth = borderWidth + "px";
    if (borderStyle) div.style.borderStyle = borderStyle;
    if (borderColor) div.style.borderColor = borderColor;
    if (color) div.style.color = color;
    if (backgroundColor) div.style.backgroundColor = backgroundColor;
}
function Edit() {
    let div = document.querySelector(".edit");
    let height = document.querySelector("#height").value;
    let borderWidth = document.querySelector("#borderWidth").value; 
    let width = document.querySelector("#width").value;
    console.log(div.style.width );
    if (width) div.style.width = (parseInt(div.style.width)+ (+width)) + "px";
    if (height) div.style.height =  (parseInt(div.style.height)+ (+height)) + "px";
    if (borderWidth) div.style.borderWidth =  (parseInt(div.style.borderWidth)+ (+borderWidth)) + "px";
}

