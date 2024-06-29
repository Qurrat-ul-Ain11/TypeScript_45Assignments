let places: string[] = ["Mecca", "Madina", "Turkey", "Kashmir", "KPK"];
console.log("Original order:", places);

//Alphabetical order
console.log("Alphabetcal order:", [...places].sort());
console.log("Original order:", places);

//Reverse order
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);

//reverse the order

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);


//sort in alphabeical order
places.sort();
console.log("Alphabetical order:", places);
console.log("Original order:", places);


places.reverse();
console.log("Reverse alphabetical order:", places);