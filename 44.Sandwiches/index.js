function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with ".concat(items.join(", ")));
}
;
make_sandwich("Cheese", "Mayo");
make_sandwich("Cheese", "Chicken", "IceBerg Lettuce");
make_sandwich("Cottage cheese", "Mayo", "Onion", "Garlic");
