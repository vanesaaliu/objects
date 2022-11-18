// 1. Create an object that describes a car (manufacturer, model, year of release, average speed)
//  and the following methods for working with this object:
//  A method that displays the car info
//  A method for counting a time frame necessary to cover a given distance with the average speed.
//  Note that every 4 hours the driver has to take a 1-hour break.
// let car={
//     manufacturer: 'Volkswagen',
//     model:'A3',
//     releaseYear: 2020,
//     averageSpeed: '100 km/h',
//     displayCarInfo() {
//        console.log("Car manufacturer: "+ this.manufacturer + ", model: "+ this.model + ", release year: " +this.releaseYear+" and average speed: "+this.averageSpeed);
//     },

//     timeCount(distance){
//         let time=distance / this["average speed"];
//         for (let i = 0; i <= time; i++) {
//             if (i % 4 == 0) {
//                 time--;
//             }
//         }
//         console.log("time needed is:",time);
//     }
// };

// car.displayCarInfo();
// car.timeCount(40);
// // 2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:
// // A function for adding two fraction objects.
// // A function for subtracting two fraction objects.
// // A function for multiplying two fraction objects.
// // A function for dividing two fraction objects.
// // A function for simplifying a fraction object.


// let math1={
//     numerator: 30,
//     denominator: 6
// };
// let math2={
//     numerator:24,
//     denominator: 8
// };

// function adding(num1,num2){
//     console.log((num1.numerator/num1.denominator)+(num2.numerator+num2.denominator));
// }
// adding(math1,math2);
// function subtracting(num1,num2){
//     console.log((num1.numerator/num1.denominator)-(num2.numerator+num2.denominator));
// }
// subtracting(math1,math2)
// function dividing(num1,num2){
//     console.log((num1.numerator/num1.denominator)/(num2.numerator+num2.denominator));
// }
// dividing(math1,math2);
// function simplifying(num1){
//         for(let i=0;i<=num1.numerator;i++){
//             for(let j=0;j<=num1.denumerator;j++){
//                 if(num1.numerator%i==0 && num1.denumerator%j==0 && i==j){
//                     if(i%j==0){
//                         console.log(i/j);
//                     }else {
//                     console.log(i,"/",j);
//                     }
//                 }
//             }
//         }
// }
// simplifying(math1);

// 3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:
// A method for displaying the time.
// A method for changing the time by a given amount of seconds.
// A method for changing the time by a given amount of minutes. 
// A method for changing the time by a given amount of hours.
// Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

// let time = {
//     hours: 17,
//     minutes: 42,
//     seconds: 15,
//    timeinfo(info) {
//     console.log(`The time currently is: ${time.hours}:${time.minutes}:${time.seconds}`);
//    },
// changetimebysec(secchange){
//         let sec = time.seconds + secchange;
//         if(sec>=60){
//             let m = (sec / 60) << 0
//             time.minutes += m
//             sec -= 60 * m
//         }
//         console.log(`The time currently is: ${this.hours}:${this.minutes}:${sec}`);
//     },
// changetimebymins(minchange){
//         let min = time.minutes + minchange;
//         if(min>=60){
//             let h = (min / 60) << 0
//             time.hours += h
//             min -= 60 * h
//         }
//         console.log(`The time currently is: ${this.hours}:${min}:${this.seconds}`);
//     }
// };

// time.changetimebysec(100);