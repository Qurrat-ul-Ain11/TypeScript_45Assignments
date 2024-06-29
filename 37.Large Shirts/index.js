function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("Making a ".concat(size, " size T-shirt with a message ").concat(message, " printed on it."));
}
;
//default size and message
make_shirt();
//custom size
make_shirt("medium");
//default size and message
make_shirt("small", "\"!I hate coding:)\"");
