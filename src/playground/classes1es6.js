class Person {
    constructor (name = 'Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `hi i am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years(s) old.`
    }
}
class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let ddesription = super.getDescription();
        if(this.hasMajor()){
            ddesription += ` Their major is ${this.major}.`
        }
        return ddesription;
    }

}
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation=homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(!!this.homeLocation){
            greeting += `. i'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}
const me = new Traveler('Sina Moraddar', 20, 'Shahriar');
const other = new Traveler();
console.log(me.getGreeting());
console.log(other.getGreeting());