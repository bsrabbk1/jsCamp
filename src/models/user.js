export default class User {
    constructor(id, firstName, lastName, city,age) { // constructer oluşturucu demek
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.city = city
        this.age = age
    }
}

// model bizim componentlerimizde kullanıcıya gösterdiğimiz veri tiplerinin veya kullanıcıdan alıp apiye gönderdiğimiz veri tipleri için kullandığımız isim  
