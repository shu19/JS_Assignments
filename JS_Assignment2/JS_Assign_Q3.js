/**
 * 3. Modify the above code to create third object as "Aaradhya", 
 * this object shares the common properties from amitabh as well as 
 * abhishek accordingly demostrate on your own.
 */

 
var amitabh = new Object();
amitabh.fname = "Amitabh";
amitabh.lname = "Bachchan";
amitabh.age = 60;
amitabh.skills = ['Acting', 'Dancing'];
amitabh.address = {
    city: "Mumbai",
    pincode: "400001"
};
amitabh.dateOfBirth = new Date('1960-03-19').toDateString();
amitabh.married = true;
amitabh.profession = "Actor";
amitabh.print =function(){
    console.log(this.fname,this.lname,this.age,this.skills,this.address,this.dateOfBirth,this.married,this.profession);
}


var abhishek = Object.create(amitabh);
abhishek.fname="Abhishek";
abhishek.age=35;
abhishek.dateOfBirth=new Date('1985-03-25').toDateString();
// abhishek.print =function(){
//     console.log(this.fname,this.lname,this.age,this.skills,this.address,this.dateOfBirth,this.married,this.profession);
// }

var Aaradhya= Object.create(abhishek);
    Aaradhya.fname="Aaradhya";
    Aaradhya.age=5;
    Aaradhya.dateOfBirth=new Date('2013-05-15').toDateString();
    Aaradhya.profession="Student";
    Aaradhya.married=false;
    Aaradhya.skills=['crying','dancing'];
    

abhishek.print();
amitabh.print();
Aaradhya.print();