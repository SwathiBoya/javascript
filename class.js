(function(){
    `use strict`;
    
    class Person{
        constructor(){
            this.userName = "swathi";
            this.lastName = "Boya";
            this.firstName = "Swathi";
        }
        getFullName(){
            return this.firstName + this.lastName;
        }
    }
    var person = new Person();
    console.log(person.getFullName());

    class Company extends Person{
        constructor(){
            super();
        }
    }
    var company = new Company();
    console.log(company.getFullName());

    var a = {
        fanme:"Swathi",
        lname:"Boya"
    }
    var b = {
        ...a,
        address:"kurnool"
    }

    console.log(b);

    var arrA =[10,20];
    var arrB = arrA;
    arrA = [30,40];
    console.log("value of A: " + arrA+" " +"Value of B: " +"  " + arrB);

    
    var objA ={name:"Swathi"};
    var objB = objA;
    objA.name="Sudha";
    console.log("value of A: " + objA.name+" " +"Value of B: " +"  " + objB.name);
})();