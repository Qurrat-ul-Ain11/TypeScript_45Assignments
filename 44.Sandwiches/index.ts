function make_sandwich(...items:string[]){
    console.log(`Making a sandwich with ${items.join(", ")}`)
};

make_sandwich("Cheese", "Mayo");
make_sandwich("Cheese", "Chicken", "IceBerg Lettuce");
make_sandwich("Cottage cheese", "Mayo", "Onion", "Garlic");