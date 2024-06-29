function make_car(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car = {manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
};

console.log(make_car("Toyota", "Aqua", ["color", "red"], ["year", 2022]));
console.log(make_car("Tesla", "Model Y", ["color", "blue"], ["electric", true]))