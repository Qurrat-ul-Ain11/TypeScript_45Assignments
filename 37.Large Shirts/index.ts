function make_shirt(size: string = "large", message: string= "I love TypeScript!"){
    console.log(`Making a ${size} size T-shirt with a message ${message} printed on it.`)
};
//default size and message
make_shirt();

//custom size
make_shirt("medium")

//default size and message
make_shirt("small", `"!I hate coding:)"`);