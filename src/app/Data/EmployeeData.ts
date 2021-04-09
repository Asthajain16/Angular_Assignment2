export class EmployeeData {
    id:string;
    firstname:string;
    lastname:string;
    emailid:string;
    contactnumber:number;
    address:string;
    username:string;
    password:string;
    gender:string;
    Qualification:string;
    Experience:string;

    constructor(id:string,firstname:string,lastname:string,emailid:string,contactnumber:number,address:string,username:string,password:string,
      gender:string,Qualification:string,Experience:string){
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.emailid=emailid;
            this.contactnumber=contactnumber;
            this.address=address;
            this.username=username;
            this.password=password;
            this.gender=gender;
            this.Qualification=Qualification;
            this.Experience=Experience;
        }
}
