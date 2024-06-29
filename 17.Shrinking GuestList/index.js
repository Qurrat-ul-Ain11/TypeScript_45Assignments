var guests = ["Amna", "Ali", "Karim", "Sara", "Sana", "Bari"];
console.log("Unfortunately, I am able to invite only two people for dinner.");
guests.splice(0, guests.length);
// //removing guests from list
// while (guests.length > 2){
//     let removedGuest = guests.pop();
//     console.log(`Sorry ${removedGuest}, I cannot invite you to dinner tonight.`)
// };
// //dinner invitation for rest of the guests
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you are still invited to dinner.`)
// });
// //empty list
// guests.splice(0, guests.length);
// console.log(guests);
