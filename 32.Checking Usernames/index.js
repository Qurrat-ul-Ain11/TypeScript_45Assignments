var current_users = ["user12", "user03", "user24", "user02", "user765"];
var new_users = ["user45", "user12", "user34", "user30", "user02"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
