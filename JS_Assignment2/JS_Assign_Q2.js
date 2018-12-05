/**
 * 2. Modify the above program to create 2 objects, amitabh and abhishek, 
 * here abhishek has some common properties from amitabh, 
 * try to use it such common properties from amitabh instead of creating it in abhishek.
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
    
    abhishek.print();
    amitabh.print();