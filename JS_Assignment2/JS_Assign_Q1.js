/**
     1. Write a JS program to create object of person with fields as follows:-

    fname - string
    lname - string
    age - int
    skills - array
    address - object
        city - string
        pincode - int
    dateOfBirth - Date
    married - Boolean
    profession - string
Create minimum 2 objects and display the object's detail uisng global print method.

 */

 var person1 = {
    fname:"Shubham",
    lname:"Raut",
    age:23,
    skills:['java','html'],
    address: add={city:"Digras",
                    pincode:"445203"},
    dateOfBirth:new Date('1995-03-19').toDateString(),
    married:false,
    profession:"Analyst",
    prints(){
        console.log(this.fname,
            this.lname,
            this.age,
            this.skills,
            this.address,
            this.dateOfBirth,
            this.married,
            this.profession)

    }
 }

 
 var person2 = {
    fname:"Ujawala",
    lname:"Gawari",
    age:25,
    skills:['JS','java','html'],
    address: add={city:"Mumbai",
                    pincode:"440000"},
    dateOfBirth:new Date('1993-04-09').toDateString(),
    married:true,
    profession:"Analyst",
    prints(){
        console.log(this.fname,
            this.lname,
            this.age,
            this.skills,
            this.address,
            this.dateOfBirth,
            this.married,
            this.profession)

    }
 }

 person1.prints();
 person2.prints();