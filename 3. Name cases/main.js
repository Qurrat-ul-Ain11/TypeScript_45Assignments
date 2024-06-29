var personName = "Umar";
//lower case
console.log("lowercase:", personName.toLowerCase());
//uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
//Titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
