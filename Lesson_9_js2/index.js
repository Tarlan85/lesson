let product = [];
product = ["a", "s", "d"];
// product.push('d')//add to end
// product.unshift("d")
// product.shift("d")
// product.pop()// delete last
// Object.freeze(product)//can not edit
// Object.seal(product)//con edit but donn't delete and edit array length
//let newProduct=product.splice(0,3) virexaet s 0 3 sumvola
// product.forEach((item, index) => {
//     console.log(`Element at index ${index} is ${item}`);
// });

//filter return all
// let number=[1,2,3,4,5,6,7]
// let odd=number.filter(item=> item%2==0)
// //return first
// let res=number.find(item=> item%2==0)

// //operaciya nad kollekciyey
// let reslt=number.map(item=> item+5)
// //proizvodit operaciyu nad  kollekciyey i sumiruet
// let sum=number.reduce(sum,item=> sum+=item,10)//10 eto defaul dlya sum

//************************************************************************************ */
// 1. Array elementlərinin cəmini / hasilini tapın

let array1 = [18, 8, 2, 3, 5, 11, 7, 8, 9];
console.log("SUM = " + array1.reduce((sum, item) => (sum += item)));
console.log("SUM = " + array1.reduce((hasil, item) => (hasil *= item)));

//************************************************************************************ */
// 2. Array elementlərinin içində təkrarlanan elementləri silin
let delNum = 0;
let count = 0;
for (let i = 0; i < array1.length - 1; i++) {
	count = 0;
	for (let j = i + 1; j < array1.length; j++) {
		if (array1[i] === array1[j]) {
			count++;
		}
	}
	if (count > 0) {
		delNum = array1.splice(i, 1);
		i--;
		console.log(delNum);
	}
}
console.log(array1);

//************************************************************************************ */
// 3. Array elementlərində ədəd olmayan elementləri silin
let array3 = [1, 2, 3, 8, 5, null, 7, "q", 9];
var res = array3.filter((item) => typeof item === "number");
console.log(res);
for (let i = 0; i < array3.length; i++) {
	if (typeof array3[i] != "number") {
		array3.splice(i, 1);
		i--;
	}
}
console.log(array3);
//************************************************************************************ */
// 4. Array elementlərindən maksimum/minimum olanı tapın.

//console.log(array1.filter(item=>(item)));
let max = 0;
let min = 0;
max = array1[0];
min = array1[0];
for (let i = 0; i < array3.length; i++) {
	if (max < array1[i]) {
		max = array1[i];
	}
	if (min > array1[i]) min = array1[i];
}
// console.log(array1)
console.log(max);
console.log(min);

//************************************************************************************ */
// 5. Daxil edilən cumlədəki simvol sayını çıxarın.
// text=prompt("Cumleni daxil edin")
// console.log(text.length)
//************************************************************************************ */
// 6. Array elementlerini 2-yə vurub yeni bir array kimi çap edin.

let res6 = array1.map((item) => item * 2);
console.log(res6);
//************************************************************************************ */
// 7. Array elementlərini tərsinə çap edin.

for (let i = 0; i < array1.length; i++) {
	console.log(array1[array1.length - 1 - i]);
}
//************************************************************************************ */
// 8. Verilmiş massivlərdə hər bir indeks dəyərinin cəmini hesablayan
// Nümunə : massiv1 = [1,0,2,3,4]; massiv2 = [3,5,6,7,8,13];
// Gözlənilən Nəticə: [4, 5, 8, 10, 12, 13]
let massiv1 = [1, 0, 2, 3, 4];
let massiv2 = [3, 5, 6, 7, 8, 13];
let result = [];
for (i = 0; i < (massiv1 > massiv2 ? massiv1.length : massiv2.length); i++) {
	result[i] =
		typeof massiv1[i] === "number"
			? massiv1[i]
			: 0 + (typeof massiv2[i] === "number")
			? massiv2[i]
			: 0;
}
console.log(result);

