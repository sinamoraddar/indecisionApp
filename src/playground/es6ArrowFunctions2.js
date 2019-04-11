// const add = (a,b)=>{
//     // console.log(arguments)
//     return a+b;
// }
// console.log(add(55,-1,1,2,455,'askdj'));
// const user={
//     name:'sina',
//     cities:['tehran','shahriar'],
//     printPlacesLived(){
//         return this.cities.map((city)=>`${this.name} has lived in ${city}`);
//     }
// }
// console.log(user.printPlacesLived());
const multiplier={
    numbers:[5,8],
    multiplyBy:4,
    multiply(){
        return this.numbers.map((number)=>number*this.multiplyBy);
    }
}
console.log(multiplier.multiply([1,2,3]));