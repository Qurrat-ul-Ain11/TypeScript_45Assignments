var magicians = ["Smith", "Dmitry", "Tian"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
;
show_magicians(magicians);
//modify the list
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); //modifies the array
show_magicians(magicians); //original array modified
