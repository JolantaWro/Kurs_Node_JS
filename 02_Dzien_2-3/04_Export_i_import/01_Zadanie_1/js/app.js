import {Square} from "./Square";


const square = new Square(2);
square.sayName();
console.log(square.area());
console.log(new Square().area());

// import { format } from "date-fns";
//
// const date = new Date();
// const hour = format(date, "HH:mm:ss");
//
// console.log(hour);