 let cart = [
     {id:1, productName:"Telefon",quantity:3, unitPrice:4000},
     {id:2, productName:"Bardak",quantity:2, unitPrice:30},
     {id:3, productName:"Kalem",quantity:1, unitPrice:20},
     {id:4, productName:"Şarj Cihazı",quantity:2, unitPrice:100},
     {id:5, productName:"Kitap",quantity:3, unitPrice:30},
     {id:6, productName:"Pot",quantity:5, unitPrice:150},
 ]

 // angular ve react ile geliştirdiğimiz uygulamalara SPA diyoruz
 // yani single page application ( tek sayfa uygulama)
console.log("<ul>")
 cart.map(product=>{
     console.log("<li>"+product.productName+": "+ product.unitPrice*product.quantity+"</li>")
 })
 console.log("</ul>")

 let total = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0) // acc akümülator aslında 
 // ürünün birim fiyatını akümülatöre ekliyor ürünün ilk fiyatı 0 dedik
 console.log(total)

let quantityOver2= cart.filter(product=>product.quantity>2)  // yani sepeti benim için filtrele ve herbir ürün için bu şart o dataya uyuyorsa onu yeni bir arraye ata (filter yedek bir array oluşturuyor öyle düşünelim)
console.log(quantityOver2)








 function addToCart(sepet) {
     sepet.push( {id:7, productName:"Ruhsat",quantity:5, unitPrice:20})
 }
 addToCart(cart)
 console.log(cart)
