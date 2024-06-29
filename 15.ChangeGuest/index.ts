let guests: string[] = ["Ali", "Sara", "Umar"];

let unableToAttend: string = "Umar";
console.log(`${unableToAttend} cannot make it to dinner.`);

//Replacing the guest
let newGuest:string = "Sana";
guests[guests.indexOf(unableToAttend)] = newGuest;

//New invitation
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to have a dinner with me tonight?`)
})