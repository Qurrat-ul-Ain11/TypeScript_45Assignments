let users : string[] = ["Ali", "Sara", "Admin", "Karim", "Umar"];
for(let i = 0; i < users.length ; i++){
    if(users[i] === "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${users[i]}, Thank you for logging in again.`)
    }
}
