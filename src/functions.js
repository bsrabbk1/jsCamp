function addToCart(quantity,productName="Elma") {  // Elma default değerimiz
    console.log("Sepete eklendi : "+ productName + ": "+ quantity)
}
addToCart(8);

let sayHello = ()=>{
    console.log("Hello World");
}
sayHello();

let sayHello2 = function () {
    console.log("Hello World 2");
}
sayHello2();


let product1={productName:"Karpuz",unitPrice:8,quantity:4}

function  addToCart3(product) {
    console.log("Ürün : "+product.productName);
    console.log("Adet : "+product.quantity);
    console.log("Fiyat : "+product.unitPrice);
}

addToCart3(product1);

function addToCart4(x) {
    console.log(x);
}

let Products=[
    {productName:"Etek",unitPrice:150,quantity:10},
    {productName:"Şort",unitPrice:100,quantity:20},
    {productName:"Elbise",unitPrice:50,quantity:15}
]

addToCart4(Products);

function add(bisey,...numbers) {  // ... koymak rest operatörü
  // eğer rest operatörünün dışında baika bir parametrem veya parametrelerim varsa onları başa yazmalıyım
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i];
  }    
  console.log(total);
  console.log(bisey);  // çıktısı 5

}
add(5,8);
// add(9,70);
// add(5,12);


let numbers=[1,7,20,4,58,40];
console.log(...numbers);
console.log(Math.max(...numbers));  // ... koymak numbersı ayır demek


// react componentlerden oluşan br kütüphane single page dir

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu :",populations:"20M"},
    {name:"Marmara :",populations : "30M"},
    {name:"Karadeniz :",populations: "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Giresun","Trabzon"],
        
    ]
]
console.log(marmara.populations);
console.log(karadeniz.name);
console.log(icAnadoluSehirleri);


let newProductName, newUnitPrice, newQuantity;  // 3 adet değişken tanımladım  
// değişkenleri objelere atadım
({productName:newProductName, unitPrice:newUnitPrice,quantity:newQuantity}={productName:"Elma",unitPrice:10,quantity:60})

console.log(newProductName);
console.log(newQuantity);
console.log(newUnitPrice);