//************************************************************************************ */
// 9. Sözü tərsinə çevirən program yazın.
// let text9=prompt("Text daxil et..")
// let resText=""
// for ( let i=text9.length-1;i>=0;i--){
// resText+=text9[i]
// }
// console.log(resText)

//************************************************************************************ */
// 10. Cümlədəki sözlərin yerini tərsinə çevirən program yazın. (salam mənim adım
// leyladır �� leyladır adım mənim salam)

let text10 = "salam mənim adım leyladır";
let resText10 = "";
for (let i = text10.split(" ").length - 1; i >= 0; i--) {
	resText10 += text10.split(" ")[i] + " ";
}
console.log(resText10);
//************************************************************************************ */
// 11. Daxil edilmiş ədədi sözlə yazan funskiya (Məs��input:1, output : Bir)
// let number11=+prompt("Regemi daxil et")
// let dictionary=["Sifir","Bir","Iki","Uc","Dort","Besh","Alti","Etdi","Sekkiz","Dokkuz","On","Iyirmi","Otuz","Qirx","elli","Altmish","Yetmish","Seksen","Doxsan","Yuz","Min"]
// let iterCount=0;
// resText10=""
// qqq(number11,iterCount)

// function qqq(num,count) {
//     let i=num%10
//     console.log(i)
//     if(count==0){
//     resText10=dictionary[i]+" "+resText10+" "
//     console.log(resText10)}
//     if(count==1){

//     resText10=dictionary[(count)*10+i-1]+" "+resText10
//     console.log(resText10)
//     if(((num-i)/10)>0){
//         console.log(((num-i)/10))
//         resText10=dictionary[((num-i)/10)]+" "+resText10+" "
//     }
// }

//    else if(count==2){
//         resText10=dictionary[19]+" "+resText10+" "
//     console.log(resText10)
//     }else if(count==3){
//         resText10=dictionary[20]+" "+resText10+" "
//     console.log(resText10)}
//     if(((num-i)/10)>=1){
//         console.log()
//                 count++
//                 console.log(count,((num-i)/10))
//                 qqq(((num-i)/10),count)
//     }

//     }
//************************************************************************************ */
// 12. Verilmiş mətndə sözlərin sayını tapın.

let text12 = "Verilmiş mətndə sözlərin sayını tapın.";
let worldCount = text12.split(" ").length;
console.log(worldCount);
//************************************************************************************ */
// 13. Verilmiş cümlədə artıq boşluq simvollarını silin

let text13 = "   Verilmiş cümlədə   artıq boşluq   simvollarını silin  ";
console.log(text13.replace(/\s+/g, " ").trim());
//************************************************************************************ */
// 14. Verilmiş mətndə cümlələrin ilk sözündə olan baş hərfin böyük yazılmasını
// təmin edən proqram yazın
let text14 = "baş hərfin böyük yazılmasını";
let result14 = text14.charAt(0).toUpperCase() + text14.slice(1);
console.log(result14);
//************************************************************************************ */
// 15. İki arrayın eyniliyini yoxlayın.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 4, 3, 2, 1, 6];
console.log(arr1, arr2);
console.log(arrEqual(arr1, arr2));

