let magicians: string[] = ["Smith", "Dmitry", "Tian"];

function show_magicians(magicians: string[]){
    for(let i=0; i<magicians.length; i++){
        console.log(magicians[i])
    }
};

//modify the list
function make_great(magicians: string[]){
    for(let i=0; i<magicians.length; i++){
        magicians[i] = magicians[i] + " the Great"
    }
};

//making a copy of orirginal array using .slice function
let copy_magicians = magicians.slice();

//modify the copied array
let copy_great_magicians = make_great(copy_magicians);

//show original array
show_magicians(magicians);

//show modified array
show_magicians(copy_magicians)
