var magicians = ["Smith", "Dmitry", "Tian"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
;
//modify the list
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
;
//making a copy of orirginal array using .slice function
var copy_magicians = magicians.slice();
//modify the copied array
var copy_great_magicians = make_great(copy_magicians);
show_magicians(magicians);
show_magicians(copy_magicians);