let arr3 = [1, 2, 3, 4, 5];
let arr4 = [5, 4, 3, 2, 1];
console.log(arr3, arr4);
console.log(arrEqual(arr3, arr4));
function arrEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let sortedArr1 = arr1.sort();
	let sortedArr2 = arr2.sort();

	for (let i = 0; i < sortedArr1.length; i++) {
		if (sortedArr1[i] !== sortedArr2[i]) {
			return false;
		}
	}
	return true;
}
//************************************************************************************ */
// 16. Array elementlərini sort metodundan istifadə etmədən artma / azalma
// istiqamətinə görə sıralayın (bubble sort)
function sortDesc(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - 1 - i; j++) {
			if (arr[j] < arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
function sortAsc(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

let array = [5, 3, 8, 4, 2];
console.log(sortAsc(array.slice()));
console.log(sortDesc(array.slice()));

//************************************************************************************ */
// 17. İstifadəçidən ədəd daxil etməyini tələb edin. Proqram daxil edilən ədədi
// oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir. Məs:
// Giriş: 3456 Çıxış: 3 4 5 6
// let number17=prompt("regem daxil edin..")
// console.log(...number17)
//************************************************************************************ */
// 18. Verilmiş mətndə təkrarlana sözlərin sayını tapın
let text18 =
	" Verilmiş mətndə təkrarlana sözlərin sayını tapın təkrarlana sözlərin sayını tapın weqewqe edsvds ";
console.log(text18);
let arr = text18.split(" ");
count = 0;
for (i = 0; i < arr.length; i++) {
	for (j = i + 1; j < arr.length - 1; j++) {
		if (arr[i] == arr[j]) count++;
	}
}
console.log(count);

//************************************************************************************ */
// 19. Tələbələrin məlumatlarını özündə saxlayan object yaradın. İmtahandan
// keçməyən tələbələri objectdən silin.

let students = {
    student1: { name: "Ali", surname: "Aliyev", sum: 55, entrance: 20 },
    student2: { name: "Sara", surname: "Suleymanova", sum: 50, entrance: 16 },
    student3: { name: "Ramin", surname: "Kerimov", sum: 60, entrance: 18 },
    student4: { name: "Leyla", surname: "Huseynova", sum: 45, entrance: 19 },
    student5: { name: "Nigar", surname: "Mammadova", sum: 52, entrance: 15 }
};

function removeFailingStudents(students) {
    for (let key in students) {
        if (students[key].sum < 51 || students[key].entrance < 17) {
            delete students[key];
        }
    }
}

removeFailingStudents(students);

console.log(students);

//************************************************************************************ */
// 20. Verilmiş 2mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə
// əsasən)
// function getTrigrams(text) {
//     let words = text.split(/\s+/);
//     let trigrams = [];
//     for (let i = 0; i < words.length - 2; i++) {
//         trigrams.push(words.slice(i, i + 3).join(' '));
//     }
//     return trigrams;
// }
// let text1="Verilmiş 2 mətnin oxşarlıq əmsalını hesablayın."
// let text2="mətnin oxşarlıq əmsalını hesablayın. 3 ardıcıl sözün eyniliyinə əsasən"
// let trig1=getTrigrams(text1)
// let trig2=getTrigrams(text2)
// let countTrig=0;
// for (i=0;i<trig1.length;i++){
//     for(j=0;j<trig2.length;j++){
//         if(trig1[i]===trig2[j]) {countTrig++
        
//         console.log(trig1[i])
//         console.log(trig2[j]);}
//     }
// }
// console.log("oxşarlıq əmsalını = ",countTrig);
//************************************************************************************ */
// 21. İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək
// haqqınn hesablanması üçünproqram yazın. Həftəlik 40 saatdan artıq olan iş
// saatları üçün əmək haqqı 2 qat hesablansın

function calculateMonthlySalary(hourlyWage, weeklyHours) {
    const regularHours = 40;
    const overtimeRate = 2;
    const weeksInMonth = 4;

    let weeklySalary;

    if (weeklyHours <= regularHours) {
        weeklySalary = weeklyHours * hourlyWage;
    } else {
        let regularSalary = regularHours * hourlyWage;
        let overtimeHours = weeklyHours - regularHours;
        let overtimeSalary = overtimeHours * hourlyWage * overtimeRate;
        weeklySalary = regularSalary + overtimeSalary;
    }

    let monthlySalary = weeklySalary * weeksInMonth;
    return monthlySalary;
}

// Примеры использования
let hourlyWage = 20; // 1 саатlıq əmək haqqı
let weeklyHours = 45; // Həftəlik iş saatları

let monthlySalary = calculateMonthlySalary(hourlyWage, weeklyHours);
console.log(`Aylıq əmək haqqı: ${monthlySalary} AZN`); // Output: Aylıq əmək haqqı: 4000 AZN

//************************************************************************************ */
// 22. Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin.
// let text22 = "ADNA awfasf dadwada wafawfs awwwa f ADNA";
// console.log(text22.replace("ADNA", "ADNASU"));
//************************************************************************************ */
// 23. 3 rəqəmli ədədin rəqəmləri cəmini tapın.
// function getSumNum(number) {
// 	if (number === 0) {
// 		return 0;
// 	}
// 	return (number % 10) + getSumNum(Math.floor(number / 10));
// }
// let num23 = 3677;
// console.log(getSumNum(num23));

//************************************************************************************ */
// 24. Array daxilində tək yerdə duran elementləri ekrana verin
// let array24 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array24.length; i++) {
// 	if (i % 2 == 0) console.log(array24[i]);
// }
//************************************************************************************ */
// 25. Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin

// let array25 = [1, 2, , 45, 3, 4, 5, 6, 7, 8, 9, 10, 21];
// let newArr = array25.filter((item) => item % 5 == 0);
// console.log("5-ə bölünən ədədlərin sayını = " + newArr.length);
//************************************************************************************ */
// 26. Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.

// let newArr26 = array25.filter((item) => item % 7 == 0);
// console.log("7-ə bölünən sonuncu ədəd = " + newArr26[newArr26.length - 1]);

//************************************************************************************ */
// 27. Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini
// dəyişən proqram tərtib edin
// function swapMinMax(arr) {
// 	if (arr27.length < 2) {
// 		return arr27; // 2 az olanda yer deyishmenin menasi galmir
// 	}

// 	let minIndex = 0;
// 	let maxIndex = 0;

// 	// min ve max elem index axtarishi
// 	for (let i = 1; i < arr27.length; i++) {
// 		if (arr27[i] < arr27[minIndex]) {
// 			minIndex = i;
// 		}
// 		if (arr27[i] > arr27[maxIndex]) {
// 			maxIndex = i;
// 		}
// 	}
// 	//min ve max yerlerin deyishmeyi
// 	let temp = arr27[minIndex];
// 	arr27[minIndex] = arr27[maxIndex];
// 	arr27[maxIndex] = temp;
// 	return arr;
// }
// let arr27 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// console.log("Original array:", arr27);

// let swappedArray = swapMinMax(arr27.slice());
// console.log("Swapped array:", swappedArray);

//************************************************************************************ */
// 28. Verilmiş array daxilində ixtiyari(random) ədədi ekrana çıxaran proqram
// tərtib edin
// function getRandomElement(arr) {
// 	// Генерируем случайный индекс от 0 до длины массива - 1
// 	let randomIndex = Math.floor(Math.random() * arr.length);
// 	return arr[randomIndex];
// }

// let randomElement = getRandomElement(arr27);
// console.log("Random element : ", randomElement);

//************************************************************************************ */
// 29. 1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin

// for (i = 1; i <= 100; i++) {
// 	if (i % 10 == 1) console.log("təkliyi 1 olan ədədlər : ", i);
// }
//************************************************************************************ */
// 30. Daxil olunmuş ifadənin polindrom olduğunu yoxlayın. (polindrom
// dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü, 121,1331,4554
// və s.)
// function isPalindrome(str) {
// 	//     replace(/\s+/g, ''): Удаляет все пробелы из строки с помощью регулярного выражения \s+, которое находит все пробелы, и флага g, который указывает на глобальный поиск по всей строке.
// 	str = str.toLowerCase().replace(/\s+/g, ""); //alt registr ve " " pozuruq

// 	let reversedStr = str.split("").reverse().join(""); //ters setir aliriq;.join('')masivin elem setire chevirir

// 	return str === reversedStr;
// }

// console.log("121", isPalindrome("121"));
// console.log("1331", isPalindrome("1331"));
// console.log("4554", isPalindrome("4554"));
// console.log("ütü", isPalindrome("ütü"));
// console.log("1(@kwwid", isPalindrome("1(@kwwid"));
//*********************************************************************************** */
// 31. Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram dedikdə
// sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo solo və s.)

// function isAnagram(str1, str2) {
// 	str1 = str1.replace(/\s+/g, "").toLowerCase();
// 	str2 = str2.replace(/\s+/g, "").toLowerCase();

// 	if (str1.length !== str2.length) {
// 		return false;
// 	}

// 	let word1 = str1.split("").sort().join("");
// 	let word2 = str2.split("").sort().join("");

// 	return word1 === word2;
// }

// console.log("oslo", "solo", isAnagram("oslo", "solo"));

//************************************************************************************ */
// 32. Daxil olunmuş mətndə saitləri silən proqram yaradın

// function removeVowels(text) {
// 	// Определяем регулярное выражение для гласных букв
// 	//Регулярное выражение включает все гласные буквы (как строчные, так и прописные).
// 	let vowels = /[aeiouəöüıiAEIOUƏÖÜI]/g;
// 	// Заменяем все гласные на пустую строку
// 	return text.replace(vowels, "");
// }

// let text32 = "Verilmiş mətndə saitləri silən proqram yaradın";
// let result32 = removeVowels(text);
// console.log(result32);

//************************************************************************************ */
// 33. İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət string
// ifadə yaradın (məsələn input:5 output: qeg8d)

// function generateRandomString(length) {
// 	// Определяем возможные символы, которые могут быть использованы
// 	let characters =
// 		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ƏəÜüÇçŞşöÖğĞ";
// 	let result = "";

// 	for (let i = 0; i < length; i++) {
// 		let randomIndex = Math.floor(Math.random() * characters.length);
// 		result += characters[randomIndex];
// 	}

// 	return result;
// }

// let inputLength = +prompt("Simvolun sayisini bildirin  ");
// let randomStr = generateRandomString(inputLength);
// console.log(randomStr);

//************************************************************************************ */
// 34. Daxil olunmuş sözdə neçə sait və samit olduğunu tapın

// function countVowelsAndConsonants(word) {
// 	// Определяем регулярные выражения для гласных и согласных
// 	let vowelsRegex = /[aeiouəöüıiAEIOUƏÖÜI]/g;
// 	let consonantsRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;

// 	let vowelsCount = word.match(vowelsRegex).length;
// 	let consonantsCount = word.match(consonantsRegex).length;

// 	return { vowels: vowelsCount, consonants: consonantsCount };
// }
// let word = "Daxil olunmuş sözdə neçə sait və samit olduğunu tapın";
// let counts = countVowelsAndConsonants(word);
// console.log(`Saitlər: ${counts.vowels}, Samitlər: ${counts.consonants}`);

//************************************************************************************ */
// 35. Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod
// yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin
// cəmi özünə bərabər olan ədədə deyilir - məs: 6=1+2+3; 28=1+2+4+7+14)

// function isPerfectNumber(num) {
// 	// Проверяем, является ли число положительным
// 	if (num <= 1) {
// 		return false;
// 	}
// 	let sum = 0;
// 	for (let i = 1; i <= num / 2; i++) {
// 		if (num % i === 0) {
// 			sum += i;
// 		}
// 	}

// 	return sum === num;
// }
// for (i = 1; i < 1000000; i++)
// 	if (isPerfectNumber(i)) console.log("Is perfect number : ", i);

//************************************************************************************ */
// 36. Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın1.

// function Sum36(num) {
// 	if (num == 0) return 0;
// 	return (num % 10) + Sum36(Math.floor(num / 10));
// }
// function isNumber36(num) {
// 	return typeof num === "number" && !isNaN(num);
// }

// let number36 = +prompt("Eded daxil edin");
// // let number36=9989
// console.log(number36);
// if (isNumber36(number36)) {
// 	console.log(Sum36(number36));
// } else {
// 	console.log("Daxil etdyiniz edet deyil");
// }
