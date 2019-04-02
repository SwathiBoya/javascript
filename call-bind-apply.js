function person(){
    // this.username = "Swathi";
    console.log(this.username);
    console.log(this.password);
}
var userDetails ={
    username:"Swathi",
    password:"1234"
}
person.call (userDetails);