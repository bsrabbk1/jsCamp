class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber

    }
}
let customer = new Customer(1,"12345");
// prototyping
customer.name="Busra Bebek"
console.log(customer.name) // bu instance a yapılan prototyping

Customer.bisey="Bişey"
console.log(Customer.bisey)  // bu classa yapılan prototyping

console.log(customer.customerNumber)

class IndividualCustomer extends Customer { // bireysel müşteri
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName

    }
}
class CorporateCustomer extends Customer { // kurumsal müşteri
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}