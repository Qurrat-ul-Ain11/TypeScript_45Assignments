let guests: string[] = ["Ali", "Sara", "Sana"];
console.log("Great news! I can arrange a bigger dinner table.");

//Adding more guests to the existing list
guests.unshift("Amna");
guests.splice(guests.length / 2, 0, "Karim");
guests.push("Bari");

//Invitation after expanding guest list

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to have a dinner with me tonight?`)
});