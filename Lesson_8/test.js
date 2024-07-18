// console.log("ssss")
// alert("test")
// prompt()
// confirm();
//*************************************************************** */
// 1. 1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.
let sum = 0;
let hasil = 1;
for (let i = 1; i < 10; i++) {
	sum = sum + i;
	hasil = hasil * i;
}
console.log("cem = " + sum);
console.log("hasil = " + hasil);

//*************************************************************** */
// 2. 1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın
let sum2 = 0;
let hasil2 = 1;
for (let i = 1; i < 100; i++) {
	sum = sum + i;
	hasil = hasil * i;
	if (i % 2 == 0) console.log(i);
}
console.log("cem = " + sum2);
console.log("hasil = " + hasil2);

//*************************************************************** */
// 3. 3 rəqəmli ədədlərin ədədi ortasını tapın
let cem3 = 0;
let count = 0;
let result = 0;
for (let i = 100; i < 1000; i++) {
	cem3 += i;
	count++;
}
result = cem3 / count;
console.log("result = " + result);

//*************************************************************** */
//4. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın
//5. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın
let sum5 = 0;
for (let i = 100; i < 1000; i++) {
	if (i % 7 == 0 && i % 8 == 0) {
		console.log("7 ve 8 bolunen reqemler = " + i);
		sum5 += i;
	}
}

//*************************************************************** */
//6. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın
for (let i = 100; i < 1000; i++) {
	if (i % 7 == 0 && i % 8 == 0) {
		console.log(" ilk 7 ve 8 bolunen reqemler = " + i);
		break;
	}
}

//*************************************************************** */
//7. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
let last = 0;
for (let i = 100; i < 1000; i++) {
	if (i % 7 == 0 && i % 8 == 0) {
		last = i;
	}
}
console.log("last = " + last);

//*************************************************************** */
//8. 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın
for (let i = 2; i < 100; i++) {
	let id = 0;
	for (let j = 2; j <= i; j++) {
		if (i % j == 0) id++;
	}
	if (id > 1) console.log(i + " murrekkeb regemdir");
	else console.log(i + " sade regemdir");
}

//*************************************************************** */
//9. Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın

// let a = +prompt("1 regem ");
// let b = +prompt("2 regem ");
// let c = +prompt("3 regem ");
// let bigN = 0;
// let smallN = 0;
// if (a > b) {
// 	bigN = a;
// 	smallN = b;
// } else {
// 	bigN = b;
// 	smallN = a;
// }
// if (c > bigN) bigN = c;
// if (c < smallN) smallN = c;
// console.log(bigN + " " + smallN);

//*************************************************************** */
//10. İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana
//cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)

//+prompt("Regem Daxil Et")%2==0?alert("Regem cut"):alert("Regem tekdir")

//*************************************************************** */
//11. İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli
// tətbiq edib nəticəni ekrana çıxarın.

// let num1=+prompt("Regem daxil et")
// let num2=+prompt("Regem daxil et")
// let emeliyetNovu=prompt("Riyazi emeliyeti daxil et")
// let result11=0
// switch(emeliyetNovu){
//     case "*": result11=num1*num2
//     break;
//     case "/":result11=num1/num2
//     break;
//     case "%":result11=num1%num2
//     break;
//     case "+":result11=num1+num2
//     break;
//     case "-":result11=num1-num2
//     break;
//     default : alert("Sehv var")
//     break
// }
// alert(result11)

//*************************************************************** */
// 12. Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.

// let dividend=+prompt("Eded daxil edin")
// for(let i =100;i<1000;i++){
//     if(i%dividend===0)console.log(i)
// }

//*************************************************************** */
// 13. Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.

// let number13=+prompt("Eded daxil edin")
// for(let i =1;i<=number13;i++){
//     if(number13%i===0)console.log(i)
// }
//*************************************************************** */
// 14. 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)

// let number14=12
// for(let i=0;i<6;i++){
//     console.log( i ,`+`, number14-i)
// }

//*************************************************************** */
// 15. İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, =&gt; x=6, y=5)

let x=5
let y=6
let t=x
t=x
x=y
y=t
console.log("x = "+x,"y = "+y)

//*************************************************************** */
// 16. Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın.

// let number15=+prompt("Eded daxil edin 15")
// if(number15%1===0)alert(true)
// else alert(false)
//*************************************************************** */
// 17. number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin
// - beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın);
// - 3-ə bölünmədən qalan qalığını (tapın);

// let number17 = 13;
// console.log(number17 ** 5);
// console.log(number17 % 3);
//*************************************************************** */
// 18.Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.
// 0 &gt; �� cox soyuq
// 0-15 derece �� soyu
// 15-30 derece �� isti
// 30&lt; �� cox isti
// Əgər heç biri deyilse alerte versin ki temperatur yanlışdır.

// let temp = +prompt("Temperaturu daxil et");
// if (temp < 0) alert("Cox soyuq");
// else if (temp >= 0 && temp < 15) alert("Soyuq");
// else if (temp >= 15 && temp < 30) alert("Isti");
// else if (temp > 30) alert("Cox isti");
// else alert("temperatur yanlışdır");

//*************************************************************** */
// 19.Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 =&gt; bazarertesi,
// 3=&gt; cersenbe (heftenin 7 gunu ucun)

// let day = +prompt("Heftenin gununu daxil et");
// switch(day){
//     case 1:alert("Sunday")
//     break
//     case 2:alert("Monday")
//     break
//     case 3:alert("Tuesday")
//     break
//     case 4:alert("Wensday")
//     break
//     case 5:alert("Thursday")
//     break
//     case 6:alert("Friday")
//     break
//     case 7:alert("Saturday")
//     break
//     default : alert("Wrong day")
// }
//*************************************************************** */
// 20. Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yaz
// fesli alertə çıxarın.
// let numMonth=+prompt("Ayin nomresini daxil et (Numune 1,2,3..12)")
// switch(numMonth){
// case 1 : alert(" Yanvar 1 ay .Qish fesli")
// break
// case 2 : alert(" Fevral 2 ay .Qish fesli")
// break
// case 3 : alert(" Mart 3 ay .Yaz fesli")
// break
// case 4 : alert(" Aprel 4 ay .Yaz fesli")
// break
// case 5 : alert(" May 5 ay .Yaz fesli")
// break
// case 6 : alert(" Iyun 6 ay .Yay fesli")
// break
// case 7 : alert(" Iyul 7 ay .Yay fesli")
// break
// case 8 : alert(" Avgust 8 ay .Yay fesli")
// break
// case 9 : alert(" Sentyabr 9 ay .Payiz fesli")
// break
// case 10 : alert(" Oktyabr 10 ay .Payiz fesli")
// break
// case 11 : alert(" Noyabr 11 ay .Payiz fesli")
// break
// case 12 : alert(" Dekabr 12 ay .Qish fesli")
// break
// default :alert("Ay nomresini 1-12 araliginda bildirin")
// }