// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.Id = id;
        this.email = email;
        this.role = role;
    }

    getName(){
        console.log(this.name);
    }

    getId(){
        console.log(this.Id);
    }

    getEmail(){
        console.log(this.email);
    }
    
    getRole(){
        return "Employee"
        console.log("....getRole.....");
    }
}


module.exports = Employee;