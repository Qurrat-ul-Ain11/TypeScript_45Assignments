var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Mecca", "Madina", "Turkey", "Kashmir", "KPK"];
console.log("Original order:", places);
//Alphabetical order
console.log("Alphabetcal order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
//Reverse order
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
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
