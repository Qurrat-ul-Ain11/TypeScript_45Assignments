let personName: String = "Umar";
//lower case

console.log("lowercase:", personName.toLowerCase());

//uppercase
console.log("uppercase:", personName.toLocaleUpperCase());

//Titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()) );
