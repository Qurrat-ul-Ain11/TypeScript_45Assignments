let current_users: string[] = ["user12", "user03", "user24", "user02", "user765"];
let new_users: string[] = ["user45", "user12", "user34", "user30", "user02"];

new_users.forEach(newUser => {
    if(current_users.some(currentUser => currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase())){
        console.log(`${newUser} will need to enter a new username.`)
    } else {
        console.log(`${newUser} is available.`)
    }
});