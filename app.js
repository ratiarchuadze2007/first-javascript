//1)რა განსხვავება პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში?
//answer: პრიმიტიულ ცვლადს შეგვიდზლია მივანიჭოთ მარტო ერთი მნიშვნელობა და არაპრიმიტიულს რამდენიც გვინდა

//2)რა განსხვავება ცვლადებს const და let შორის და დაწერეთ პატარა მაგალითიც!!
//answer: let ში რასაც დავწერთ შეგვიძლია შევუცვალოთ მნიშვნელობა და რასაც დავწერთ const ში ის იქნება სულ და ვერ შევუცვლით მნიშვნელობას
// მაგ: 
let age = 23;
console.log("before change",  age)
  age = 16;
  console.log("after change", age)

//      const ში არ შეიცვლება

//3)დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.

let names = "rati";  
let ages = 22;
let died = false;
let adress;
let cities = null;


console.log(names);
console.log(ages);
console.log(died);
console.log(adress);
console.log(cities);

names = "dato";
cities = "tbilisi";

console.log(names);
console.log(cities);





//4)აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
//(firstName,lastName,age,email,address,isStudent) და დალოგეთ


let info = [
{
  firstName: "rati",
  lastNAme: "archuadze",
  age: 16,
  email: "rati.archuadze2007@gmail.com",
  address: "tbilisi-temqa",
  isStudent: true,
}
]

console.log(info);