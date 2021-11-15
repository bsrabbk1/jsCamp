console.log("Merhaba Kodlama.io")
let sayi1=12
sayi1="busra"
let student={id:2, name:"Busra"}
// console.log(student );

function save(puan=10,ogrenci) { // burda yazdığımız puan default parametredir default parametreleri sona yazmamız gerekir
    // console.log(ogrenci.name+" : "+puan)
}
save(undefined,student);

let students=["Engin Demiroğ","Büşra Bebek","Halit kalaycı","Engin Toprak"]
// console.log(students)

let students2=[student,{id:2, name:"Berat"},"Busra",{city:"New York"}]
// console.log(students2)


// rest (kelime anlamı geriye kalan)
// C# da ki karşılığı params
// Javada karşılığı varArgs
let showProducts= function (id,...products) {
    console.log(id)
    console.log(products[0])
}

// console.log(typeof showProducts)  // showProducts'ın türüne bakmış oluyoruz
// showProducts(10,"Elma","Armut","Karpuz")  // boş bir arary olarak döner çünkü restte bizim gönderdiğimiz değerler ...products kısmı bir array



// spread (kelime anlamı ayrıştırmak demek)
let points=[1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points)) // Math.max bana bu sayıların en büyüğünü verir
console.log(..."ABC","D",..."EFG","H") // "ABC" ve "EFG" önüne ... yazdığımız da harfler ayrılır 

// Destructuring
// Destruct parçalamak demek
// React hooks ta en çok kullanılan şeylerden biridir
// Destructuring elimizdeki arrayin değerlerini değişkenlere atama yöntemidir.

let populations=[10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations  // yani populations arrayini sırasıyla small, medium ve high değerlerine aktar demek
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)


function someFunction([small1,number]) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])
console.log(category.name)

let {id,name}= category  // burda da bir objeye destructing yapmış olduk
console.log(id)
console.log(name)

// Redux
