// 請介紹兩個字串方法跟數字方法

// string.toUperCase() 將字串變為大寫
let lowerStr = "abc";
console.log(lowerStr.toUpperCase());

//string.trim() 將字串前後去空白
let emptyStr = " abc ";
console.log("A" + emptyStr.trim() + "A");

//number.toFixed() 將浮點數依指定小數位數進行4捨五入
let floatNumber: number = 1.55;
console.log(floatNumber.toFixed(1));

//number.toString() 將數字型態以字串輸出
let age: number = 20;
console.log(typeof (age.toString()));


// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money > limit) {
    console.log("乾爹");
}