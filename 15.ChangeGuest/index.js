var guests = ["Ali", "Sara", "Umar"];
var unableToAttend = "Umar";
console.log("".concat(unableToAttend, " cannot make it to dinner."));
//Replacing the guest
var newGuest = "Sana";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitation
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to have a dinner with me tonight."));
});
