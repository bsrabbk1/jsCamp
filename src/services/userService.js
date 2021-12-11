import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {

    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }
    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }

                    break;

                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    // formik-yup kütüphaneleri
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${field} is required `, user))
            }
        }

        if(Number.isNaN(Number.parseInt (user.age))){ // userın age i sayı değilse
            hasErrors =true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number `, user))
        }
        return hasErrors
    }
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasError = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasError = true
                this.errors.push(new DataError(`Validation Problem. ${field} is required `, user))
            }
        }

        if(Number.isNaN(Number.parseInt (+user.age))){ // userın age i sayı değilse
            hasErrors =true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number `, user))
        }
        return hasError
    }

    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
               
                break;
            case "employee":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
        
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type",user))
                break;
        }
        this.loggerService.log(user)
    }
    listCustomers() {
         return this.customers
    }
    getCustomerById(id) {
         return this.customers.find(u => u.id === id)  // find verdiğimiz şarta göre data döndürür
    }

    getCustomersSorted(){
     return   this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName)
            return -1;
            else if(customer1.firstName===customer2.firstName){
                return 0;
            }
            else{
                return 1;
            }
        })
    }



}